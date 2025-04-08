import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', ...Array.from({ length: 105 }, (_, x) => `/i/${x}`)],
    },
  },

  render: { asyncScripts: true, http2: { push: true } },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['@/style.css'],

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@nuxt/fonts',
    'nuxt-link-checker',
  ],

  site: {
    url: 'https://a347.vercel.app',
    name: 'Awesome347',
    tagline: 'Trip through cool productifiers and problem solvers',
    description:
      'Explore cutting-edge tools, apps, tutorials and resources to help you improve your productivity and solve problems.',
  },

  sitemap: {
    strictNuxtContentPaths: true,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '25%' },
    ],
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
    '/**/*.{css,svg,webp,png,woff,woff2}': {
      headers: {
        'Cache-Control': 'public, max-age=432000, stale-while-revalidate=604800',
      },
    },
  },
})
