import { seoHead, SITE_PAGES } from "@/lib/seo"
import { getPostSummaries } from "@/server/posts"
import { createFileRoute } from "@tanstack/react-router"
import { WritingsPage } from "@/components/writing/writings-page"

export const Route = createFileRoute("/writings/")({
  loader: () => getPostSummaries(),
  head: () => seoHead(SITE_PAGES.writing),
  component: () => <WritingsPage posts={Route.useLoaderData()} />,
})
