import { defineStore } from 'pinia'
import data from '@/data'
import Fuse from 'fuse.js'
import { type Item } from '@/types'

export const useAwesomeStore = defineStore('awesome', {
  state: () => ({
    items: data,
    results: [] as typeof data,
  }),
  actions: {
    search(query: string) {
      const fields = ['id', 'name', 'type', 'tags', 'foss', 'url', 'oslink', 'description']
      const filters: Record<string, string[]> = {}
      const terms: string[] = []
      query.split(/\s+/).forEach((part) => {
        const match = part.match(/^(\w+):(.+)$/)
        if (match) {
          const [, key, value] = match
          if (fields.includes(key)) {
            filters[key] = filters[key] || []
            filters[key].push(value.toLowerCase())
          }
        } else {
          terms.push(part)
        }
      })
      let items = this.items
      Object.entries(filters).forEach(([key, values]) => {
        items = items.filter((item) => {
          const val = item[key as keyof Item]
          if (!val) return false
          return Array.isArray(val)
            ? val.some((v) => typeof v === 'string' && values.includes(v.toLowerCase()))
            : typeof val === 'string' && values.some((value) => val.toLowerCase().includes(value))
        })
      })
      if (terms.length) {
        const fuse = new Fuse(items, {
          keys: fields,
          includeMatches: true,
          minMatchCharLength: 3,
          threshold: 0.4,
        })
        this.results = fuse.search(terms.join(' ')).map((res) => res.item)
      } else {
        this.results = items
      }
    },
  },
})
