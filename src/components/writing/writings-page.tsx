import { WritingCard } from "@/components/writing/writing-card"
import type { PostSummary } from "@/lib/posts"
import { cn } from "@/lib/utils"

export function WritingsPage({ posts }: { posts: PostSummary[] }) {
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Posts
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Writing
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Thoughts on running a business online, making everyday work easier,
          and deciding what your next website or tool should do for you.
        </p>
      </section>
      <section aria-label="Posts" className="site-section">
        {posts.length === 0 && (
          <p className="py-8 text-muted-foreground">No posts published yet.</p>
        )}
        {posts.map((writing) => (
          <WritingCard key={writing.slug} writing={writing} />
        ))}
      </section>
    </>
  )
}
