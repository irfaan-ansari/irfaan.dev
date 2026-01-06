import { Suspense } from "react";
import Toc from "@/components/blog/toc";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";
import NavButtons from "@/components/nav-buttons";
import { useMDXComponents } from "@/mdx-components";
import { Skeleton } from "@/components/ui/skeleton";
import { DotPattern } from "@/components/ui/dot-pattern";
import { getPost, getPostNav, getSortedPosts } from "@/lib/source";

// create metadata
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const { title, tags, publishedAt, summary, thumbnail } = post.data;

  return createMetadata({
    title,
    description: summary,
    keywords: tags,
    type: "article",
    publishedTime: publishedAt,
    path: post.url,
    ogImage: thumbnail ?? "/og/blog.png",
  });
};

// generate static params
export async function generateStaticParams() {
  const posts = getSortedPosts();
  return posts.map((post) => ({
    slug: post.slugs[0],
  }));
}

const PublishDate = async ({ publishedAt }: { publishedAt: string }) => {
  "use cache";
  return <span>{formatDate(publishedAt)}</span>;
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const navigation = getPostNav(post.url);

  const { title, tags, readTime, publishedAt, body: Mdx, toc } = post.data;

  return (
    <section>
      {/* buttons */}
      <NavButtons homeUrl="/blog" homeShortcutKey="B" navigation={navigation} />

      {/* details */}
      <div className="px-4 py-10 bottom-dashed">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="relative flex flex-col items-start justify-center gap-4 min-h-24 animate-in slide-in-from-bottom-4">
          <h1 className="text-3xl/relaxed font-bold max-w-prose">{title}</h1>
          {tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, i) => (
                <Badge
                  key={tag + i}
                  variant="secondary"
                  className="rounded-md bg-primary/10 uppercase text-[11px]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <PublishDate publishedAt={publishedAt} />
            <span className="opacity-30 text-[10px]">&#9632;</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 bottom-dashed sticky top-16 z-10 backdrop-blur-md">
        <Toc toc={toc} />
      </div>

      {/* article */}
      <article className="max-w-full px-4 py-10 bottom-dashed">
        <div className="animate-in slide-in-from-bottom-4 prose dark:prose-invert max-w-none  prose-headings:mt-6 prose-headings:mb-2 prose-headings:scroll-mt-8 prose-headings:font-bold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight">
          <Mdx components={useMDXComponents()} />
        </div>
      </article>
    </section>
  );
}
