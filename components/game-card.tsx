"use client"
import { getCards } from "@/data/cards"

interface GameCardProps {
  cardIndex: number
  mode: string
  language: string
  isFlipped: boolean
  onFlip: () => void
}

export default function GameCard({ cardIndex, mode, language, isFlipped, onFlip }: GameCardProps) {
  const cards = getCards(language, mode)
  const card = cards[cardIndex] || { question: "", answer: "" }

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
          className="absolute w-full h-full bg-gradient-to-br from-rose-100 via-pink-50 to-white dark:from-rose-900/50 dark:via-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center border-2 border-rose-200 dark:border-rose-800/50 backdrop-blur-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center space-y-6">
            <p className="text-rose-500 dark:text-rose-300 text-xs font-serif uppercase tracking-widest opacity-80">
              {mode === "deep" ? "Deep Connection" : "Intimate Moments"}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-rose-900 dark:text-white leading-snug">
              {card.question}
            </h2>
            <div className="flex justify-center gap-2 pt-4">
              <div className="w-1 h-1 bg-rose-400 rounded-full opacity-60"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full opacity-80"></div>
              <div className="w-1 h-1 bg-rose-400 rounded-full opacity-60"></div>
            </div>
            <p className="text-rose-400 dark:text-rose-300 text-sm italic">Touch to reveal...</p>
          </div>
        </div>

        {/* Back of card - Answer side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100 dark:from-amber-900/40 dark:via-rose-900/40 dark:to-pink-900/40 rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center border-2 border-amber-200 dark:border-amber-700/50 backdrop-blur-sm"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-serif font-light text-rose-900 dark:text-white leading-relaxed">
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
  )
}
