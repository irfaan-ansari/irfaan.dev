import { NAVIGATION } from "@/lib/config";
import { buildUrl } from "@/lib/utils";
import type { MetadataRoute } from "next";
import { getSortedPosts } from "@/lib/source";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  const posts = getSortedPosts();

  const postMap = posts.map((post) => ({
    url: buildUrl(post.url),
    lastModified: post.data.publishedAt,
  }));

  const filteredNav = NAVIGATION.filter((nav) => nav.href.startsWith("/"));
  const staticLinks = filteredNav.map((nav) => ({
    url: buildUrl(nav.href),
    lastModified: new Date(),
  }));

  return [...staticLinks, ...postMap];
}
