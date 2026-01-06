import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Thumbnail from "@/components/thumbnail";
import { BlogCard as BlogCardType } from "@/lib/types";

const BlogCard = async ({ data, url }: BlogCardType) => {
  "use cache";
  const { title, summary, publishedAt, thumbnail, readTime, tags } = data;

  return (
    <Link
      href={url}
      className="flex first:pt-0 flex-col sm:flex-row gap-6 py-6 group/blog not-last:border-b focus-visible:border-border hover:border-border transition duration-300 border-border/50 outline-none animate-in slide-in-from-bottom-4"
    >
      <Thumbnail
        src={thumbnail ?? ""}
        w={600}
        h={400}
        alt={title}
        className="sm:max-w-60 self-stretch bg-secondary rounded-lg shrink-0"
      />

      <div className="flex-1 space-y-3">
        <h3 className="font-medium text-lg/snug">{title}</h3>
        <p className="leading-snug text-sm text-muted-foreground line-clamp-2">
          {summary}
        </p>
        {tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <Badge
                key={tag + i}
                variant="secondary"
                className="rounded-md bg-primary/10 uppercase text-[11px] py-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{formatDate(publishedAt)}</span>
          <span className="w-0.5 bg-border shrink-0 h-3"></span>
          <span>{readTime}</span>
          <span className="w-0.5 bg-border shrink-0 h-3"></span>
          <ArrowRight className="size-4 group-hover/blog:translate-x-0.5 group-focus-visible/blog:translate-x-0.5 transition ease-out" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
