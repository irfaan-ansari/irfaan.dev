import { buttonVariants } from "@/components/ui/button"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Link } from "@tanstack/react-router"
import { profile } from "@/content/profile"
import type { Project } from "@/features/projects/content/projects"
import { ProjectPreview } from "@/features/projects/components/project-preview"
import { Icon } from "@/components/shared/icon"
import { cn } from "@/lib/utils"
import { RiArrowLeftLine } from "@remixicon/react"

export function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <Link
          to="/projects"
          className="mb-7 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <RiArrowLeftLine aria-hidden="true" className="size-4" /> All projects
        </Link>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          {project.category}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechnologyBadge key={technology} className="px-3 text-xs">
              {technology}
            </TechnologyBadge>
          ))}
        </div>
      </section>
      <section className="site-section">
        <ProjectPreview project={project} />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          {project.name} website preview.
        </p>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight">
          Project overview
        </h2>
        <p className="mt-4 leading-8 text-muted-foreground">
          {project.summary}
        </p>
        <h2 className="mt-8 text-xl font-semibold">Scope</h2>
        <p className="mt-3 leading-8 text-muted-foreground">{project.detail}</p>
        <a
          href={`${profile.email}?subject=${encodeURIComponent(`Tell me about ${project.name}`)}`}
          className={cn(buttonVariants(), "mt-8")}
        >
          Discuss a similar project <Icon name="arrow" className="size-4" />
        </a>
      </section>
    </>
  )
}
