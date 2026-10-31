import { seoHead, SITE_PAGES } from "@/lib/seo"
import { createFileRoute } from "@tanstack/react-router"
import { ContactPage } from "@/components/contact/contact-page"

export const Route = createFileRoute("/contact")({
  head: () => seoHead(SITE_PAGES.contact),
  component: ContactPage,
})
