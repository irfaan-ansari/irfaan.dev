import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

import { AccentUnderline } from "@/components/shared/accent-underline"

interface NavigationLinkProps {
  to: "/" | "/work" | "/writings" | "/contact"
  hash?: string
  active: boolean
  className?: string
  onNavigate?: () => void
  children: React.ReactNode
}

export function navigationLinkClass(active: boolean) {
  return cn(
    "inline-flex items-center justify-center rounded-md px-2 py-1 font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current motion-reduce:transition-none sm:px-2.5",
    active ? "text-primary-text" : "text-muted-foreground hover:text-foreground"
  )
}

export function NavigationLink({
  to,
  hash,
  active,
  children,
  className,
  onNavigate,
}: NavigationLinkProps) {
  return (
    <Link
      to={to}
      hash={hash}
      activeOptions={{ exact: to === "/", includeHash: to === "/" }}
      className={cn(navigationLinkClass(active), className)}
      onClick={onNavigate}
    >
      <span className="relative pb-2">
        {children}
        <AccentUnderline animated visible={active} className="h-2" />
      </span>
    </Link>
  )
}
