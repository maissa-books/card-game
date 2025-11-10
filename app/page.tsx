"use client";

import { useState } from "react";
import { Heart, Volume2, SkipForward, RotateCcw } from "lucide-react";
import GameCard from "@/components/game-card";
import LanguageSelector from "@/components/language-selector";
import GameMode from "@/components/game-mode";
import { useTranslation } from "@/hooks/use-translation";
import PWAInstallButton from "@/components/pwa-install-button";

type GameStatus = "menu" | "mode" | "playing" | "finished";

export default function Home() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("menu");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { t } = useTranslation(currentLanguage);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedMode, setSelectedMode] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const getCardCount = (mode: string): number => {
    const counts: Record<string, number> = {
      discovery: 50,
      romantic: 40,
      deep: 50,
      spicy: 30,
      stories: 100,
      scenarios: 10,
    };
    return counts[mode] || 40;
  };

  const handleStartGame = (mode: string) => {
    setSelectedMode(mode);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setGameStatus("playing");
  };

  const handleNextCard = () => {
    setIsFlipped(false);
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
    const maxCards = getCardCount(selectedMode);

    if (currentCardIndex + 1 >= maxCards) {
      setGameStatus("finished");
    } else {
      handleNextCard();
    }
  };

  const handleRestart = () => {
    setGameStatus("menu");
    setCurrentCardIndex(0);
    setSelectedMode("");
    setIsFlipped(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 dark:from-slate-950 dark:via-rose-900 dark:to-slate-950">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-200 dark:bg-rose-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 dark:bg-amber-900/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <PWAInstallButton />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Language Selector */}
        <div className="absolute top-6 right-6">
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={(lang) => {
              setCurrentLanguage(lang);
              setGameStatus("menu");
            }}
          />
        </div>

        {/* Menu Screen */}
        {gameStatus === "menu" && (
          <div className="w-full max-w-md text-center animate-in fade-in">
            <div className="mb-8">
              <Heart className="w-16 h-16 mx-auto text-rose-500 fill-rose-500 mb-4" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 dark:text-rose-100 mb-2">
                {t("title")}
              </h1>
              <p className="text-lg text-rose-700 dark:text-rose-300 font-light">
                {t("subtitle")}
              </p>
            </div>
            <button
              onClick={() => setGameStatus("mode")}
              className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-serif text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t("startGame")}
            </button>
          </div>
        )}

        {/* Mode Selection Screen */}
        {gameStatus === "mode" && (
          <GameMode onModeSelect={handleStartGame} language={currentLanguage} />
        )}

        {/* Playing Screen */}
        {gameStatus === "playing" && (
          <div className="w-full max-w-2xl">
            <div className="mb-6 flex justify-between items-center">
              <div className="text-rose-700 dark:text-rose-300 font-medium">
                {t("card")} {currentCardIndex + 1}
              </div>
              <div className="text-rose-500 font-serif text-sm">
                {`${currentCardIndex + 1} / ${getCardCount(selectedMode)}`}
              </div>
            </div>

            <GameCard
              cardIndex={currentCardIndex}
              mode={selectedMode}
              language={currentLanguage}
              isFlipped={isFlipped}
              onFlip={() => setIsFlipped(!isFlipped)}
            />

            <div className="mt-8 flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 rounded-full border-2 border-rose-200 dark:border-rose-700 hover:bg-rose-50 dark:hover:bg-slate-700 transition-all"
              >
                <Volume2 className="w-5 h-5" />
                {t("reveal")}
              </button>

              <button
                onClick={handleSkipCard}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 rounded-full border-2 border-amber-200 dark:border-amber-700 hover:bg-amber-50 dark:hover:bg-slate-700 transition-all"
              >
                <SkipForward className="w-5 h-5" />
                {t("skip")}
              </button>

              <button
                onClick={handleNextCard}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full transition-all font-serif font-medium"
              >
                {t("next")}
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Finished Screen */}
        {gameStatus === "finished" && (
          <div className="w-full max-w-md text-center animate-in fade-in">
            <div className="mb-8 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <Heart className="w-16 h-16 mx-auto text-rose-500 fill-rose-500 mb-4" />
              <h2 className="text-3xl font-serif font-bold text-rose-900 dark:text-rose-100 mb-4">
                {t("finished")}
              </h2>
              <p className="text-rose-700 dark:text-rose-300 mb-8 font-light">
                {t("finishedMessage")}
              </p>
              <button
                onClick={handleRestart}
                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-serif text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <RotateCcw className="w-5 h-5" />
                {t("playAgain")}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
