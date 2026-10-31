import { PROFILE } from "@/content/profile"

export const SITE_PAGES = {
  home: {
    title: "Irfaan — Full Stack Developer",
    description:
      "I build websites, online stores, and custom platforms for customer orders and daily operations. Explore my work and get in touch about your project.",
    path: "/",
  },
  work: {
    title: "Websites, Online Stores & Platforms — Irfaan",
    description:
      "Explore websites, Shopify stores, and ordering and admin platforms I’ve built, alongside design concepts. View the projects and see what I can help you build.",
    path: "/work",
  },
  writing: {
    title: "Website & Business Technology Advice — Irfaan",
    description:
      "Practical posts for business owners about improving websites, planning a build, and making everyday work easier with technology.",
    path: "/writings",
  },
  contact: {
    title: "Discuss Your Website or Platform — Irfaan",
    description:
      "Tell me about your website, online store, or custom platform. Share what you need help with, and we can work through the scope and next steps.",
    path: "/contact",
  },
} as const

export function absoluteUrl(path: string) {
  return new URL(path, PROFILE.siteUrl).href
}

export function seoHead({
  title,
  description,
  path,
  type = "website",
}: {
  title: string
  description: string
  path: string
  type?: "website" | "article"
}) {
  const url = absoluteUrl(path)
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }
}

export function jsonLd(value: Record<string, unknown>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(value).replace(/</g, "\\u003c"),
  }
}
