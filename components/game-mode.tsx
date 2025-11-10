"use client"

import { Heart, Flame, Zap, Sparkles, BookOpen } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface GameModeProps {
  onModeSelect: (mode: string) => void
  language: string
}

export default function GameMode({ onModeSelect, language }: GameModeProps) {
  const { t } = useTranslation(language)

  return (
    <div className="w-full max-w-6xl animate-in fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-900 dark:text-rose-100 mb-3">
          {t("chooseMode")}
        </h2>
        <p className="text-rose-700 dark:text-rose-300">{t("chooseModeDesc")}</p>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {/* Discovery Mode */}
        <button
          onClick={() => onModeSelect("discovery")}
          className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-amber-200 dark:border-amber-700 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <BookOpen className="w-10 h-10 text-amber-500 mb-3 group-hover:fill-amber-500 transition-all" />
          <h3 className="text-lg font-serif font-bold text-amber-900 dark:text-white mb-2">{t("discoveryMode")}</h3>
          <p className="text-amber-700 dark:text-amber-300 text-xs font-light">{t("discoveryDesc")}</p>
          <p className="text-amber-500 dark:text-amber-400 text-xs mt-3 font-serif">50 {t("cards")}</p>
        </button>

        {/* Romantic Mode */}
        <button
          onClick={() => onModeSelect("romantic")}
          className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-rose-200 dark:border-rose-700 hover:border-rose-400 dark:hover:border-rose-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <Heart className="w-10 h-10 text-rose-500 mb-3 group-hover:fill-rose-500 transition-all" />
          <h3 className="text-lg font-serif font-bold text-rose-900 dark:text-white mb-2">{t("romanticMode")}</h3>
          <p className="text-rose-700 dark:text-rose-300 text-xs font-light">{t("romanticDesc")}</p>
          <p className="text-rose-500 dark:text-rose-400 text-xs mt-3 font-serif">40 {t("cards")}</p>
        </button>

        {/* Deep Connection Mode */}
        <button
          onClick={() => onModeSelect("deep")}
          className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-pink-200 dark:border-pink-700 hover:border-pink-400 dark:hover:border-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <Flame className="w-10 h-10 text-pink-500 mb-3 group-hover:fill-pink-500 transition-all" />
          <h3 className="text-lg font-serif font-bold text-pink-900 dark:text-white mb-2">{t("deepMode")}</h3>
          <p className="text-pink-700 dark:text-pink-300 text-xs font-light">{t("deepDesc")}</p>
          <p className="text-pink-500 dark:text-pink-400 text-xs mt-3 font-serif">50 {t("cards")}</p>
        </button>

        {/* Spicy Actions Mode */}
        <button
          onClick={() => onModeSelect("spicy")}
          className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-red-200 dark:border-red-700 hover:border-red-400 dark:hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <Zap className="w-10 h-10 text-red-500 mb-3 group-hover:fill-red-500 transition-all" />
          <h3 className="text-lg font-serif font-bold text-red-900 dark:text-white mb-2">{t("spicyMode")}</h3>
          <p className="text-red-700 dark:text-red-300 text-xs font-light">{t("spicyDesc")}</p>
          <p className="text-red-500 dark:text-red-400 text-xs mt-3 font-serif">30 {t("cards")}</p>
        </button>

        {/* Stories Mode */}
        <button
          onClick={() => onModeSelect("stories")}
          className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <Sparkles className="w-10 h-10 text-purple-500 mb-3 group-hover:fill-purple-500 transition-all" />
          <h3 className="text-lg font-serif font-bold text-purple-900 dark:text-white mb-2">{t("storiesMode")}</h3>
          <p className="text-purple-700 dark:text-purple-300 text-xs font-light">{t("storiesDesc")}</p>
          <p className="text-purple-500 dark:text-purple-400 text-xs mt-3 font-serif">20 {t("cards")}</p>
        </button>
      </div>
    </div>
  )
}
