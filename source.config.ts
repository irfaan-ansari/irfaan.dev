import { z } from "zod";
import { frontmatterSchema, defineDocs } from "fumadocs-mdx/config";

export const source = defineDocs({
  dir: "content/blog",
  docs: {
    schema: frontmatterSchema.extend({
      title: z.string(),
      summary: z.string(),
      publishedAt: z.string(),
      tags: z.string().array(),
      featured: z.boolean(),
      readTime: z.string(),
      thumbnail: z.string(),
    }),
  },
});
