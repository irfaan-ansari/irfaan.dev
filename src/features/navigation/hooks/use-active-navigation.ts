import { useEffect, useState } from "react"
import { useLocation } from "@tanstack/react-router"

export function useActiveNavigation() {
  const pathname = useLocation({ select: (location) => location.pathname })
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    setActiveSection(null)
    if (pathname !== "/") return
    if (!("IntersectionObserver" in window)) return
    const visibleSections = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleSections.add(entry.target.id)
          else visibleSections.delete(entry.target.id)
        }
        setActiveSection(
          visibleSections.has("about") ? "about" : null
        )
      },
      { rootMargin: "-120px 0px -40% 0px", threshold: 0 }
    )
    for (const id of ["about"]) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [pathname])

  if (pathname === "/contact") return "contact"
  if (pathname === "/work" || pathname.startsWith("/work/"))
    return "projects"
  if (pathname === "/writings" || pathname.startsWith("/writings/"))
    return "writing"
  if (pathname === "/") return activeSection ?? "home"
  return null
}
