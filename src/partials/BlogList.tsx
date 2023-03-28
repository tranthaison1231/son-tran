import type { MarkdownInstance } from 'astro';

import { BlogCard } from '@/partials/BlogCard';
import type { Content } from '@/partials/BlogPost';

const BlogList = ({ posts = [] }: { posts: MarkdownInstance<Content>[] }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.url} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
