import type { MarkdownInstance } from 'astro';

import { BlogCard } from '@/partials/BlogCard';
import type { Content } from '@/partials/BlogPost';

const BlogList = ({ posts = [] }: { posts: MarkdownInstance<Content>[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.url} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
