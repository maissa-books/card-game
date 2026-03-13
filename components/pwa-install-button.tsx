"use client";

import { useEffect, useState } from "react";
import { X, Sparkles, Heart } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallBanner() {
  const { t } = useTranslation();
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // If it's iOS and not standalone, show the banner
    if (isIOSDevice && !isStandalone) {
      setIsVisible(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsVisible(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (!isVisible || isInstalled || isDismissed) {
    return null;
  }

  return (
    <div className="fixed top-6 left-6 right-6 z-[60] flex items-center justify-center pointer-events-none animate-in slide-in-from-top-12 duration-1000">
      <div className="w-full max-w-md bg-white/60 dark:bg-slate-900/60 backdrop-blur-3xl border border-rose-100/50 dark:border-rose-900/20 rounded-[2rem] p-4 flex items-center gap-4 shadow-[0_20px_50px_-15px_rgba(225,29,72,0.3)] pointer-events-auto group">

        {/* App Icon / Heart */}
        <div className="relative shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
          <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-serif font-black text-rose-950 dark:text-rose-100 truncate">
            {isIOS ? "Add to Home Screen" : `Install ${t("title")}`}
          </h4>
          <p className="text-[10px] text-rose-700/60 dark:text-rose-300/60 font-medium leading-tight">
            {isIOS ? "Tap Share → Add to Home Screen" : "For the best full-screen experience"}
          </p>
        </div>

        {/* Actions stack */}
        <div className="flex items-center gap-2 shrink-0">
          {!isIOS && (
            <button
              onClick={handleInstall}
              className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold rounded-xl shadow-md shadow-rose-500/20 transition-all active:scale-95"
            >
              Install
            </button>
          )}
          <button
            onClick={handleDismiss}
            className="p-2 text-rose-300 hover:text-rose-500 dark:text-slate-600 dark:hover:text-rose-400 transition-colors rounded-lg bg-rose-50/50 dark:bg-slate-800/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subtle Shine */}
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-25 group-hover:left-[150%] transition-all duration-1500" />
        </div>
      </div>
    </div>
  );
}
