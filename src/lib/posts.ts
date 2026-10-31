import { parse } from "yaml"

export interface PostSummary {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingMinutes: number
  featured: boolean
}

export interface MarkdownPost extends PostSummary {
  body: string
}

export function getAdjacentPosts(posts: readonly PostSummary[], slug: string) {
  const index = posts.findIndex((post) => post.slug === slug)
  return {
    previous: index > 0 ? posts[index - 1] : undefined,
    next: index >= 0 ? posts[index + 1] : undefined,
  }
}

export function parseMarkdown(
  source: string,
  slug: string
): MarkdownPost | null {
  const match = source
    .replace(/\r\n/g, "\n")
    .match(/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/)
  if (!match) throw new Error(`Missing frontmatter in writing: ${slug}`)
  const metadata = parse(match[1])
  if (!metadata || typeof metadata !== "object")
    throw new Error(`Invalid frontmatter: ${slug}`)
  if (metadata.draft === true) return null
  for (const field of ["title", "description", "date"]) {
    if (typeof metadata[field] !== "string" || !metadata[field].trim())
      throw new Error(`Missing ${field} in writing: ${slug}`)
  }
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(metadata.date) ||
    Number.isNaN(Date.parse(metadata.date))
  )
    throw new Error(`Invalid date in writing: ${slug}`)
  if (
    metadata.tags !== undefined &&
    (!Array.isArray(metadata.tags) ||
      !metadata.tags.every((tag: unknown) => typeof tag === "string"))
  )
    throw new Error(`Invalid tags in writing: ${slug}`)
  if (metadata.featured !== undefined && typeof metadata.featured !== "boolean")
    throw new Error(`Invalid featured flag in writing: ${slug}`)
  const body = match[2].trim()
  return {
    slug,
    title: metadata.title,
    description: metadata.description,
    date: metadata.date,
    tags: metadata.tags || [],
    featured: metadata.featured === true,
    body,
    readingMinutes: Math.max(1, Math.ceil(body.split(/\s+/).length / 200)),
  }
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`))
}
