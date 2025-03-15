import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/'],
    },
  },
  css: ['@/style.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/sitemap', 'nuxt-schema-org', '@nuxt/fonts'],
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
  siteConfig: {
    url: 'https://a347.vercel.app',
    name: 'Awesome347',
    description:
      'Explore cutting-edge tools, apps, tutorials and resources to help you improve your productivity and solve problems.',
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Awesome347',
      alternateName: 'a347',
      logo: '/logo-light.svg',
      sameAs: [
        'https://github.com/mfm-347',
        'https://dev.to/mfm-347',
        'https://codepen.io/mfm-347/',
        'https://twitter.com/@mfm347',
        'https://xyzdev.vercel.app/',
      ],
    },
  },
  features: {
    inlineStyles: true,
  },
  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },
  routeRules: {
    '/': { sitemap: { changefreq: 'weekly', priority: 1.0 } },
    '/search': { sitemap: { changefreq: 'weekly', priority: 0.9 } },
    '/i/*': { sitemap: { changefreq: 'weekly', priority: 0.8 } },
    '/submit': { sitemap: { changefreq: 'monthly', priority: 0.75 } },
    '/about': { sitemap: { changefreq: 'monthly', priority: 0.7 } },
    '/**/*.{css,svg,jpg,jpeg,png,webp}': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  },
})
