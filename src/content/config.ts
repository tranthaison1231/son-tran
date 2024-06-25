import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: () =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			imgSrc: z.string(),
			imgAlt: z.string(),
			description: z
				.string()
				.max(
					160,
					"For best SEO results, please keep the description under 160 characters.",
				),
		}),
});

export const collections = { blog };
