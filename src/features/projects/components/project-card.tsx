import { Card, CardContent } from "@/components/ui/card"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { type PROJECTS } from "@/features/projects/content/projects"
import { Icon } from "@/components/shared/icon"
import { ProjectPreview } from "@/features/projects/components/project-preview"

export function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number]
}) {
  return (
    <article className="group/project relative focus-within:z-10 hover:z-10">
      <Card className="grid gap-5 overflow-hidden rounded-xl border border-border p-4 shadow-none ring-0 sm:grid-cols-[1.35fr_1fr]">
        <CardContent className="items-start gap-0 px-0 py-1">
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
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <TechnologyBadge key={t}>{t}</TechnologyBadge>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            render={
              <Link to="/work/$slug" params={{ slug: project.id }}>
                View project <Icon name="right" className="size-3.5" />
              </Link>
            }
          />
        </CardContent>
        <div className="relative min-w-0 translate-y-4 rotate-3 self-end rounded-lg shadow-md transition-[translate,rotate,box-shadow] duration-200 ease-out motion-safe:group-hover/project:-translate-x-1 sm:translate-x-7 sm:motion-safe:group-hover/project:translate-x-6 motion-reduce:transition-none">
          <Link
            to="/work/$slug"
            params={{ slug: project.id }}
            aria-label={`View ${project.name}`}
            className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <ProjectPreview project={project} />
          </Link>
        </div>
      </Card>
    </article>
  )
}
