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

		sidebar: [
			{
				text: "Events",
				items: [
					{
						text: "Comiket / C",
						link: "/events#comiket",
					},
					{
						text: "M3",
						link: "/events#m3",
					},
					{
						text: "Touhou",
						link: "/events#touhou",
						items: [
							{ text: "Reitaisai / RTS", link: "/events#rts" },
							{ text: "Autumn Reitaisai / ARTS", link: "/events#arts" },
							{ text: "Air Reitaisai", link: "/events#air-rts" },
							{ text: "Touhou Kouroumu / TK", link: "/events#tk" },
						],
					},
					{
						text: "Vocaloid",
						link: "/events#vocaloid",
						items: [
							{
								text: "Magical Mirai Creators Market",
								link: "/events#magimirai-creators-market",
							},
							{
								text: "Vocaloid Paradise / VOPARA",
								link: "/events#vopara",
							},
						],
					},
					{
						text: "COMITIA",
						link: "/events#comitia",
					},
					{
						text: "Aikatsu",
						link: "/events#aikatsu",
					},
					{
						text: "Foreign Events",
						link: "/events#foreign-events",
					},
				],
			},
		],

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
