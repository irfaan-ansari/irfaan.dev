import assert from "node:assert/strict"
import test from "node:test"
import { parseMarkdown, getAdjacentPosts } from "./posts.ts"

const source = `---
title: A useful title
description: A short description
date: "2026-10-31"
tags: [Websites]
---

## Body

Post text.`

test("parses metadata, body, and reading time with CRLF input", () => {
  const post = parseMarkdown(source.replaceAll("\n", "\r\n"), "example")!
  assert.equal(post.slug, "example")
  assert.equal(post.title, "A useful title")
  assert.deepEqual(post.tags, ["Websites"])
  assert.equal(post.body, "## Body\n\nPost text.")
  assert.equal(post.readingMinutes, 1)
})

test("excludes draft posts", () => {
  assert.equal(
    parseMarkdown(source.replace("tags:", "draft: true\ntags:"), "draft"),
    null
  )
})

test("rejects missing frontmatter and invalid metadata", () => {
  assert.throws(() => parseMarkdown("No frontmatter", "broken"), /frontmatter/)
  assert.throws(
    () =>
      parseMarkdown(
        source.replace("title: A useful title", "title: 42"),
        "broken"
      ),
    /title/
  )
  assert.throws(
    () =>
      parseMarkdown(source.replace("tags: [Websites]", "tags: [42]"), "broken"),
    /tags/
  )
})

test("adjacent links respect listing order and its boundaries", () => {
  const base = parseMarkdown(source, "first")!
  const posts = [base, { ...base, slug: "second" }, { ...base, slug: "third" }]
  assert.equal(getAdjacentPosts(posts, "first").previous, undefined)
  assert.equal(getAdjacentPosts(posts, "first").next?.slug, "second")
  assert.equal(getAdjacentPosts(posts, "second").previous?.slug, "first")
  assert.equal(getAdjacentPosts(posts, "third").next, undefined)
  assert.deepEqual(getAdjacentPosts(posts, "missing"), {
    previous: undefined,
    next: undefined,
  })
  assert.deepEqual(getAdjacentPosts([], "missing"), {
    previous: undefined,
    next: undefined,
  })
})
