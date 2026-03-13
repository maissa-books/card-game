import { useState, useEffect, useCallback, useRef } from "react";
import Peer, { DataConnection } from "peerjs";
import { toast } from "sonner";

interface GameState {
    gameStatus: string;
    currentCardIndex: number;
    selectedMode: string;
    activeTab?: string;
}

export function useP2P(
    localState: GameState,
    onRemoteStateUpdate: (state: GameState) => void
) {
    const [peer, setPeer] = useState<Peer | null>(null);
    const [peerId, setPeerId] = useState<string>("");
    const [connection, setConnection] = useState<DataConnection | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isInitializing, setIsInitializing] = useState(false);
    const [isHost, setIsHost] = useState(false);

    // Ref to track roles to avoid stale closures in listeners
    const isHostRef = useRef(isHost);
    useEffect(() => {
        isHostRef.current = isHost;
    }, [isHost]);

    // Initialize Peer
    const initPeer = useCallback(() => {
        if (peer) return;
        setIsInitializing(true);

        const newPeer = new Peer();

        newPeer.on("open", (id) => {
            setPeerId(id);
            setIsInitializing(false);
            console.log("Peer opened with ID:", id);
        });

        newPeer.on("connection", (conn) => {
            console.log("Receiving connection from:", conn.peer);
            setIsHost(true);
            isHostRef.current = true; // Set ref immediately for the handler
            handleConnection(conn, true);
        });

        newPeer.on("error", (err) => {
            console.error("Peer error:", err);
            toast.error(`Connection error: ${err.type}`);
            setIsInitializing(false);
        });

        setPeer(newPeer);
        return newPeer;
    }, [peer]);

    // Ref to track the latest local state to avoid stale closures in listeners
    const localStateRef = useRef(localState);
    useEffect(() => {
        localStateRef.current = localState;
    }, [localState]);

    const handleConnection = (conn: DataConnection, roleAsHost: boolean) => {
        conn.on("open", () => {
            setConnection(conn);
            setIsConnected(true);
            toast.success("Partner connected!");

            // ONLY send current state if we are the host
            if (roleAsHost) {
                console.log("Host: sending initial state to guest");
                conn.send({ type: "SYNC_STATE", state: localStateRef.current });
            }
        });

        conn.on("data", (data: any) => {
            if (data.type === "SYNC_STATE") {
                // GUEST: update state from host
                // HOST: ignore state from guest
                if (!isHostRef.current) {
                    console.log("Guest: received state update from host");
                    onRemoteStateUpdate(data.state);
                } else {
                    console.log("Host: ignored state update from guest");
                }
            }
        });

        conn.on("close", () => {
            setIsConnected(false);
            setConnection(null);
            toast.info("Partner disconnected");
        });

        conn.on("error", (err) => {
            console.error("Connection error:", err);
            setIsConnected(false);
        });
    };

    const connectToPeer = (id: string) => {
        if (!peer) {
            const p = initPeer();
            if (!p) return;
            p.on("open", () => {
                setIsHost(false);
                isHostRef.current = false;
                const conn = p.connect(id);
                handleConnection(conn, false);
            });
        } else {
            setIsHost(false);
            isHostRef.current = false;
            const conn = peer.connect(id);
            handleConnection(conn, false);
        }
    };

    const broadcastState = (state: GameState) => {
        if (connection && isConnected) {
            connection.send({ type: "SYNC_STATE", state });
        }
    };

    // Sync local changes to remote (ONLY IF HOST)
    useEffect(() => {
        if (connection && isConnected && isHost) {
            connection.send({ type: "SYNC_STATE", state: localState });
        }
    }, [
        localState.gameStatus,
        localState.currentCardIndex,
        localState.selectedMode,
        localState.activeTab,
        isConnected,
        connection,
        isHost
    ]);

    return {
        peerId,
        isConnected,
        isInitializing,
        isHost,
        initPeer,
        connectToPeer,
        broadcastState
    };
}
