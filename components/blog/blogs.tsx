import Link from "next/link";
import { getPosts } from "@/lib/source";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard as BlogCardType } from "@/lib/types";

export const Blogs = async ({ perPage = 2 }: { perPage: number }) => {
  const currentPage = 1;
  const { data } = getPosts(currentPage, perPage);

  if (data.length === 0) {
    return (
      <div className="py-10">
        <div className="flex flex-col gap-2 items-start justify-center relative z-1 max-w-sm">
          <h1 className="font-medium italic tracking-wider">
            No blog posts found
          </h1>
          <p className="leading-relaxed text-sm text-muted-foreground">
            There are no blog posts to display right now. Try removing the
            filters and check again.
          </p>
          <Button
            asChild
            variant="outline"
            className="hover:[&>svg]:-translate-x-0.5 border border-border/50! h-7 mt-4"
          >
            <Link href="/">
              <ArrowLeft className="transition ease-out" /> Back to home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return data.map((post) => {
    const { title, summary, publishedAt, tags } = post.data;
    return (
      <BlogCard
        key={post.url}
        data={{ title, summary, publishedAt, tags }}
        url={post.url}
      />
    );
  });
};

const BlogCard = async ({ data, url }: BlogCardType) => {
  "use cache";
  const { title, summary, publishedAt, tags } = data;

  return (
    <Link
      href={url}
      className="flex flex-col sm:flex-row gap-4 p-4 relative group/blog bg-secondary/30 border rounded-lg transition duration-300 border-border/50 outline-none animate-in slide-in-from-bottom-4 hover:ring-2 focus-visible:ring-2 ring-offset-1 ring-border ring-offset-background"
    >
      <div className="grow-0 shrink-0 sm:basis-28 text-sm text-muted-foreground">
        <PublishDate publishedAt={publishedAt} />
      </div>
      <div className="flex-1 space-y-3 min-w-0">
        <div className="flex gap-2 items-start">
          <h3 className="font-medium text-lg/snug line-clamp-1 flex-[1_1_0] truncate">
            {title}
          </h3>
          <ArrowUpRight className="size-4 shrink-0 opacity-0 group-hover/blog:opacity-70 group-hover/blog:translate-x-0.5 group-focus-visible/blog:translate-x-0.5 transition ease-out" />
        </div>

        <p className="leading-snug text-sm text-muted-foreground line-clamp-2">
          {summary}
        </p>
        {tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <Badge
                key={tag + i}
                variant="secondary"
                className="rounded-sm bg-secondary uppercase text-[11px] py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export const PublishDate = async ({ publishedAt }: { publishedAt: string }) => {
  "use cache";
  return <time>{formatDate(publishedAt)}</time>;
};
