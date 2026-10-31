import { Icon } from "@/components/shared/icon"
import { useMobile } from "@/hooks/use-mobile"
import { useEffect, useState, type RefObject } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { NAVIGATION_ITEMS } from "@/content/navigation"
import { useActiveNavigation } from "@/hooks/use-active-navigation"
import { NavigationLink } from "./navigation-link"

export function MobileNavigation({
  anchorRef,
}: {
  anchorRef: RefObject<HTMLElement | null>
}) {
  const [open, setOpen] = useState(false)
  const activeNavigation = useActiveNavigation()
  const isMobile = useMobile()

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger
        render={<Button variant="ghost" size="icon" />}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="size-11 rounded-lg border-0 lg:hidden"
      >
        {open ? (
          <Icon name="close" aria-hidden="true" className="size-6" />
        ) : (
          <Icon name="menu" aria-hidden="true" className="size-6" />
        )}
      </PopoverTrigger>
      <PopoverContent
        anchor={anchorRef}

        align="center"
        sideOffset={6}
        className="w-(--anchor-width) gap-2 rounded-xl border border-border/60 p-2 text-foreground shadow-sm ring-0 backdrop-blur-xl lg:hidden"
      >
        <PopoverTitle className="sr-only">Navigation</PopoverTitle>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {NAVIGATION_ITEMS.map((item) => (
            <NavigationLink
              key={item.id}
              to={item.to}
              hash={"hash" in item ? item.hash : undefined}
              active={activeNavigation === item.id}
              onNavigate={() => setOpen(false)}
              className="justify-start px-3 py-2 text-sm"
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  )
}
