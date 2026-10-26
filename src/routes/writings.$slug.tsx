import { createFileRoute, notFound } from "@tanstack/react-router"

import { POSTS } from "@/lib/md"
import { WritingPage } from "@/components/writing/writing-page"

export const Route = createFileRoute("/writings/$slug")({
  loader: ({ params }) => {
    const writing = POSTS.find((writing) => writing.slug === params.slug)
    if (!writing) throw notFound()
    return writing
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "MarkdownPost"} | Irfaan` },
      {
        name: "description",
        content: loaderData?.description ?? "Notes on building for the web.",
      },
    ],
  }),
  component: () => <WritingPage writing={Route.useLoaderData()} />,
})
