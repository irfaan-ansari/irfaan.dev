import { createFromSource } from "fumadocs-core/search/server";

import { posts } from "@/lib/source";

export const { GET } = createFromSource(posts);
