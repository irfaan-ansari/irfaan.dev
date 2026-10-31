import { createFileRoute } from "@tanstack/react-router"
import { SITE_PAGES, absoluteUrl } from "@/lib/seo"

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { postSummaries } = await import("@/server/posts.server")
        const paths = [
          ...Object.values(SITE_PAGES).map((page) => page.path),
          ...postSummaries.map(
            (post) => `/writings/${encodeURIComponent(post.slug)}`
          ),
        ]
        const escapeXml = (value: string) =>
          value
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&apos;")
        const entries = paths
          .map(
            (path) => `<url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`
          )
          .join("\n")
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`,
          {
            headers: {
              "Content-Type": "application/xml; charset=utf-8",
              "Cache-Control": "public, max-age=3600",
            },
          }
        )
      },
    },
  },
})
