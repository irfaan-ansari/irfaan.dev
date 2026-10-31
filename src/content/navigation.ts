export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  { id: "work", label: "Work", to: "/work" },
  { id: "about", label: "About", to: "/", hash: "about" },
  { id: "writing", label: "Writing", to: "/writings" },
] as const

export const FOOTER_DESCRIPTION =
  "I build web applications to help with everyday business tasks."

export const FOOTER_EXPLORE_LINKS = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/", hash: "about" },
  { label: "Writing", to: "/writings" },
  { label: "FAQs", to: "/", hash: "faqs" },
] as const

export const FOOTER_SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/irfaan-ansari" },
] as const
