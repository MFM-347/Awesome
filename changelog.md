# Changelogs

## 1. 18-01-25

**Commit Name:** `Upgrade list, UI and seo and add dynamic routes`

**Changes:**

1. UI Enhancement
2. Add smooth animations
3. Smooth scrollbar
4. Update list
5. Add dynamic routes for each item in list

## 2. 29-01-25

**Commit Name:** `Upgrade tailwindcss and recreate UI`

**Changes:**

1. Recreated UI
2. Upgraded to tailwindcss v4

## 3. 30-01-25

**Commit Name:** `Improve performance, type and clean-up SEO`

**Changes:**

1. New OG-Image
2. Cleaned-up SEO
3. Change typographic scheme from `roboto_condensed+source_sans_3` to `inter`
4. Added `id` to data for consistent routing
5. Added auto sitemap and robotsTxt generation

## 4. 09-02-25

**Commit Name:** `Upgraded features, UI, routing and list`

**Changes:**

1. Updated Layout
2. Updated icons for better UI
3. Upgraded search features, i.e, use x:Q where x =? ['name', 'type', 'tags', 'url', 'link', 'description']
4. Updated list
5. Changed dynamic routing from `/item/` to `/i/` for minimal URLs
6. Change typographic scheme from `Inter` to `Fira Sans`

## 5. 20-02-25

**Commit Name:** `Enhanced UI and updated SEO and list`

**Changes:**

1. Updated Navbar
2. Fixed spacing and responsiveness issue
3. Optimized SEO
4. Updated list
5. Changed `category` selector with `type`
6. New OG-Image
7. Changed URL to [a347.vercel.app](https://a347.vercel.app/)

## 6. 3-3-25

**Commit Name:** `Enhanced UI, Search and SEO and updated list`

**Changes:**

1. Moved to Nuxt
2. Updated search functionality, i.e, use x:Q where x =? ['id', 'name', 'type', 'tags', 'foss', 'oslink', 'description', 'url']. Search Shortcut types:

```ts
  id: number
  name: string
  foss: boolean // isOpenSource
  osLink: string // source code link
  type: string
  tags: string[]
  description: string
  url: string // main link
```

3. Enhanced SEO
4. Updated list
5. Fixed UI
6. Optimized Performance

## 7. 15-3-25

**Commit Names:** [`fixed search , smoothened transitions and uodated dependencies`, `update:colors, typography, list, ui`]

1. Fixed Search Functionality
2. Smoothened transitions
3. Fixed SEO
4. Updated list
5. Added prerendering for all routes
6. Change typographic scheme from `Fira Sans` to `Exo 2`
7. Updated Colors

## 8. 7-4-25

**Commit Names:** [`Add everything to README`, `Update data`, `update(docs): generalized format`, `fix(docs)`, `fix(docs) | update(deps)`, `feat(api): added api route with pre-rendering for /i/* routes`, `perf: utilized api and added lazy loads and optimized links and UI/UX`]

1. Added data to README for better accessiblity
2. Updated website's UI/UX and accessiblity
3. Add lazy-loads for better performance
4. Fixed links according NuxtSEO's requirements
5. Added prerendering for dynamic routes `/i/*`

## 9. 27-4-25

**Commit Names:** [`update(deps)`,`update(SEO): Added OG Images & fix(data)`, `update(docs)`]

1. Removed `/api` due to issues
2. Updated website's accessiblity
3. Add lazy-loads for better performance
4. Added NuxtSEO v3 for SEO handling
5. Added opengraph images for each route

## 10. 28-5-25

**Commit Names:** [`update(list, ui)`]

1. Updated List
2. Enhanced UI
3. Fixed accessiblity issues
