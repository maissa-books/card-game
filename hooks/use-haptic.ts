"use client";

import { useCallback } from "react";

export function useHaptic() {
    const triggerHaptic = useCallback((type: "light" | "medium" | "heavy" | "error" | "success" = "light") => {
        if (typeof window !== "undefined" && "vibrate" in navigator) {
            switch (type) {
                case "light":
                    navigator.vibrate(10);
                    break;
                case "medium":
                    navigator.vibrate(20);
                    break;
                case "heavy":
                    navigator.vibrate(40);
                    break;
                case "success":
                    navigator.vibrate([10, 30, 10]);
                    break;
                case "error":
                    navigator.vibrate([50, 50, 100]);
                    break;
            }
        }
    }, []);

    return { triggerHaptic };
}
