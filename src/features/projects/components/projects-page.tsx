import { useState } from "react"
import { PROJECTS } from "@/features/projects/content/projects"
import { ProjectCard } from "@/features/projects/components/project-card"
import { cn } from "@/lib/utils"

export function ProjectsPage() {
  const [category, setCategory] = useState("All")
  const categories = [
    "All",
    ...new Set(PROJECTS.map((project) => project.category)),
  ]
  const visibleProjects = PROJECTS.filter(
    (project) => category === "All" || project.category === category
  )
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Selected work
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          Websites, applications, and the systems behind them. A closer look at
          the work.
        </p>
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-7 flex flex-wrap gap-2"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={cn(
                "cursor-pointer rounded-lg px-3 py-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2",
                category === item
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <p
          role="status"
          className="mt-4 text-xs text-muted-foreground"
        >
          {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
      </section>
      <section
        aria-label="All projects"
        className={cn("site-section", "space-y-8 py-8")}
      >
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  )
}
