import { seoHead, SITE_PAGES } from "@/lib/seo"
import { createFileRoute } from "@tanstack/react-router"
import { ProjectsPage } from "@/components/work/projects-page"

export const Route = createFileRoute("/work/")({
  component: ProjectsPage,
  head: () => seoHead(SITE_PAGES.work),
})
