import { Suspense } from "react";
import Blogs from "@/components/blog/blogs";
import { createMetadata } from "@/lib/metadata";
import Pagination from "@/components/pagination";
import { DotPattern } from "@/components/ui/dot-pattern";
import BlogSkeleton from "@/components/blog/blog-skeleton";

const meta = createMetadata({
  title: "Blog",
  description:
    "Writing about modern web development, UI systems, and component-driven design.",
  path: "/blog",
  ogImage: "/og/blog.png",
});
export const metadata = meta;

const PER_PAGE = 20;

const BlogsPage = () => {
  return (
    <section>
      <div className="px-6 py-10 md:px-10 bottom-dashed">
        <DotPattern className="mask-x-from-80% mask-y-from-80% text-border" />
        <div className="flex flex-col gap-4 items-center justify-center min-h-24 relative z-1 max-w-sm mx-auto">
          <h1 className="text-xl font-semibold">Blog</h1>
          <p className="leading-relaxed max-w-prose text-center">
            Writing about modern web development, UI systems,and
            component-driven design.
          </p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="px-4 py-10 bottom-dashed divide-y">
            <BlogSkeleton />
          </div>
        }
      >
        {/* posts */}
        <div className="px-4 py-10 bottom-dashed">
          <Blogs perPage={PER_PAGE} />
        </div>

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
