import { buttonVariants } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

export function NotFound() {
  return (
    <>
      <section
        aria-labelledby="not-found-title"
        className={cn(
          "site-section",
          "flex min-h-[50vh] flex-col items-center justify-center pb-16 text-center"
        )}
      >
        <p
          className={cn(
            "mb-6 font-heading text-8xl leading-none font-bold tracking-tighter sm:text-9xl",
            "text-primary-text"
          )}
        >
          404
        </p>
        <h1
          id="not-found-title"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Page not found
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
          This page may have moved, or the link might be incorrect. Let’s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className={buttonVariants()}>
            Back to home
          </Link>
          <Link to="/work" className={buttonVariants({ variant: "outline" })}>
            Explore work
          </Link>
        </div>
      </section>
    </>
  )
}
