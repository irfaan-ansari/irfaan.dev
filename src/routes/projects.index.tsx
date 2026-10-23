import { createFileRoute } from "@tanstack/react-router"
import { ProjectsPage } from "@/features/projects/components/projects-page"

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects | Irfaan" },
      {
        name: "description",
        content:
          "Explore Irfaan’s web applications, storefronts, and connected business systems.",
      },
    ],
  }),
})
