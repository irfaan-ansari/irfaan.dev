import { Suspense } from "react";
import { Blogs } from "@/components/blog/blogs";
import { createMetadata } from "@/lib/metadata";
import { DotPattern } from "@/components/ui/dot-pattern";
import BlogSkeleton from "@/components/blog/blog-skeleton";
import { Divider } from "@/components/ui/divider";

const meta = createMetadata({
  title: "Blog",
  description:
    "Writing about modern web development, UI systems, and component-driven design.",
  path: "/blog",
});
export const metadata = meta;

const PER_PAGE = 20;

const BlogsPage = () => {
  return (
    <section>
      <div className="py-10 relative">
        <DotPattern className="mask-x-from-90% mask-y-from-80% text-border" />
        <div className="flex flex-col gap-2 items-start justify-center relative z-1 max-w-sm">
          <h1 className="font-medium italic tracking-wider">Blog</h1>
          <p className="leading-relaxed text-sm text-muted-foreground">
            Writing about modern web development, UI systems,and
            component-driven design.
          </p>
        </div>
      </div>

      <Divider />
      <Suspense
        fallback={
          <div className="py-10 divide-y">
            <BlogSkeleton />
          </div>
        }
      >
        {/* posts */}
        <div className="py-10 space-y-4">
          <Blogs perPage={PER_PAGE} />
        </div>
        <Divider />
        {/* TODO implement pagination later when we have more than 20 blogs */}
        {/* <div className="px-6 py-4 md:px-10 bottom-dashed">
          <Pagination
            searchParams={searchParams}
            fn={getPosts}
            perPage={PER_PAGE}
          />
        </div> */}
      </Suspense>
    </section>
  );
};

export default BlogsPage;
