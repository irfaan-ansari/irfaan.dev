import BlogCard from "./blog-card";
import { getPosts } from "@/lib/source";

const BlogRecent = async ({ limit = 2 }: { limit: number }) => {
  const { data } = getPosts(1, limit);

  return (
    <div>
      {data.map((post) => (
        <BlogCard key={post.url} data={post.data} url={post.url} />
      ))}
    </div>
  );
};

export default BlogRecent;
