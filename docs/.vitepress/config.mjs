import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "同人音楽 - Event Dates",
	description: "lists 同人 event dates where music was distributed",
	cleanUrls: true,
	themeConfig: {
		search: {
			provider: "local",
		},

		nav: [
			{ text: "Home", link: "/" },
			{ text: "Events", link: "/events" },
		],

		sidebar: [],

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/puellabyte/puellabyte.github.io/",
			},
			{
				icon: "discord",
				link: "https://discord.gg/doujincafe",
			},
		],
	},
	markdown: {
		image: {
			lazyLoading: true,
		},
	},
});
