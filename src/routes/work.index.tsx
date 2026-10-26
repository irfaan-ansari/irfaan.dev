import { createFileRoute } from "@tanstack/react-router"
import { ProjectsPage } from "@/components/work/projects-page"

export const Route = createFileRoute("/work/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Work | Irfaan" },
      {
        name: "description",
        content:
          "Explore Irfaan’s web applications, storefronts, and connected business systems.",
      },
    ],
  }),
})
