import { WritingCard } from "@/components/writing/writing-card"
import { POSTS } from "@/lib/md"
import { cn } from "@/lib/utils"

export function WritingsPage() {
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Notes & ideas
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Writing
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
        {POSTS.length === 0 && (
          <p className="py-8 text-muted-foreground">
            No articles published yet. Check back soon.
          </p>
        )}
        {POSTS.map((writing) => (
          <WritingCard key={writing.slug} writing={writing} />
        ))}
      </section>
    </>
  )
}
