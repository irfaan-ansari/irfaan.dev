import { navigationItems } from "@/features/navigation/content/navigation"
import { useActiveNavigation } from "@/features/navigation/hooks/use-active-navigation"
import { NavigationLink } from "./navigation-link"

export function DesktopNavigation() {
  const activeNavigation = useActiveNavigation()
  return (
    <nav
      aria-label="Main navigation"
      className="ml-auto hidden items-center gap-1 text-sm font-medium lg:flex"
    >
      {navigationItems.map((item) => (
        <NavigationLink
          key={item.id}
          to={item.to}
          hash={"hash" in item ? item.hash : undefined}
          active={activeNavigation === item.id}
        >
          {item.label}
        </NavigationLink>
      ))}
    </nav>
  )
}
