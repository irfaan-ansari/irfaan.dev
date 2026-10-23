import { WritingCard } from "@/features/writings/components/writing-card"
import { writings } from "@/features/writings/lib/writings"
import { cn } from "@/lib/utils"

export function WritingsPage() {
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Notes & ideas
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Writings
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Thoughts on building for the web, from the first interface to the
          systems behind it.
        </p>
      </section>
      <section
        aria-label="Articles"
        className={cn("site-section", "space-y-4")}
      >
        {writings.length === 0 && (
          <p className="py-8 text-muted-foreground">
            No writings published yet. Check back soon.
          </p>
        )}
        {writings.map((writing) => (
          <WritingCard key={writing.slug} writing={writing} />
        ))}
      </section>
    </>
  )
}
