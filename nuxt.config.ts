import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
  },
  css: ['@/style.css'],
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@pinia/nuxt', '@nuxtjs/sitemap'],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  site: {
    url: 'https://a347.vercel.app',
    name: 'Awesome347',
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
  experimental: {
    inlineSSRStyles: true,
    viewTransition: true,
    renderJsonPayloads: true,
  },
  routeRules: {
    '/': { prerender: true, sitemap: { changefreq: 'weekly', priority: 1.0 } },
    '/search': { prerender: true, sitemap: { changefreq: 'monthly', priority: 0.95 } },
    '/i/[id]': { sitemap: { changefreq: 'weekly', priority: 0.9 } },
    '/submit': { prerender: true, sitemap: { changefreq: 'monthly', priority: 0.75 } },
    '/about': { sitemap: { changefreq: 'weekly', priority: 0.725 } },
    '/**/*.{css, svg, webp}': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  },
})
