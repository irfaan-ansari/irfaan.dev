import { createFileRoute, notFound } from "@tanstack/react-router"
import { NotFound } from "@/components/layout/not-found"
import { PROJECTS } from "@/features/projects/content/projects"
import { ProjectPage } from "@/features/projects/components/project-page"

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((project) => project.id === params.slug)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Project"} | Irfaan` },
      {
        name: "description",
        content: loaderData?.summary ?? "Project overview",
      },
    ],
  }),
  component: () => <ProjectPage project={Route.useLoaderData()} />,
    notFoundComponent: NotFound,
})
