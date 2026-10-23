import { createFileRoute, notFound } from "@tanstack/react-router"

import { writings } from "@/features/writings/lib/writings"
import { WritingPage } from "@/features/writings/components/writing-page"

export const Route = createFileRoute("/writings/$slug")({
  loader: ({ params }) => {
    const writing = writings.find((writing) => writing.slug === params.slug)
    if (!writing) throw notFound()
    return writing
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Writing"} | Irfaan` },
      {
        name: "description",
        content: loaderData?.description ?? "Notes on building for the web.",
      },
    ],
  }),
  component: () => <WritingPage writing={Route.useLoaderData()} />,
})
