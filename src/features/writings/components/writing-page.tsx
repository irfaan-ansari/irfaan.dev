import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Link } from "@tanstack/react-router"
import { RiArrowLeftLine } from "@remixicon/react"
import { Markdown } from "@/features/writings/components/markdown"
import {
  type Writing,
  formatWritingDate,
} from "@/features/writings/lib/writings"
import { cn } from "@/lib/utils"

export function WritingPage({ writing }: { writing: Writing }) {
  return (
    <>
      <article>
        <header className={cn("site-section", "pt-0")}>
          <Link
            to="/writings"
            className="mb-7 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <RiArrowLeftLine aria-hidden="true" className="size-4" /> All
            writings
          </Link>
          <div className="mb-4 flex gap-3 text-xs text-muted-foreground">
            <time dateTime={writing.date}>
              {formatWritingDate(writing.date)}
            </time>
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
            <RiArrowLeftLine aria-hidden="true" className="size-4" /> Back to
            all writings
          </Link>
        </section>
      </article>
    </>
  )
}
