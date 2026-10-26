import { createFileRoute, notFound } from "@tanstack/react-router"
import { NotFound } from "@/components/layout/not-found"
import { PROJECTS } from "@/content/resume"
import { ProjectPage } from "@/components/work/project-page"

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
