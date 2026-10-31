import { Link } from "@tanstack/react-router"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { type PROJECTS } from "@/content/resume"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/shared/icon"
import { ProjectPreview } from "./project-preview"

export function ProjectCard({
  project,
  wide = false,
}: {
  project: (typeof PROJECTS)[number]
  wide?: boolean
}) {
  return (
    <article className="group/project relative h-full min-w-0 focus-within:z-10 hover:z-10">
      <Card
        className={cn(
          "grid h-full grid-rows-[1fr_auto] gap-5 overflow-hidden rounded-xl border border-border p-4 shadow-none ring-0",
          wide &&
            "md:grid-cols-[0.85fr_1.15fr] md:grid-rows-1 md:items-center md:gap-8"
        )}
      >
        <CardContent
          className={cn(
            "items-start gap-0 px-0 py-1",
            wide && "md:py-4 md:pl-2"
          )}
        >
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {project.category}
          </p>
          <h3 className="mt-1 text-xl font-bold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
            <br />
            {project.detail}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href={project.website ?? project.thumbnail}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
              aria-label={`View ${project.name} ${project.website ? "website" : "preview"} (opens in a new tab)`}
            >
              View <Icon name="arrow" className="size-3.5" />
            </a>
            <Link
              to="/work/$slug"
              className={buttonVariants({ size: "sm", variant: "link" })}
              params={{ slug: project.id }}
            >
              Read more <Icon name="right" className="size-3.5" />
            </Link>
          </div>
        </CardContent>
        <div
          className={cn(
            "relative min-w-0 translate-y-4 rotate-3 self-end rounded-lg shadow-md transition-[translate,rotate,box-shadow] duration-100 ease-out motion-safe:group-hover/project:translate-y-3.5 motion-reduce:transition-none",
            wide && "md:w-[calc(100%-56px)] md:self-center md:justify-self-end"
          )}
        >
          <Link
            to="/work/$slug"
            params={{ slug: project.id }}
            aria-label={`Read more about ${project.name}`}
            className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <ProjectPreview project={project} />
          </Link>
        </div>
      </Card>
    </article>
  )
}
