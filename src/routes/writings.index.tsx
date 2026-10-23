import { createFileRoute } from "@tanstack/react-router"
import { WritingsPage } from "@/features/writings/components/writings-page"

export const Route = createFileRoute("/writings/")({
  head: () => ({
    meta: [
      { title: "Writings | Irfaan" },
      {
        name: "description",
        content:
          "Notes on building useful interfaces, web applications, and connected systems.",
      },
    ],
  }),
  component: WritingsPage,
})
