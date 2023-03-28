import type { MarkdownInstance } from 'astro';

import type { Content } from '@/partials/BlogPost';

export const sortByDate = (posts: MarkdownInstance<Content>[]) => {
  return posts.sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf());
};
