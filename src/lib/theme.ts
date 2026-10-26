export const THEME_STORAGE_KEY = "theme"

export const APPEARANCE_STORAGE_KEY = "SITE_APPEARANCE"

export const PRIMARY_COLORS = [
  { value: "neutral", label: "Neutral" },
  { value: "blue", label: "Blue" },
  { value: "violet", label: "Violet" },
  { value: "emerald", label: "Emerald" },
  { value: "orange", label: "Orange" },
  { value: "rose", label: "Rose" },
  { value: "cyan", label: "Cyan" },
  { value: "amber", label: "Amber" },
  { value: "indigo", label: "Indigo" },
  { value: "pink", label: "Pink" },
] as const

export type Theme = "light" | "dark" | "system"

export type PrimaryColor = (typeof PRIMARY_COLORS)[number]["value"]

export const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: "sun" },
  { value: "dark", label: "Dark", icon: "moon" },
] as const
