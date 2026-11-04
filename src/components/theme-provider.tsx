import { useEffect, useState, type ReactNode } from "react"
import { ScriptOnce } from "@tanstack/react-router"
import {
  APPEARANCE_STORAGE_KEY,
  PRIMARY_COLORS,
  THEME_STORAGE_KEY,
  type PrimaryColor,
  type Theme,
} from "@/lib/theme"
import {
  ThemeProviderContext,
  applyTheme,
  getThemeScript,
  readThemePreferences,
} from "@/hooks/use-theme"

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const primaryColorValues = PRIMARY_COLORS.map((color) => color.value)

function savePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Apply the preference even if it cannot be saved.
  }
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [primaryColor, setPrimaryColorState] = useState<PrimaryColor>("neutral")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = readThemePreferences(
      storageKey,
      defaultTheme,
      primaryColorValues,
      APPEARANCE_STORAGE_KEY
    )

    setThemeState(saved.theme)
    setPrimaryColorState(saved.primaryColor)
    setMounted(true)
  }, [defaultTheme, storageKey])

  useEffect(() => {
    if (!mounted) return

    document.documentElement.dataset.accent = primaryColor
  }, [primaryColor, mounted])

  useEffect(() => {
    if (!mounted) return

    applyTheme(theme)

    if (theme !== "system") return

    const media = window.matchMedia("(prefers-color-scheme: dark)")

    const onChange = () => applyTheme("system")
    media.addEventListener("change", onChange)

    return () => media.removeEventListener("change", onChange)
  }, [theme, mounted])

  const setTheme = (next: Theme) => {
    savePreference(storageKey, next)
    setThemeState(next)
  }

  const setPrimaryColor = (next: PrimaryColor) => {
    savePreference(`${storageKey}-accent`, next)
    setPrimaryColorState(next)
  }

  return (
    <ThemeProviderContext
      value={{ theme, setTheme, primaryColor, setPrimaryColor }}
    >
      <ScriptOnce>{getThemeScript(storageKey, defaultTheme)}</ScriptOnce>
      {children}
    </ThemeProviderContext>
  )
}
