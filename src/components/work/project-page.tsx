import { buttonVariants } from "@/components/ui/button"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Link } from "@tanstack/react-router"
import { PROJECT_DETAILS } from "@/content/project-details"
import type { Project } from "@/content/resume"
import { ProjectPreview } from "@/components/work/project-preview"
import { Icon } from "@/components/shared/icon"
import { cn } from "@/lib/utils"

export function ProjectPage({ project }: { project: Project }) {
  const details = PROJECT_DETAILS[project.id]
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <Link
          to="/work"
          className="mb-7 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <Icon name="left" aria-hidden="true" className="size-4" /> Back to
          projects
        </Link>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          {project.category}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-muted-foreground">{project.description}</p>
        <a
          href={project.website ?? project.thumbnail}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }), "mt-5")}
          aria-label={`View ${project.name} ${project.website ? "website" : "preview"} (opens in a new tab)`}
        >
          View
          <Icon name="arrow" className="size-3.5" />
        </a>
        {project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechnologyBadge key={technology} className="px-3 text-xs">
                {technology}
              </TechnologyBadge>
            ))}
          </div>
        )}
      </section>
      <section className="site-section">
        <ProjectPreview project={project} />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          {project.name} preview.
        </p>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight">
          About the project
        </h2>
        <p className="mt-4 leading-8 text-muted-foreground">
          {details?.overview ?? project.summary}
        </p>
        <h2 className="mt-8 text-xl font-semibold">What it includes</h2>
        <p className="mt-3 leading-8 text-muted-foreground">
          {details?.scope ?? project.detail}
        </p>
      </section>
    </>
  )
}
