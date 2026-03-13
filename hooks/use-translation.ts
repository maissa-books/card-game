import { translations } from "@/data/translations"

export function useTranslation() {
  const t = (key: string): string => {
    return (translations.en as Record<string, string>)?.[key] || key
  }

  return { t }
}
