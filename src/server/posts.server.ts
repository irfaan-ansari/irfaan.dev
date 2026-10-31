import { parseMarkdown, getAdjacentPosts } from "@/lib/posts"

const sources = import.meta.glob<string>("/src/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
})

const posts = Object.entries(sources)
  .map(([path, source]) =>
    parseMarkdown(source, path.split("/").pop()!.replace(/\.md$/, ""))
  )
  .filter((post) => post !== null)
  .sort(
    (a, b) =>
      Number(b.featured) - Number(a.featured) ||
      b.date.localeCompare(a.date) ||
      a.title.localeCompare(b.title)
  )

export const postSummaries = posts.map(({ body: _body, ...summary }) => summary)

export function findPost(slug: string) {
  const writing = posts.find((post) => post.slug === slug)
  if (!writing) return null
  return { writing, ...getAdjacentPosts(postSummaries, slug) }
}
