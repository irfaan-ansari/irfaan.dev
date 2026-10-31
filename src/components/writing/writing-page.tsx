import { Badge } from "@/components/ui/badge"
import { Markdown } from "@/components/shared/markdown"
import { type MarkdownPost, type PostSummary, formatDate } from "@/lib/posts"
import { Link } from "@tanstack/react-router"
import { Icon } from "@/components/shared/icon"
import { cn } from "@/lib/utils"

export function WritingPage({
  writing,
  previous,
  next,
}: {
  writing: MarkdownPost
  previous?: PostSummary
  next?: PostSummary
}) {
  const adjacentPosts = [
    { label: "Previous", post: previous, previous: true },
    { label: "Next", post: next, previous: false },
  ]

  return (
    <>
      <article>
        <header className={cn("site-section", "pt-0")}>
          <div className="mb-4 flex gap-3 text-xs text-muted-foreground">
            <time dateTime={writing.date}>{formatDate(writing.date)}</time>
            <span>·</span>
            <span>{writing.readingMinutes} min read</span>
          </div>
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-pretty sm:text-5xl">
            {writing.title}
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {writing.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {writing.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="h-auto rounded-md border-border-strong bg-muted px-2 py-1 text-xs font-medium text-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </header>
        <section aria-label="Post content" className="site-section">
          <Markdown content={writing.body} />
        </section>
        {(previous || next) && (
          <nav
            aria-label="Post navigation"
            className="site-section grid gap-4 sm:grid-cols-2"
          >
            {adjacentPosts.map(({ label, post, previous: isPrevious }) =>
              post ? (
                <Link
                  key={label}
                  to="/writings/$slug"
                  params={{ slug: post.slug }}
                  rel={isPrevious ? "prev" : "next"}
                  className={cn(
                    "group flex min-h-28 min-w-0 items-center gap-4 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                    !isPrevious && "sm:col-start-2"
                  )}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-2 block font-heading text-sm leading-relaxed font-semibold">
                      {post.title}
                    </span>
                  </span>
                  <Icon
                    name={isPrevious ? "left" : "right"}
                    className={cn(
                      "size-5 shrink-0 text-muted-foreground transition-[translate,color] group-hover:text-primary-text motion-reduce:transition-none",
                      isPrevious
                        ? "order-first motion-safe:group-hover:-translate-x-0.5"
                        : "motion-safe:group-hover:translate-x-0.5"
                    )}
                  />
                </Link>
              ) : null
            )}
          </nav>
        )}
      </article>
    </>
  )
}
