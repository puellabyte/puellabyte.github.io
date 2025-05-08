import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "同人音楽 - Event Dates",
  description: "lists 同人 event dates if music was distributed at said event once",
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: "local",
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Events", link: "/events" },
    ],

    sidebar: [
      {
        text: "Events",
        items: [{ text: "Doujin Events", link: "/events" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/puellabyte/puellabyte.github.io/",
      },
    ],
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
});
