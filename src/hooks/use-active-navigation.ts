import { useEffect, useState } from "react"
import { useLocation } from "@tanstack/react-router"

export function useActiveNavigation() {
  const pathname = useLocation({ select: (location) => location.pathname })
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    setActiveSection(null)
    if (pathname !== "/") return
    const section = document.getElementById("about")
    if (!section || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActiveSection(entry.isIntersecting ? "about" : null)
      },
      { rootMargin: "-120px 0px -40% 0px", threshold: 0 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [pathname])

  if (pathname === "/contact") return "contact"
  if (pathname === "/work" || pathname.startsWith("/work/")) return "work"
  if (pathname === "/writings" || pathname.startsWith("/writings/"))
    return "writing"
  if (pathname === "/") return activeSection ?? "home"
  return null
}
