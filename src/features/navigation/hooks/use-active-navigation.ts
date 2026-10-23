import { useEffect, useState } from "react"
import { useLocation } from "@tanstack/react-router"

export function useActiveNavigation() {
  const pathname = useLocation({ select: (location) => location.pathname })
  const [servicesVisible, setServicesVisible] = useState(false)

  useEffect(() => {
    setServicesVisible(false)
    if (pathname !== "/") return
    const section = document.getElementById("capabilities")
    if (!section || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setServicesVisible(entry.isIntersecting)
      },
      { rootMargin: "-120px 0px -40% 0px", threshold: 0 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [pathname])

  if (pathname === "/contact") return "contact"
  if (pathname === "/projects" || pathname.startsWith("/projects/"))
    return "projects"
  if (pathname === "/writings" || pathname.startsWith("/writings/"))
    return "writing"
  if (pathname === "/") return servicesVisible ? "services" : "home"
  return null
}
