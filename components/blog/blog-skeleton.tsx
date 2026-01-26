import { Skeleton } from "@/components/ui/skeleton";

const BlogSkeleton = ({ length = 2 }: { length?: number }) => {
  return [...Array(length)].map((_, i) => (
    <div
      key={i}
      className="flex flex-col sm:flex-row gap-4 mb-4 last:mb-0 p-4 relative group/blog bg-secondary/30 border rounded-lg transition duration-300 border-border/50 outline-none animate-in slide-in-from-bottom-4 hover:ring-2 focus-visible:ring-2 ring-offset-1 ring-border ring-offset-background"
    >
      <Skeleton className="h-4 grow-0 shrink-0 sm:basis-28" />
      <div className="flex-1 space-y-3 min-w-0">
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-4 w-4/5" />

        <div className="flex gap-2 flex-wrap mt-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton className="h-5 w-24" key={i} />
          ))}
        </div>
      </div>
    </div>
  ));
};

export default BlogSkeleton;
