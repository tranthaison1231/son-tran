import type { MarkdownInstance } from 'astro';

import { BlogCard } from './BlogCard';
import type { Content } from './BlogPost';
import { Section } from './Section';

type Props = {
  posts: MarkdownInstance<Content>[];
};

const RecentPosts = ({ posts }: Props) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent{' '}
          <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
            Posts
          </span>
        </div>

        <div className="text-sm">
          <a href="/posts">View all Posts →</a>
        </div>
      </div>
    }
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <BlogCard post={post} />
      ))}
    </div>
  </Section>
);

export { RecentPosts };
