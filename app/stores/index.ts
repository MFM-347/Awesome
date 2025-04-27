import { defineStore } from 'pinia'
import { data } from '@/data'
import Fuse from 'fuse.js'
import { type Item } from '@/types'

export const useAwesomeStore = defineStore('awesome', {
  state: () => ({
    items: data,
    results: [] as Item[],
    fuse: null as Fuse<Item> | null,
  }),
  actions: {
    initializeFuse() {
      if (!this.fuse) {
        this.fuse = new Fuse(this.items, {
          keys: ['name', 'type', 'tags', 'url', 'oslink', 'description'],
          includeMatches: true,
          minMatchCharLength: 3,
          threshold: 0.4,
        })
      }
    },
    search(query: string) {
      if (!query.trim()) {
        this.results = this.items
        return
      }

      const fields = ['id', 'name', 'type', 'tags', 'foss', 'url', 'oslink', 'description']
      const filters: Record<string, (string | boolean | number)[]> = {}
      const terms: string[] = []

      for (const part of query.trim().split(/\s+/)) {
        const match = part.match(/^(\w+):(.+)$/)
        if (match) {
          const [, key, value] = match
          if (fields.includes(key)) {
            if (key === 'id') {
              const num = Number(value)
              if (!isNaN(num)) {
                ;(filters[key] ||= []).push(num)
              }
            } else if (key === 'foss') {
              filters[key] = [value.toLowerCase() === 'true']
            } else {
              ;(filters[key] ||= []).push(value.toLowerCase())
            }
          }
        } else {
          terms.push(part)
        }
      }

      let filtered = this.items

      if (Object.keys(filters).length > 0) {
        filtered = filtered.filter((item) => {
          return Object.entries(filters).every(([key, values]) => {
            const val = item[key as keyof Item]
            if (val == null) return false

            if (key === 'id' && typeof val === 'number') {
              return values.includes(val)
            }
            if (key === 'foss' && typeof val === 'boolean') {
              return values.includes(val)
            }
            if (Array.isArray(val)) {
              return val.some((v) => typeof v === 'string' && values.includes(v.toLowerCase()))
            }
            if (typeof val === 'string') {
              return values.some((value) => val.toLowerCase().includes(value))
            }
            return false
          })
        })
      }

      if (terms.length > 0) {
        this.initializeFuse()
        const fuseResults = this.fuse!.search(terms.join(' '))
        const filteredIds = new Set(filtered.map((item) => item.id))
        this.results = fuseResults.map((r) => r.item).filter((item) => filteredIds.has(item.id))
      } else {
        this.results = filtered
      }
    },
  },
})
