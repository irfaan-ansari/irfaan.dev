import { Icon } from "@/components/shared/icon"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Link } from "@tanstack/react-router"
import { Markdown } from "@/components/shared/markdown"
import { type MarkdownPost, formatDate } from "@/lib/md"
import { cn } from "@/lib/utils"

export function WritingPage({ writing }: { writing: MarkdownPost }) {
  return (
    <>
      <article>
        <header className={cn("site-section", "pt-0")}>
          <Link
            to="/writings"
            className="mb-7 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <Icon name="left" aria-hidden="true" className="size-4" /> All
            writing
          </Link>
          <div className="mb-4 flex gap-3 text-xs text-muted-foreground">
            <time dateTime={writing.date}>{formatDate(writing.date)}</time>
            <span>·</span>
            <span>{writing.readingMinutes} min read</span>
          </div>
          <h1 className="max-w-xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            {writing.title}
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {writing.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {writing.tags.map((tag) => (
              <TechnologyBadge key={tag} className="py-1 text-xs">
                {tag}
              </TechnologyBadge>
            ))}
          </div>
        </header>
        <section aria-label="Article content" className="site-section">
          <Markdown content={writing.body} />
          <Link
            to="/writings"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium"
          >
            <Icon name="left" aria-hidden="true" className="size-4" /> Back to
            all writing
          </Link>
        </section>
      </article>
    </>
  )
}
