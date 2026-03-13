"use client";

import { useState, useEffect } from "react";
import { Heart, SkipForward, RotateCcw, Users, Copy, Link, Check, ExternalLink, Sparkles, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useP2P } from "@/hooks/use-p2p";
import { toast } from "sonner";
import GameCard from "@/components/game-card";
import GameMode from "@/components/game-mode";
import { useTranslation } from "@/hooks/use-translation";
import { getCards } from "@/data/cards";
// import PWAInstallButton from "@/components/pwa-install-button";
import BottomNav from "@/components/bottom-nav";
import { Progress } from "@/components/ui/progress";
import { Drawer } from "vaul";
import { useHaptic } from "@/hooks/use-haptic";

type GameStatus = "menu" | "mode" | "playing" | "finished";

const getCardCount = (mode: string) => {
  return getCards("en", mode).length;
};

export default function Home() {
  const { t } = useTranslation();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedMode, setSelectedMode] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<GameStatus>("menu");
  const [joinId, setJoinId] = useState("");
  const [shuffledCards, setShuffledCards] = useState<{ question: string }[]>([]);
  const [showMultiplayer, setShowMultiplayer] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [mounted, setMounted] = useState(false);
  const { triggerHaptic } = useHaptic();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onRemoteStateUpdate = (remoteState: any) => {
    if (remoteState.gameStatus !== undefined) setGameStatus(remoteState.gameStatus as GameStatus);
    if (remoteState.currentCardIndex !== undefined) setCurrentCardIndex(remoteState.currentCardIndex);
    if (remoteState.selectedMode !== undefined) setSelectedMode(remoteState.selectedMode);
    if (remoteState.activeTab !== undefined) setActiveTab(remoteState.activeTab);
  };

  const {
    peerId,
    isConnected,
    isInitializing,
    isHost,
    initPeer,
    connectToPeer
  } = useP2P(
    { gameStatus, currentCardIndex, selectedMode, activeTab },
    onRemoteStateUpdate
  );

  const copyRoomId = () => {
    if (peerId) {
      navigator.clipboard.writeText(peerId);
      toast.success("Room ID copied to clipboard!");
    }
  };

  useEffect(() => {
    if (selectedMode) {
      const rawCards = [...getCards("en", selectedMode)];
      for (let i = rawCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rawCards[i], rawCards[j]] = [rawCards[j], rawCards[i]];
      }
      setShuffledCards(rawCards);
    } else {
      setShuffledCards([]);
    }
  }, [selectedMode]);

  const handleStartGame = (mode: string) => {
    setSelectedMode(mode);
    setCurrentCardIndex(0);
    setGameStatus("playing");
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => {
      const nextIndex = prev + 1;
      const maxCards = getCardCount(selectedMode);
      if (nextIndex >= maxCards) {
        setGameStatus("finished");
        return prev;
      }
      return nextIndex;
    });
  };

  const handleSkipCard = () => {
    setCurrentCardIndex((prev) => {
      const nextIndex = prev + 1;
      const maxCards = getCardCount(selectedMode);
      if (nextIndex >= maxCards) {
        setGameStatus("finished");
        return prev;
      }
      return nextIndex;
    });
  };

  const handleRestart = () => {
    triggerHaptic("medium");
    setGameStatus("menu");
    setCurrentCardIndex(0);
    setSelectedMode("");
    setActiveTab("home");
  };

  const handleTabChange = (tabId: string) => {
    if (tabId === "home") {
      setGameStatus("menu");
    } else if (tabId === "modes") {
      setGameStatus("mode");
    } else if (tabId === "multiplayer") {
      setShowMultiplayer(true);
      initPeer();
    }
    setActiveTab(tabId);
  };

  return (
    <main className="min-h-screen bg-[#fff7f7] dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-x-hidden sensual-glow">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-200 dark:bg-rose-950/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-200 dark:bg-pink-950/20 rounded-full blur-[120px] opacity-20"></div>
      </div>

      {/* PWA banner is now in layout.tsx for global visibility */}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">

        {/* App Header (Persistent on sub-screens) */}
        {(gameStatus === "mode" || gameStatus === "playing") && (
          <header className="fixed top-0 left-0 right-0 z-50 h-20 px-6 flex items-center justify-between backdrop-blur-md bg-white/30 dark:bg-slate-950/30 border-b border-rose-100/50 dark:border-slate-800/50">
            <button
              onClick={() => {
                if (gameStatus === "playing") {
                  setGameStatus("mode");
                  setActiveTab("modes");
                } else {
                  setGameStatus("menu");
                  setActiveTab("home");
                }
              }}
              className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-rose-50 dark:hover:bg-slate-700 transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </button>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
              <span className="font-serif font-bold text-rose-900 dark:text-rose-100">{t("title")}</span>
            </div>
            <div className="w-10" /> {/* Spacer */}
          </header>
        )}

        {/* Menu Screen */}
        {gameStatus === "menu" && (
          <div className="w-full max-w-md text-center animate-in zoom-in-95 duration-700">
            <div className="mb-12 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-rose-400/20 blur-3xl animate-pulse"></div>
              <Heart className="w-20 h-20 mx-auto text-rose-500 fill-rose-500 mb-6 drop-shadow-2xl" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-rose-900 dark:text-rose-100 mb-4 tracking-tight">
                {t("title")}
              </h1>
              <p className="text-xl text-rose-700/80 dark:text-rose-300/80 font-light max-w-[280px] mx-auto leading-relaxed italic">
                {t("subtitle")}
              </p>
            </div>

            <div className="space-y-4 px-6">
              <button
                onClick={() => {
                  setGameStatus("mode");
                  setActiveTab("modes");
                }}
                disabled={isConnected && !isHost}
                className="w-full group relative overflow-hidden px-8 py-5 bg-gradient-to-br from-rose-500 to-pink-600 text-white font-serif text-xl rounded-[2rem] transition-all duration-500 transform hover:scale-[1.02] shadow-[0_20px_40px_-15px_rgba(225,29,72,0.3)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isConnected && !isHost ? "Waiting for Partner..." : t("startGame")}
                  <Sparkles className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Multiplayer Drawer */}
        <Drawer.Root open={showMultiplayer} onOpenChange={setShowMultiplayer}>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" />
            <Drawer.Content className="bg-white dark:bg-slate-900 flex flex-col rounded-t-[2.5rem] mt-24 fixed bottom-0 left-0 right-0 h-[85vh] z-[101] outline-none">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[2.5rem] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-slate-300 dark:bg-slate-800 mb-8" />
                <div className="max-w-md mx-auto px-6">
                  <div className="text-center mb-8">
                    <Users className="w-16 h-16 mx-auto text-rose-500 fill-rose-500 mb-4" />
                    <Drawer.Title className="text-3xl font-serif font-bold text-rose-900 dark:text-rose-100 mb-2">Play Together</Drawer.Title>
                    <Drawer.Description className="text-rose-700/60 dark:text-rose-300/60 italic">Connect with your partner across the miles</Drawer.Description>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-rose-50/50 dark:bg-slate-950/50 p-6 rounded-3xl border border-rose-100/50 dark:border-rose-900/30">
                      <p className="text-[10px] font-black text-rose-400 dark:text-rose-500 mb-4 uppercase tracking-[0.2em]">Your Room ID</p>
                      <div className="flex gap-2">
                        <code className="flex-1 p-3 bg-white/80 dark:bg-slate-900/80 rounded-2xl text-rose-600 dark:text-rose-400 font-mono text-sm break-all flex items-center border border-rose-100 dark:border-rose-900/20">
                          {isInitializing ? "Creating..." : peerId || "Wait..."}
                        </code>
                        <button
                          onClick={() => { triggerHaptic("light"); copyRoomId(); }}
                          disabled={!peerId}
                          className="p-4 bg-rose-500 text-white rounded-2xl hover:bg-rose-600 shadow-lg shadow-rose-500/20 transition-all active:scale-90 disabled:opacity-50"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="relative h-px flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-200/50 dark:via-rose-900/30 to-transparent"></div>
                      <span className="relative bg-white dark:bg-slate-900 px-6 py-1 rounded-full text-[10px] text-rose-300 dark:text-rose-700 font-black tracking-widest uppercase border border-rose-100 dark:border-slate-800">Connection</span>
                    </div>

                    <div className="bg-rose-50/50 dark:bg-slate-950/50 p-6 rounded-3xl border border-rose-100/50 dark:border-rose-900/30">
                      <p className="text-[10px] font-black text-rose-400 dark:text-rose-500 mb-4 uppercase tracking-[0.2em]">Partner's ID</p>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Paste ID here..."
                          value={joinId}
                          onChange={(e) => setJoinId(e.target.value)}
                          className="flex-1 p-4 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-rose-100/50 dark:border-rose-900/20 text-rose-900 dark:text-rose-100 text-base focus:outline-none focus:ring-2 focus:ring-rose-500/50 placeholder:text-rose-200 transition-all"
                        />
                        <button
                          onClick={() => { triggerHaptic("medium"); connectToPeer(joinId); }}
                          disabled={!joinId}
                          className="p-4 bg-rose-500 text-white rounded-2xl hover:bg-rose-600 shadow-lg shadow-rose-500/20 transition-all active:scale-95 disabled:opacity-50"
                        >
                          <Link className="w-6 h-6" />
                        </button>
                      </div>
                    </div>

                    {isConnected && (
                      <div className="flex items-center justify-center gap-3 text-green-600 dark:text-green-400 font-black p-4 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-100 dark:border-green-900/20 uppercase tracking-[0.2em] text-[10px]">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        Connected!
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setShowMultiplayer(false)}
                    className="mt-12 w-full py-5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
                  >
                    Done
                  </button>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        {/* Mode Selection Screen */}
        {gameStatus === "mode" && (
          <div className="w-full max-w-2xl flex flex-col items-center mt-20 px-4 pb-20 relative z-10">
            {/* Contextual Decorative Elements */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-40 pointer-events-none -z-10 overflow-hidden opacity-50">
              {[...Array(6)].map((_, i) => (
                <Heart
                  key={i}
                  className={cn(
                    "absolute text-rose-200/40 dark:text-rose-900/10 animate-pulse fill-rose-200/20",
                    i % 2 === 0 ? "w-4 h-4" : "w-6 h-6"
                  )}
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i}s`
                  }}
                />
              ))}
            </div>

            <div className="mb-12 text-center animate-in slide-in-from-top-6 fade-in duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 mb-4 scale-90">
                <Sparkles className="w-3 h-3 text-rose-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600/60 dark:text-rose-400/60">The Experience</span>
              </div>
              <h2 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                {t("chooseMode")}
              </h2>
              <div className="h-1 w-12 bg-rose-500 mx-auto rounded-full mb-4 opacity-30" />
              <p className="text-sm text-slate-500 dark:text-slate-400 font-serif italic max-w-[280px] mx-auto leading-relaxed">
                {t("chooseModeDesc")}
              </p>
            </div>

            <div className={cn("w-full transition-all duration-700", isConnected && !isHost && "opacity-80 pointer-events-none")}>
              <GameMode onModeSelect={handleStartGame} />
              {isConnected && !isHost && (
                <div className="mt-4 px-8 py-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-rose-100/30 dark:border-rose-900/20 rounded-[2.5rem] text-center shadow-xl animate-in zoom-in-95 duration-700">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                    <p className="text-xs font-black text-rose-900 dark:text-rose-100 uppercase tracking-widest">Awaiting Selection</p>
                  </div>
                  <p className="text-[10px] text-rose-600/60 dark:text-rose-400/60 italic">Your partner is currently selecting the next phase of your journey...</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Playing Screen */}
        {gameStatus === "playing" && (
          <div className="w-full max-w-2xl px-4 mt-20 relative z-10 pb-32 flex flex-col items-center">

            {/* Background Romantic Aura */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-30">
              {[...Array(6)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-rose-200/40 dark:text-rose-900/10 animate-pulse fill-rose-200/20"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${Math.random() * 80}%`,
                    width: `${20 + i * 10}px`,
                    height: `${20 + i * 10}px`,
                    animationDelay: `${i * 0.7}s`,
                    animationDuration: `${3 + i}s`
                  }}
                />
              ))}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-rose-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="w-full max-w-md mb-10 animate-in fade-in slide-in-from-top-4 duration-1000">
              <div className="flex justify-between items-end mb-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-black text-rose-400 dark:text-rose-500/60 uppercase tracking-[0.3em]">
                    Phase
                  </div>
                  <div className="text-lg font-serif font-bold text-rose-900 dark:text-rose-100 capitalize">
                    {selectedMode.replace(/-/g, ' ')}
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="text-[10px] font-black text-rose-400 dark:text-rose-500/60 uppercase tracking-[0.3em] mb-1">
                    Journey
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-white font-mono flex items-baseline gap-1">
                    <span key={currentCardIndex} className="text-rose-600 dark:text-rose-400 animate-in zoom-in duration-300">
                      {currentCardIndex + 1}
                    </span>

                    <span className="text-xs text-rose-200 dark:text-rose-900/40">/</span>
                    <span className="text-xs text-rose-300 dark:text-rose-800">{getCardCount(selectedMode)}</span>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <Progress
                  value={((currentCardIndex + 1) / getCardCount(selectedMode)) * 100}
                  className="h-1.5 bg-rose-100/50 dark:bg-rose-950/20 overflow-hidden relative"
                />
                {/* Minimalist glow at the tip of progress */}
                <div
                  className="absolute top-0 left-0 h-full w-2 bg-white/40 blur-sm transition-all duration-500 ease-out"
                  style={{
                    left: `${((currentCardIndex + 1) / getCardCount(selectedMode)) * 100}%`,
                    transform: 'translateX(-100%)'
                  }}
                />
              </div>
            </div>

            {isConnected && (
              <div className="mb-10 flex flex-col items-center gap-3 animate-in slide-in-from-top-6 duration-700">
                <div className="flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white/40 dark:bg-slate-900/40 text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-rose-100/50 dark:border-rose-900/20 shadow-sm backdrop-blur-3xl">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  Synced
                </div>
                {isHost && (
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-rose-500/5 dark:bg-rose-500/10 text-rose-500 dark:text-rose-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-rose-400/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    Host Mode
                  </div>
                )}
              </div>
            )}

            <div className="w-full mb-14 drop-shadow-[0_20px_40px_rgba(225,29,72,0.1)]">
              <GameCard
                question={shuffledCards[currentCardIndex]?.question || ""}
                mode={selectedMode}
              />
            </div>

            {(!isConnected || isHost) && (
              <div className="flex gap-6 w-full max-w-md animate-in slide-in-from-bottom-8 duration-1000 delay-300">
                <button
                  onClick={handleSkipCard}
                  className="flex-1 py-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl text-rose-900/40 dark:text-rose-100/30 font-black uppercase tracking-[0.3em] text-[10px] rounded-[2rem] border border-rose-100/50 dark:border-rose-900/20 hover:bg-rose-50/50 dark:hover:bg-rose-900/10 transition-all active:scale-95 shadow-sm group flex items-center justify-center gap-2"
                >
                  <SkipForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {t("skip")}
                </button>
                <button
                  onClick={handleNextCard}
                  className="flex-[2] py-6 bg-gradient-to-br from-rose-500 to-rose-600 text-white font-black uppercase tracking-[0.3em] text-[11px] rounded-[2rem] hover:shadow-[0_15px_35px_-10px_rgba(225,29,72,0.4)] transition-all active:scale-95 shadow-xl group flex items-center justify-center gap-3 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-30 -left-full group-hover:left-full transition-all duration-1000" />
                  <Heart className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
                  {t("Next Card")}
                </button>
              </div>
            )}

            {isConnected && !isHost && (
              <div className="mt-10 px-10 py-8 bg-white/30 dark:bg-slate-900/30 backdrop-blur-3xl border border-rose-100/40 dark:border-rose-900/10 rounded-[2.5rem] text-center shadow-sm animate-in zoom-in-95 duration-700">
                <div className="flex items-center justify-center gap-5 mb-3">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-1.5 h-1.5 bg-rose-400/60 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.25}s` }} />
                    ))}
                  </div>
                  <p className="text-[11px] font-black text-rose-900/40 dark:text-rose-100/30 uppercase tracking-[0.3em]">Connecting Souls</p>
                </div>
                <p className="text-[11px] text-rose-500/40 italic leading-relaxed max-w-[200px] mx-auto">
                  Wait for your partner to open the next door...
                </p>
              </div>
            )}
          </div>
        )}

        {/* Finished Screen */}
        {gameStatus === "finished" && (
          <div className="w-full max-w-md text-center animate-in zoom-in duration-700 px-6">
            <div className="mb-8 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-[3rem] p-10 shadow-2xl border-2 border-rose-100/50 dark:border-slate-800/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 opacity-50"></div>
              <Heart className="w-24 h-24 mx-auto text-rose-500 fill-rose-500 mb-8 drop-shadow-xl animate-bounce" />
              <h2 className="text-4xl font-serif font-bold text-rose-900 dark:text-rose-100 mb-4 leading-tight">
                {t("finished")}
              </h2>
              <p className="text-rose-700/80 dark:text-rose-300/80 mb-10 font-light leading-relaxed italic">
                {t("finishedMessage")}
              </p>
              <button
                onClick={handleRestart}
                className="flex items-center justify-center gap-4 w-full px-8 py-5 bg-gradient-to-br from-rose-600 to-pink-700 hover:from-rose-700 hover:to-pink-800 text-white font-serif text-xl rounded-[2rem] transition-all duration-300 transform hover:scale-[1.02] shadow-xl active:scale-95"
              >
                <RotateCcw className="w-6 h-6" />
                {t("playAgain")}
              </button>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        {(gameStatus === "menu" || gameStatus === "mode") && (
          <BottomNav currentTab={activeTab} onTabChange={handleTabChange} />
        )}
      </div>
    </main>
  );
}
