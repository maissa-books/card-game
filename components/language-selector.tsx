"use client";

import { Globe } from "lucide-react";
import { useState } from "react";

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export default function LanguageSelector({
  currentLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border-2 border-rose-200 dark:border-rose-700 rounded-full hover:border-rose-400 dark:hover:border-rose-500 transition-all"
      >
        <Globe className="w-5 h-5 text-rose-600 dark:text-rose-400" />
        <span className="text-sm font-medium text-rose-900 dark:text-white">
          {languages.find((l) => l.code === currentLanguage)?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-slate-800 border-2 border-rose-200 dark:border-rose-700 rounded-xl shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                currentLanguage === lang.code
                  ? "bg-rose-100 dark:bg-rose-900/30 text-rose-900 dark:text-rose-100"
                  : "text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-slate-700"
              }`}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
