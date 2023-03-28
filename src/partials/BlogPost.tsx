import { format } from 'date-fns';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import { Section } from './Section';

export interface Content {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
}

type Props = {
  content: Content;
  children: ReactNode;
};

export const BlogPost = ({ content, children }: Props) => (
  <Section>
    <h1 className="text-center text-3xl font-bold">{content.title}</h1>
    <div className="mt-2 text-center text-sm text-gray-400">
      By {AppConfig.author} on {format(new Date(content.pubDate), 'LLL d, yyyy')}
    </div>
    <div className="mx-auto mt-5 max-w-prose">
      <div className="aspect-h-2 aspect-w-3">
        <img
          className="h-full w-full rounded-lg object-cover object-center"
          src={content.imgSrc}
          alt={content.imgAlt}
          loading="lazy"
        />
      </div>

      <div className="prose prose-invert mt-8 prose-img:rounded-lg">{children}</div>
    </div>
  </Section>
);
