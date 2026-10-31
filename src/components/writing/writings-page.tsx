import { WritingCard } from "@/components/writing/writing-card"
import { POSTS } from "@/lib/md"
import { cn } from "@/lib/utils"

export function WritingsPage() {
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Articles
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Writing
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Thoughts on running a business online, making everyday work easier,
          and deciding what your next website or tool should do for you.
        </p>
      </section>
      <section aria-label="Articles" className="site-section">
        {POSTS.length === 0 && (
          <p className="py-8 text-muted-foreground">
            No articles published yet.
          </p>
        )}
        {POSTS.map((writing) => (
          <WritingCard key={writing.slug} writing={writing} />
        ))}
      </section>
    </>
  )
}
