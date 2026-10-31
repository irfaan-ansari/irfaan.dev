import { Icon } from "@/components/shared/icon"
import { Link } from "@tanstack/react-router"
import { Badge } from "@/components/ui/badge"
import { formatDate, type MarkdownPost } from "@/lib/md"

export function WritingCard({ writing }: { writing: MarkdownPost }) {
  const titleId = `writing-${writing.slug}`

  return (
    <article className="border-b border-border last:border-b-0">
      <Link
        to="/writings/$slug"
        params={{ slug: writing.slug }}
        aria-labelledby={titleId}
        className="group/writing block py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:py-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
            {writing.featured && (
              <Badge
                variant="outline"
                className="rounded-md border-primary/30 bg-primary/15 text-xs font-semibold text-primary-text"
              >
                Featured
              </Badge>
            )}
            <time dateTime={writing.date}>{formatDate(writing.date)}</time>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="time" aria-hidden="true" className="size-3.5" />
              {writing.readingMinutes} min read
            </span>
          </div>
          <Icon
            name="arrow"
            aria-hidden="true"
            className="size-4 shrink-0 text-muted-foreground transition-[color,transform] duration-100 ease-out group-hover/writing:text-primary-text group-focus-visible/writing:text-primary-text motion-safe:group-hover/writing:translate-x-0.5 motion-safe:group-hover/writing:-translate-y-0.5 motion-safe:group-focus-visible/writing:translate-x-0.5 motion-safe:group-focus-visible/writing:-translate-y-0.5 motion-reduce:transition-none"
          />
        </div>
        <h2
          id={titleId}
          className="mt-3 max-w-xl text-xl leading-snug font-semibold tracking-tight text-foreground"
        >
          {writing.title}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
          {writing.description}
        </p>
        {writing.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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
        )}
      </Link>
    </article>
  )
}
