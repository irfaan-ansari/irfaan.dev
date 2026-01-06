import { cn } from "@/lib/utils";
import { compileMdx } from "@/lib/source";


const Markdown = async ({
  className,
  content,
}: {
  className?: string;
  content: string;
}) => {
  const Mdx = await compileMdx(content);
  return (
    <div
      className={cn(
        "prose max-w-full text-pretty dark:prose-invert [&_ul]:pl-4 [&_li]:pl-0",
        className
      )}
    >
      <Mdx />
    </div>
  );
};

export default Markdown;
