"use client";

import { Home, LayoutGrid, Users, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHaptic } from "@/hooks/use-haptic";

interface BottomNavProps {
    currentTab: string;
    onTabChange: (tab: string) => void;
    className?: string;
}

export default function BottomNav({ currentTab, onTabChange, className }: BottomNavProps) {
    const { triggerHaptic } = useHaptic();

    const tabs = [
        { id: "home", icon: Home, label: "Home" },
        { id: "modes", icon: LayoutGrid, label: "Modes" },
        { id: "multiplayer", icon: Users, label: "Together" },
    ];

    const handleTabClick = (id: string) => {
        triggerHaptic("light");
        onTabChange(id);
    };

    return (
        <nav className={cn(
            "fixed bottom-6 left-6 right-6 z-50 bg-white/30 dark:bg-slate-950/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2.5rem] shadow-[0_16px_40px_-12px_rgba(244,63,94,0.2)] safe-area-pb",
            className
        )}>
            <div className="max-w-md mx-auto flex items-center justify-around h-20 px-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = currentTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1.5 w-full h-full transition-all duration-500 relative group/tab",
                                isActive ? "text-rose-600 dark:text-rose-400" : "text-slate-500 dark:text-slate-400 hover:text-rose-400"
                            )}
                        >
                            <div className={cn(
                                "p-2.5 rounded-2xl transition-all duration-500 relative",
                                isActive ? "bg-rose-500/10 dark:bg-rose-500/20 scale-110 shadow-[inner_0_0_12px_rgba(244,63,94,0.1)]" : "group-hover/tab:bg-rose-50/50 dark:group-hover/tab:bg-rose-950/20"
                            )}>
                                <Icon className={cn(
                                    "w-6 h-6 transition-transform duration-500",
                                    isActive && "fill-rose-500/10"
                                )} />
                                {isActive && (
                                    <div className="absolute -inset-1 bg-rose-500/10 rounded-2xl blur-lg animate-pulse" />
                                )}
                            </div>
                            <span className={cn(
                                "text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500",
                                isActive ? "opacity-100 scale-100" : "opacity-60 scale-90"
                            )}>
                                {tab.label}
                            </span>

                            {isActive && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,1)] blur-[0.5px]" />
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
