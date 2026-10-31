import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"

export const getPostSummaries = createServerFn({ method: "GET" }).handler(
  async () => {
    const { postSummaries } = await import("./posts.server")
    return postSummaries
  }
)

export const getPost = createServerFn({ method: "GET" })
  .validator(z.string().min(1))
  .handler(async ({ data }) => {
    const { findPost } = await import("./posts.server")
    return findPost(data)
  })
