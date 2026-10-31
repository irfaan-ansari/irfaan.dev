import { seoHead, SITE_PAGES, jsonLd, absoluteUrl } from "@/lib/seo"
import { PROFILE } from "@/content/profile"
import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "@/components/home/home-page"

export const Route = createFileRoute("/")({
  head: () => ({
    ...seoHead(SITE_PAGES.home),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: PROFILE.name,
        url: PROFILE.siteUrl,
        jobTitle: PROFILE.role,
      }),
    ],
  }),
  component: HomePage,
})
