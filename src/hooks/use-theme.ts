import { createContext, useContext } from "react"
import {
  APPEARANCE_STORAGE_KEY,
  PRIMARY_COLORS,
  type PrimaryColor,
  type Theme,
} from "@/lib/theme"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  primaryColor: PrimaryColor
  setPrimaryColor: (color: PrimaryColor) => void
}

export const ThemeProviderContext = createContext<
  ThemeProviderState | undefined
>(undefined)

export function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export function readThemePreferences(
  storageKey: string,
  defaultTheme: Theme,
  colors: readonly string[],
  legacyKey: string
) {
  let theme = defaultTheme
  let primaryColor = "neutral"

  try {
    let legacy: { theme?: unknown; primaryColor?: unknown } | null = null
    try {
      legacy = JSON.parse(localStorage.getItem(legacyKey) || "null")
    } catch {
      // Ignore malformed preferences from the previous storage format.
    }
    const storedTheme = localStorage.getItem(storageKey) ?? legacy?.theme
    const storedColor =
      localStorage.getItem(`${storageKey}-accent`) ?? legacy?.primaryColor

    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      theme = storedTheme
    }
    if (typeof storedColor === "string" && colors.includes(storedColor)) {
      primaryColor = storedColor
    }
  } catch {
    // Preferences still work when browser storage is unavailable.
  }

  return { theme, primaryColor: primaryColor as PrimaryColor }
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  const resolved =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme

  root.classList.remove("light", "dark", "scheme-dark")
  root.classList.add(resolved)
  root.style.colorScheme = resolved
}

export function getThemeScript(storageKey: string, defaultTheme: Theme) {
  const config = JSON.stringify([
    storageKey,
    defaultTheme,
    PRIMARY_COLORS.map((color) => color.value),
    APPEARANCE_STORAGE_KEY,
  ]).replace(/</g, "\\u003c")

  return `(function(){var read=${readThemePreferences.toString()};var apply=${applyTheme.toString()};var p=read.apply(null,${config});apply(p.theme);document.documentElement.dataset.accent=p.primaryColor})();`
}
