import { Link } from "@tanstack/react-router"
import { Icon } from "@/components/shared/icon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const destinations = [
  {
    to: "/work",
    number: "01",
    title: "Selected work",
    detail: "Things I’ve built",
  },
  {
    to: "/writings",
    number: "02",
    title: "Writing",
    detail: "Notes from the process",
  },
] as const

export function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="site-section p-0!">
      <div className="section-border flex items-center justify-between px-5 py-4 font-mono text-[10px] tracking-widest text-muted-foreground uppercase sm:px-10 sm:text-xs">
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary"
          />
          A small detour
        </span>
        <span>Error / 404</span>
      </div>

      <div className="relative isolate overflow-hidden px-5 pt-12 pb-14 sm:px-10 sm:pt-16 sm:pb-16">
        <div
          aria-hidden="true"
          className="relative mx-auto mb-10 flex w-fit items-center justify-center font-heading text-[clamp(6rem,18vw,9rem)] leading-none font-semibold tracking-[-0.085em] select-none sm:mb-12"
        >
          <span className="text-foreground">4</span>
          <span className="relative mx-1 text-primary-text sm:mx-2">
            0
            <span className="absolute top-1/2 left-1/2 size-[0.7em] -translate-x-1/2 -translate-y-[40%] rounded-full border border-dashed border-background/70" />
            <span className="absolute top-1/2 left-1/2 h-px w-[1.05em] -translate-x-1/2 -rotate-45 bg-background" />
          </span>
          <span className="text-foreground">4</span>
          <span className="absolute -right-2 -bottom-2 rotate-[-7deg] rounded-md border border-border-strong bg-background px-3 py-2 font-mono text-[10px] leading-none font-normal tracking-normal text-muted-foreground shadow-sm sm:-right-8 sm:bottom-0 sm:text-xs">
            Nothing at this address
          </span>
        </div>

        <div className="mx-auto max-w-md text-center">
          <h1
            id="not-found-title"
            className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl"
          >
            A little off the map.
          </h1>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-pretty text-muted-foreground sm:max-w-sm">
            The page you’re looking for has moved or doesn’t exist. There’s
            plenty to explore from here.
          </p>
          <Link to="/" className={cn(buttonVariants(), "mt-7 min-h-11")}>
            <Icon name="left" className="size-4" />
            Back to home
          </Link>
        </div>
      </div>

      <nav
        aria-label="Explore the site"
        className="grid gap-4 px-5 pb-8 sm:grid-cols-2 sm:px-10"
      >
        {destinations.map((destination) => (
          <Link
            key={destination.to}
            to={destination.to}
            className="group flex min-h-28 items-center gap-4 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="self-start pt-1 font-mono text-[10px] text-muted-foreground">
              {destination.number}
            </span>
            <span className="flex-1">
              <span className="block font-heading text-sm font-semibold">
                {destination.title}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                {destination.detail}
              </span>
            </span>
            <Icon
              name="arrow"
              className="size-5 text-muted-foreground transition-[translate,color] group-hover:text-primary-text motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </Link>
        ))}
      </nav>
    </section>
  )
}
