import { seoHead, absoluteUrl, jsonLd } from "@/lib/seo"
import { PROFILE } from "@/content/profile"
import { createFileRoute, notFound } from "@tanstack/react-router"

import { getPost } from "@/server/posts"
import { WritingPage } from "@/components/writing/writing-page"

export const Route = createFileRoute("/writings/$slug")({
  loader: async ({ params }) => {
    const result = await getPost({ data: params.slug })
    if (!result) throw notFound()
    return result
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Post not found — Irfaan" },
          { name: "robots", content: "noindex" },
        ],
      }
    const { writing } = loaderData
    const path = `/writings/${encodeURIComponent(writing.slug)}`
    return {
      ...seoHead({
        title: `${writing.title} — Irfaan`,
        description: writing.description,
        path,
        type: "article",
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: writing.title,
          description: writing.description,
          datePublished: writing.date,
          author: {
            "@type": "Person",
            name: PROFILE.name,
            url: PROFILE.siteUrl,
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
          url: absoluteUrl(path),
        }),
      ],
    }
  },
  component: () => <WritingPage {...Route.useLoaderData()} />,
})
