import { Skeleton } from "@/components/ui/skeleton";

const BlogSkeleton = () => {
  return [...Array(2)].map((_, i) => (
    <div
      key={i}
      className="flex first:pt-0 flex-col py-6 sm:flex-row gap-6 items-start group/blog border-b border-border/50 animate-in slide-in-from-bottom-10"
    >
      <Skeleton className="sm:max-w-60 h-40 w-full aspect-video sm:aspect-auto bg-secondary self-stretch rounded-lg overflow-hidden shrink-0 relative" />
      <div className="flex-1 space-y-3 w-full">
        <Skeleton className="h-5 w-3/5" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4 w-4/5" />
        <div className="flex gap-2 mt-10">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>
    </div>
  ));
};

export default BlogSkeleton;
