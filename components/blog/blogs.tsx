import Link from "next/link";
import BlogCard from "./blog-card";
import { getPosts } from "@/lib/source";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmptySection from "@/components/empty-section";

const Blogs = async ({ perPage = 2 }: { perPage: number }) => {
  const currentPage = 1;
  const { data } = getPosts(currentPage, perPage);

  if (data.length === 0) {
    return (
      <EmptySection
        title="No blog posts found"
        description="There are no blog posts to display right now. Try removing the filters and check again."
        action={
          <Button
            asChild
            variant="secondary"
            className="hover:[&>svg]:-translate-x-0.5"
          >
            <Link href="/">
              <ArrowLeft className="transition ease-out" /> Back to home
            </Link>
          </Button>
        }
      />
    );
  }

  return data.map((post) => (
    <BlogCard key={post.url} data={post.data} url={post.url} />
  ));
};

export default Blogs;
