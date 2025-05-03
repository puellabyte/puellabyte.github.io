import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My VitePress Site",
  description: "A VitePress site for documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Events', link: '/events' }
    ],

    sidebar: [
      {
        text: 'Hello im a sidebar',
        items: [
          { text: 'Events Title', link: '/events' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/puellabyte/puellabyte.github.io/' }
    ]
  }
})
