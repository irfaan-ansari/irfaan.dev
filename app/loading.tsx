import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <div className="flex flex-col">
      <div className="bottom-dashed px-4 py-10 relative">
        <Skeleton className="h-28" />
      </div>
      <div className="px-4 py-10 bottom-dashed flex-1">
        <Skeleton className="w-2/3 sm:w-1/3 h-6 mb-4" />
        <Skeleton className="w-4/5 sm:w-2/5 h-10 mb-4" />
        <Skeleton className="sm:w-3/5 h-8 mb-10" />
        <Skeleton className="w-4/6 h-5 mb-3" />
        <Skeleton className="w-5/6 h-5 mb-3" />
        <Skeleton className="w-full h-5 mb-10" />
        <Skeleton className="w-3/5 h-5 mb-3" />
        <Skeleton className="w-4/5 h-5" />
      </div>
    </div>
  );
};

export default Loading;
