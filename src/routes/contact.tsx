import { createFileRoute } from "@tanstack/react-router"
import { ContactPage } from "@/features/contact/components/contact-page"

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Irfaan" },
      {
        name: "description",
        content:
          "Have a website, web app, or integration in mind? Tell Irfaan about your project.",
      },
    ],
  }),
  component: ContactPage,
})
