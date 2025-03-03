import { defineSitemapEventHandler } from '#imports'
import { type Item } from '@/types'
import type { SitemapUrlInput } from '#sitemap/types'
import data from '@/data'

export default defineSitemapEventHandler(async () => {
  const x: Item = data
  const sitemapUrls: SitemapUrlInput[] = data.map((item: any) => ({
    loc: `/i/${item.id}`,
  }))
  return sitemapUrls
})
