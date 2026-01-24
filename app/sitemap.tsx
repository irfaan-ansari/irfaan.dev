import { NAVIGATION } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";
import type { MetadataRoute } from "next";
import { getSortedPosts } from "@/lib/source";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  const posts = getSortedPosts();

  const postMap = posts.map((post) => ({
    url: absoluteUrl(post.url),
    lastModified: post.data.publishedAt,
  }));

  const filteredNav = NAVIGATION.filter((nav) => nav.href.startsWith("/"));
  const staticLinks = filteredNav.map((nav) => ({
    url: absoluteUrl(nav.href),
    lastModified: new Date(),
  }));

  return [...staticLinks, ...postMap];
}
