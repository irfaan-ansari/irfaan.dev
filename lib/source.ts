import { loader } from "fumadocs-core/source";
import { createCompiler } from "@fumadocs/mdx-remote";
import { findNeighbour } from "fumadocs-core/page-tree";
import { source } from "fumadocs-mdx:collections/server";

export const posts = loader({
  baseUrl: "/blog",
  source: source.toFumadocsSource(),
});

export const getAllPosts = () => {
  return posts.getPages();
};
// sort posts by published date in descending order
export const getSortedPosts = () => {
  return posts.getPages().sort((a, b) => {
    const dateA = new Date(a.data.publishedAt).getTime();
    const dateB = new Date(b.data.publishedAt).getTime();
    return dateB - dateA;
  });
};

// get paginated posts
export const getPosts = (page: number = 1, perPage: number = 4) => {
  const allPosts = getSortedPosts();

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const total = posts.getPages().length;
  const pages = Math.ceil(total / perPage);

  return {
    data: allPosts.slice(start, end),
    pages: pages,
    total: total,
    perPage,
  };
};

// get adjacent posts
export const getPostNav = (url: string) => {
  return findNeighbour(posts.pageTree, url);
};

// get post by slug
export const getPost = (slug: string) => {
  return posts.getPage([slug]);
};

// compile raw md string
const compiler = createCompiler({
  // options
});

export const compileMdx = async (content: string) => {
  const compiled = await compiler.compile({
    source: content,
  });
  return compiled.body;
};
