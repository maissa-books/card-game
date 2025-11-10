import { translations } from "@/data/translations"

export function useTranslation(language: string) {
  const t = (key: string): string => {
    const lang = language as keyof typeof translations
    return (translations[lang] as Record<string, string>)?.[key] || key
  }

  return { t }
}
