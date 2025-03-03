# 1. 18-01-25

**Commit Name:** `Upgrade list, UI and seo and add dynamic routes`

**Changes:**

1. UI Enhancement
2. Add smooth animations
3. Smooth scrollbar
4. Update list
5. Add dynamic routes for each item in list

# 2. 29-01-25

**Commit Name:** `Upgrade tailwindcss and recreate UI`

**Changes:**

1. Recreated UI
2. Upgraded to tailwindcss v4

# 3. 30-01-25

**Commit Name:** `Improve performance, type and clean-up SEO`

**Changes:**

1. New OG-Image
2. Cleaned-up SEO
3. Change typographic scheme from `roboto_condensed+source_sans_3` to `inter`
4. Added `id` to data for consistent routing
5. Added auto sitemap and robotsTxt generation

# 4. 09-02-25

**Commit Name:** `Upgraded features, UI, routing and list`

**Changes:**

1. Updated Layout
2. Updated icons for better UI
3. Upgraded search features, i.e, use x:Q where x =? ['name', 'type', 'tags', 'url', 'link', 'description']
4. Updated list
5. Changed dynamic routing from `/item/` to `/i/` for minimal URLs
6. Change typographic scheme from `Inter` to `Fira Sans`

# 5. 20-02-25

**Commit Name:** `Enhanced UI and updated SEO and list`

**Changes:**

1. Updated Navbar
2. Fixed spacing and responsiveness issue
3. Optimized SEO
4. Updated list
5. Changed `category` selector with `type`
6. New OG-Image
7. Changed URL to [a347.vercel.app](https://a347.vercel.app/)

# 6. 3-3-25

**Commit Name:** `Enhanced UI, Search and SEO and updated list`

**Changes:**

1. Moved to Nuxt
2. Updated search functionality, i.e, use x:Q where x =? ['id', 'name', 'type', 'tags', 'foss', 'oslink', 'description', 'url']. Search Shortcut types:
```js
  id: number
  name: string
  foss: boolean // isOpenSource
  osLink: string // source code link
  type: string
  tags: string[]
  description: string
  url: string // main link
}
```
3. Enhanced SEO
4. Updated list
5. Fixed UI
6. Optimized Performance
