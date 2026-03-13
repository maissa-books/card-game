"use client";

import {
  Heart,
  Flame,
  Zap,
  Sparkles,
  BookOpen,
  Plane,
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { getCards } from "@/data/cards";
import { useHaptic } from "@/hooks/use-haptic";

interface GameModeProps {
  onModeSelect: (mode: string) => void;
}

export default function GameMode({ onModeSelect }: GameModeProps) {
  const { t } = useTranslation();
  const { triggerHaptic } = useHaptic();

  const modes = [
    { id: "Closer", icon: Flame, color: "orange", title: t("ldrMode"), desc: t("ldrDesc"), count: getCards("en", "Closer").length },
    { id: "discovery", icon: BookOpen, color: "amber", title: t("discoveryMode"), desc: t("discoveryDesc"), count: getCards("en", "discovery").length },
    { id: "romantic", icon: Heart, color: "rose", title: t("romanticMode"), desc: t("romanticDesc"), count: getCards("en", "romantic").length },
    { id: "deep", icon: Flame, color: "pink", title: t("deepMode"), desc: t("deepDesc"), count: getCards("en", "deep").length },
    { id: "spicy", icon: Zap, color: "red", title: t("spicyMode"), desc: t("spicyDesc"), count: getCards("en", "spicy").length },
  ];

  const getModeStyles = (id: string) => {
    switch (id) {
      case "Closer":
        return {
          bg: "bg-orange-500/10 hover:bg-orange-500/20",
          iconBg: "bg-orange-500/20",
          iconColor: "text-orange-500",
          glow: "group-hover:shadow-orange-500/20",
          border: "border-orange-500/20 hover:border-orange-500/50",
          gradient: "from-orange-500/5 to-transparent"
        };
      case "discovery":
        return {
          bg: "bg-amber-500/10 hover:bg-amber-500/20",
          iconBg: "bg-amber-500/20",
          iconColor: "text-amber-500",
          glow: "group-hover:shadow-amber-500/20",
          border: "border-amber-500/20 hover:border-amber-500/50",
          gradient: "from-amber-500/5 to-transparent"
        };
      case "romantic":
        return {
          bg: "bg-rose-500/10 hover:bg-rose-500/20",
          iconBg: "bg-rose-500/20",
          iconColor: "text-rose-500",
          glow: "group-hover:shadow-rose-500/20",
          border: "border-rose-500/20 hover:border-rose-500/50",
          gradient: "from-rose-500/5 to-transparent"
        };
      case "deep":
        return {
          bg: "bg-pink-500/10 hover:bg-pink-500/20",
          iconBg: "bg-pink-500/20",
          iconColor: "text-pink-500",
          glow: "group-hover:shadow-pink-500/20",
          border: "border-pink-500/20 hover:border-pink-500/50",
          gradient: "from-pink-500/5 to-transparent"
        };
      case "spicy":
        return {
          bg: "bg-red-500/10 hover:bg-red-500/20",
          iconBg: "bg-red-500/20",
          iconColor: "text-red-500",
          glow: "group-hover:shadow-red-500/20",
          border: "border-red-500/20 hover:border-red-500/50",
          gradient: "from-red-500/5 to-transparent"
        };
      default:
        return {
          bg: "bg-slate-500/10 hover:bg-slate-500/20",
          iconBg: "bg-slate-500/20",
          iconColor: "text-slate-500",
          glow: "group-hover:shadow-slate-500/20",
          border: "border-slate-500/20 hover:border-slate-500/50",
          gradient: "from-slate-500/5 to-transparent"
        };
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="grid grid-cols-2 gap-3 pb-32">
        {modes.map((mode, index) => {
          const Icon = mode.icon;
          const styles = getModeStyles(mode.id);
          return (
            <button
              key={mode.id}
              onClick={() => {
                triggerHaptic("medium");
                onModeSelect(mode.id);
              }}
              className={`group relative p-4 h-full flex flex-col items-center text-center transition-all duration-500 
                bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl rounded-[2rem] border-2 ${styles.border}
                hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] ${styles.glow}
                active:scale-[0.96] overflow-hidden shadow-lg animate-in slide-in-from-bottom-4 duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient Layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

              {/* Decorative Glow */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full ${styles.bg} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 w-full flex flex-col items-center">
                <div className={`p-3 rounded-xl ${styles.iconBg} mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner relative overflow-hidden`}>
                  <Icon className={`w-6 h-6 ${styles.iconColor} group-hover:drop-shadow-[0_0_8px_currentColor] transition-all`} />
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>

                <h3 className="text-sm font-serif font-black text-slate-900 dark:text-white mb-1 tracking-tight leading-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {mode.title}
                </h3>

                <div className="mt-2 flex items-center justify-center w-full pt-2 border-t border-slate-200/10 dark:border-slate-800/10">
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {mode.count} Cards
                  </span>
                </div>
              </div>

              {/* Advanced Shine Effect */}
              <div className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-30 group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
