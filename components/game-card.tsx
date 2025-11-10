"use client";
import { getCards } from "@/data/cards";

interface GameCardProps {
  cardIndex: number;
  mode: string;
  language: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function GameCard({
  cardIndex,
  mode,
  language,
  isFlipped,
  onFlip,
}: GameCardProps) {
  const cards = getCards(language, mode);
  const card = cards[cardIndex] || { question: "", answer: "" };

  const getCardColor = (mode: string) => {
    switch (mode) {
      case "deep":
        return "from-pink-100 via-pink-50 to-white dark:from-pink-900/50 dark:via-slate-800 dark:to-slate-900 border-pink-200 dark:border-pink-800/50";
      case "spicy":
        return "from-red-100 via-orange-50 to-white dark:from-red-900/50 dark:via-slate-800 dark:to-slate-900 border-red-200 dark:border-red-800/50";
      case "discovery":
        return "from-amber-100 via-yellow-50 to-white dark:from-amber-900/50 dark:via-slate-800 dark:to-slate-900 border-amber-200 dark:border-amber-800/50";
      case "romantic":
        return "from-rose-100 via-pink-50 to-white dark:from-rose-900/50 dark:via-slate-800 dark:to-slate-900 border-rose-200 dark:border-rose-800/50";
      case "stories":
        return "from-purple-100 via-pink-50 to-white dark:from-purple-900/50 dark:via-slate-800 dark:to-slate-900 border-purple-200 dark:border-purple-800/50";
      case "scenarios":
        return "from-indigo-100 via-purple-50 to-white dark:from-indigo-900/50 dark:via-slate-800 dark:to-slate-900 border-indigo-200 dark:border-indigo-800/50";
      default:
        return "from-rose-100 via-pink-50 to-white dark:from-rose-900/50 dark:via-slate-800 dark:to-slate-900 border-rose-200 dark:border-rose-800/50";
    }
  };

  const colors = getCardColor(mode);

  return (
    <div className="h-96 cursor-pointer perspective" onClick={onFlip}>
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card - Question side */}
        <div
          className={`absolute w-full h-full bg-gradient-to-br ${colors} rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center border-2 backdrop-blur-sm`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center space-y-6">
            <p className="text-rose-500 dark:text-rose-300 text-xs font-serif uppercase tracking-widest opacity-80">
              {mode === "deep"
                ? "Deep Connection"
                : mode === "spicy"
                ? "Spicy Actions"
                : mode === "stories"
                ? "Spicy Stories"
                : mode === "scenarios"
                ? "Extended Scenarios"
                : mode === "discovery"
                ? "Discovery"
                : "Romantic Moments"}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-rose-900 dark:text-white leading-snug">
              {card.question}
            </h2>
            <div className="flex justify-center gap-2 pt-4">
              <div className="w-1 h-1 bg-rose-400 rounded-full opacity-60"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full opacity-80"></div>
              <div className="w-1 h-1 bg-rose-400 rounded-full opacity-60"></div>
            </div>
            <p className="text-rose-400 dark:text-rose-300 text-sm italic">
              Touch to reveal...
            </p>
          </div>
        </div>

        {/* Back of card - Answer side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100 dark:from-amber-900/40 dark:via-rose-900/40 dark:to-pink-900/40 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center border-2 border-amber-200 dark:border-amber-700/50 backdrop-blur-sm overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center space-y-4">
            <p className="text-lg md:text-xl font-serif font-light text-rose-900 dark:text-white leading-relaxed">
              {card.answer}
            </p>
            <div className="mt-8 flex justify-center gap-3 pt-4 border-t border-rose-200/50 dark:border-rose-700/50">
              <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
