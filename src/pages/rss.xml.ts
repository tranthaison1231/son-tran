import rss from "@astrojs/rss";

import { AppConfig } from "@/utils/app-config";

export const get = () =>
	rss({
		title: AppConfig.title,
		description: AppConfig.description,
		site: import.meta.env.SITE,
		items: import.meta.glob("./**/*.md"),
		customData: "<language>en-us</language>",
	});
