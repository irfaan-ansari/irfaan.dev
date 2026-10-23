import { Link } from "@tanstack/react-router"
import { RiArrowRightUpLine, RiTimeLine } from "@remixicon/react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  formatWritingDate,
  type Writing,
} from "@/features/writings/lib/writings"

export function WritingCard({ writing }: { writing: Writing }) {
  const titleId = `writing-${writing.slug}`

  return (
    <article>
      <Card
        className={cn(
          "gap-0 rounded-xl border border-border p-0 shadow-none ring-0",
          writing.featured && "border-primary/30 bg-primary/5"
        )}
      >
        <Link
          to="/writings/$slug"
          params={{ slug: writing.slug }}
          aria-labelledby={titleId}
          className="group/writing block rounded-xl p-5 transition-colors duration-100 ease-out hover:bg-muted/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none sm:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              {writing.featured && (
                <Badge
                  variant="outline"
                  className="rounded-md border-primary/20 bg-primary/10 text-xs text-primary-text"
                >
                  Featured
                </Badge>
              )}
              <time dateTime={writing.date}>
                {formatWritingDate(writing.date)}
              </time>
              <span className="inline-flex items-center gap-1.5">
                <RiTimeLine aria-hidden="true" className="size-3.5" />
                {writing.readingMinutes} min read
              </span>
            </div>
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary-text transition-colors duration-100 group-hover/writing:border-primary/20 group-hover/writing:bg-primary/10 group-focus-visible/writing:bg-primary/10 motion-reduce:transition-none">
              <RiArrowRightUpLine aria-hidden="true" className="size-3.5" />
            </span>
          </div>
          <h2
            id={titleId}
            className="mt-4 max-w-xl text-xl leading-snug font-semibold tracking-tight text-foreground"
          >
            {writing.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            {writing.description}
          </p>
            {writing.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {writing.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="h-auto rounded-md px-2 py-1 text-xs font-normal text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
        </Link>
      </Card>
    </article>
  )
}
