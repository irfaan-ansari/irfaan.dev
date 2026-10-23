import { buttonVariants } from "@/components/ui/button"
import { useRef } from "react"
import { useScrolled } from "@/hooks/use-scrolled"
import { DesktopNavigation } from "@/features/navigation/components/desktop-navigation"
import { MobileNavigation } from "@/features/navigation/components/mobile-navigation"
import { Link } from "@tanstack/react-router"
import { profile } from "@/content/profile"
import { cn } from "@/lib/utils"
import { AppearanceControls } from "@/components/appearance-controls"
import { Logo } from "@/components/shared/logo"
import { Icon } from "@/components/shared/icon"

export function SiteHeader() {
  const scrolled = useScrolled()
  const headerRef = useRef<HTMLElement>(null)
  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-3 z-40 mx-3 mb-16 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/60 bg-background/90 px-2 py-3 shadow-sm backdrop-blur-xl transition-[margin,box-shadow] duration-300 ease-out motion-reduce:transition-none sm:mx-5 sm:mb-20 sm:gap-3 sm:px-6",
        scrolled ? "lg:mx-16 lg:shadow-md" : "lg:mx-5"
      )}
    >
      <Link
        to="/"
        className="flex shrink-0 items-center gap-1.5 text-sm font-semibold tracking-tight sm:gap-2 sm:text-base"
      >
        <Logo className="size-6 sm:size-8" />
        {profile.brand}
      </Link>
      <DesktopNavigation />
      <div className="flex items-center gap-1 sm:gap-3">
        <AppearanceControls />
        <MobileNavigation anchorRef={headerRef} />
        <Link
          to="/contact"
          className={cn(
            buttonVariants({ size: "sm" }),
            "gap-1 px-1.5 py-2 text-sm sm:gap-2 sm:px-3"
          )}
        >
          Let’s talk <Icon name="arrow" className="size-3.5" />
        </Link>
      </div>
    </header>
  )
}
