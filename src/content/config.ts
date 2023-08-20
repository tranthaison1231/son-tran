import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      imgSrc: image().refine((img) => img.width >= 1080, {
        message: 'Cover image must be at least 1080 pixels wide!',
      }),
      imgAlt: z.string(),
      description: z.string().max(160, 'For best SEO results, please keep the description under 160 characters.'),
    }),
});

export const collections = { blog };
