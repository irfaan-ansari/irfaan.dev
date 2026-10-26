import { PROJECTS } from "@/content/resume"
import { ProjectCard } from "@/components/work/project-card"
import { cn } from "@/lib/utils"

export function ProjectsPage() {
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Selected work
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Work</h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          Websites, applications, and the systems behind them. A closer look at
          the work.
        </p>
      </section>
      <section
        aria-label="All work"
        className={cn("site-section", "space-y-8 py-8")}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  )
}
