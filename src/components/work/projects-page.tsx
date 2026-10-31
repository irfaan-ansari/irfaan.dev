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
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Explore my work
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          Take a look at the websites, online stores, and business tools I’ve
          built, along with a few design concepts. Open a project to see what it
          includes and how it came together.
        </p>
      </section>
      <section
        aria-label="All work"
        className={cn(
          "site-section",
          "grid gap-6 py-8 md:grid-cols-2 md:[&>article:nth-child(4n+3)]:col-span-2 md:[&>article:nth-child(4n+4)]:col-span-2"
        )}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            wide={index % 4 >= 2}
          />
        ))}
      </section>
    </>
  )
}
