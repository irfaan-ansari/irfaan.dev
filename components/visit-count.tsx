import { trackViews } from "@/server";

const VisitCount = async () => {
  const { data, error } = await trackViews();
  if (error) return <span className="text-destructive">##</span>;

  return <span>#{data?.up_count}</span>;
};

export default VisitCount;
