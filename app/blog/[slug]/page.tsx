import Toc from "@/components/blog/toc";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";
import NavButtons from "@/components/nav-buttons";
import { useMDXComponents } from "@/mdx-components";
import { PublishDate } from "@/components/blog/blogs";
import { DotPattern } from "@/components/ui/dot-pattern";
import { getPost, getPostNav, getSortedPosts } from "@/lib/source";
import { Divider } from "@/components/ui/divider";

// create metadata
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const { title, summary } = post.data;

  return createMetadata({
    title,
    description: summary,
    type: "article",
    path: post.url,
  });
};

// generate static params
export async function generateStaticParams() {
  const posts = getSortedPosts();
  return posts.map((post) => ({
    slug: post.slugs[0],
  }));
}

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
      <Divider />
      {/* details */}
      <div className="py-10 relative">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="relative flex flex-col items-start justify-center gap-4 min-h-24 animate-in slide-in-from-bottom-4">
          <h1 className="text-3xl/normal font-bold max-w-prose">{title}</h1>
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
            <span className="w-0.5 bg-border shrink-0 h-3"></span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-10">
        <Divider />
        <div className="relative py-4 after:inset-0 after:absolute after:backdrop-blur-md after:mask-b-from-80% after:mask-x-from-98%">
          <Toc toc={toc} />
        </div>
        <Divider />
      </div>
      {/* article */}
      <article className="max-w-full py-10">
        <div className="animate-in slide-in-from-bottom-4 prose dark:prose-invert max-w-none  prose-headings:mt-6 prose-headings:mb-2 prose-headings:scroll-mt-8 prose-headings:font-bold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight">
          <Mdx components={useMDXComponents()} />
        </div>
      </article>
      <Divider />
    </section>
  );
}
