import { createFileRoute } from "@tanstack/react-router"
import { WritingsPage } from "@/components/writing/writings-page"

export const Route = createFileRoute("/writings/")({
  head: () => ({
    meta: [
      { title: "Writing | Irfaan" },
      {
        name: "description",
        content:
          "Notes on building useful interfaces, web applications, and connected systems.",
      },
    ],
  }),
  component: WritingsPage,
})
