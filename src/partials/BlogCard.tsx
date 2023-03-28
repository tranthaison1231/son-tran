import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

import type { Content } from './BlogPost';

type Props = {
  post: MarkdownInstance<Content>;
};

export const BlogCard = ({ post }: Props) => (
  <a className="hover:translate-y-1" href={post.url}>
    <div className="overflow-hidden rounded-md bg-slate-800">
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="h-full w-full object-cover object-center"
          src={post.frontmatter.imgSrc}
          alt={post.frontmatter.imgAlt}
          loading="lazy"
        />
      </div>

      <div className="px-3 pb-6 pt-4 text-center">
        <h2 className="text-xl font-semibold">{post.frontmatter.title}</h2>

        <div className="mt-1 text-xs text-gray-400">
          {format(new Date(post.frontmatter.pubDate), 'LLL d, yyyy')}
        </div>

        <div className="mt-2 text-sm">{post.frontmatter.description}</div>
      </div>
    </div>
  </a>
);
