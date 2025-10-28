"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => setLanguage("en")}
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        className="text-xs"
      >
        EN
      </Button>
      <Button
        onClick={() => setLanguage("hi")}
        variant={language === "hi" ? "default" : "outline"}
        size="sm"
        className="text-xs"
      >
        हिन्दी
      </Button>
      <Button
        onClick={() => setLanguage("te")}
        variant={language === "te" ? "default" : "outline"}
        size="sm"
        className="text-xs"
      >
        తెలుగు
      </Button>
    </div>
  )
}
