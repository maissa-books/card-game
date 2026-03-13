import { useMemo } from "react";
import { getCards } from "@/data/cards";
import { Sparkles, Heart } from "lucide-react";
import { useHaptic } from "@/hooks/use-haptic";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface GameCardProps {
  question: string;
  mode: string;
}

export default function GameCard({
  question,
  mode,
}: GameCardProps) {
  const { triggerHaptic } = useHaptic();

  const getModeStyles = (mode: string) => {
    // Universal romantic baseline with subtle mode-specific accents
    switch (mode) {
      case "deep":
        return {
          glow: "bg-rose-500/10 shadow-rose-500/20",
          border: "border-rose-200/40 dark:border-rose-900/40",
          text: "text-rose-950 dark:text-rose-50",
          accent: "text-rose-500",
          label: "Heart to Heart"
        };
      case "spicy":
        return {
          glow: "bg-red-500/10 shadow-red-500/20",
          border: "border-red-200/40 dark:border-red-900/40",
          text: "text-rose-950 dark:text-rose-50",
          accent: "text-red-500",
          label: "Intimacy & Spark"
        };
      case "discovery":
        return {
          glow: "bg-amber-500/10 shadow-amber-500/20",
          border: "border-amber-200/40 dark:border-amber-900/40",
          text: "text-rose-950 dark:text-rose-50",
          accent: "text-amber-500",
          label: "Soulful Discovery"
        };
      case "Closer":
        return {
          glow: "bg-rose-400/10 shadow-rose-400/20",
          border: "border-rose-200/40 dark:border-rose-900/40",
          text: "text-rose-950 dark:text-rose-50",
          accent: "text-rose-400",
          label: "Closer Than Miles"
        };
      case "romantic":
      default:
        return {
          glow: "bg-rose-500/10 shadow-rose-500/20",
          border: "border-rose-200/40 dark:border-rose-900/40",
          text: "text-rose-950 dark:text-rose-50",
          accent: "text-rose-500",
          label: "Romantic Embrace"
        };
    }
  };

  const styles = getModeStyles(mode);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
      {/* Universal Romantic Aura */}
      <div className={`absolute inset-4 bg-rose-500/5 rounded-[4rem] -z-10 blur-[80px] opacity-40`} />
      <div className={`absolute inset-10 ${styles.glow} rounded-[3rem] -z-10 blur-[60px] opacity-30`} />

      {/* Elegant Love-Letter Card */}
      <div className={cn(
        "relative w-[92%] h-[92%] bg-white/40 dark:bg-slate-950/40 backdrop-blur-3xl rounded-[3rem] border border-rose-100/50 dark:border-rose-900/20",
        "shadow-[0_30px_70px_-20px_rgba(225,29,72,0.1)] flex flex-col overflow-hidden transition-all duration-700",
        "hover:shadow-[0_40px_80px_-20px_rgba(225,29,72,0.2)] hover:border-rose-300/30 dark:hover:border-rose-700/20"
      )}>

        {/* Decorative Floating Hearts Inside Card */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          {[...Array(4)].map((_, i) => (
            <Heart
              key={i}
              className="absolute animate-pulse fill-current"
              style={{
                top: `${20 + i * 20}%`,
                left: `${Math.random() * 80}%`,
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative flex-1 p-10 flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center text-center space-y-12">
            {/* Elegant Mode Badge */}
            <div className="flex flex-col items-center gap-5">
              <div className={cn("p-1 relative group", styles.accent)}>
                <Heart className="w-6 h-6 fill-current drop-shadow-[0_0_10px_rgba(244,63,94,0.4)]" />
                <div className="absolute inset-0 w-full h-full bg-current rounded-full blur-xl opacity-20 animate-pulse" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-500/50 dark:text-rose-400/50">
                  {styles.label}
                </span>
                <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-rose-300 dark:via-rose-700 to-transparent mt-3" />
              </div>
            </div>

            {/* Question Text - Flowing & Poetic */}
            <h2 className={cn(
              "text-2xl md:text-3xl font-serif font-black leading-snug text-slate-900 dark:text-rose-50 px-4",
              "drop-shadow-sm transition-all duration-700"
            )}>
              {question}
            </h2>

            {/* Delicate Intimacy Visualizer */}
            <div className="pt-6 flex items-center justify-center gap-6 w-full opacity-40">
              <div className="h-[0.5px] flex-1 bg-gradient-to-r from-transparent to-rose-400" />
              <div className="flex gap-2">
                <div className="w-1 h-1 rounded-full bg-rose-500" />
                <div className="w-1 h-1 rounded-full bg-rose-500/50" />
                <div className="w-1 h-1 rounded-full bg-rose-500/20" />
              </div>
              <div className="h-[0.5px] flex-1 bg-gradient-to-l from-transparent to-rose-400" />
            </div>
          </div>
        </div>

        {/* Soft atmospheric underline */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-rose-400/20 to-transparent" />
      </div>
    </div>
  );
}
