import { defineStore } from 'pinia'
import data from '@/data'
import Fuse from 'fuse.js'
import { type Item } from '@/types'

export const useAwesomeStore = defineStore('awesome', {
  state: () => ({
    items: data,
    results: [] as Item[],
  }),
  actions: {
    search(query: string) {
      const fields = ['id', 'name', 'type', 'tags', 'foss', 'url', 'oslink', 'description']
      const filters: Record<string, (string | boolean | number)[]> = {}
      const terms: string[] = []

      query.split(/\s+/).forEach((part) => {
        const match = part.match(/^(\w+):(.+)$/)
        if (match) {
          const [, key, value] = match
          if (fields.includes(key)) {
            if (key === 'id') {
              const numValue = Number(value)
              if (!isNaN(numValue)) {
                filters[key] = filters[key] || []
                filters[key].push(numValue)
              }
            } else if (key === 'foss') {
              filters[key] = [value.toLowerCase() === 'true']
            } else {
              filters[key] = filters[key] || []
              filters[key].push(value.toLowerCase())
            }
          }
        } else {
          terms.push(part)
        }
      })

      let items = this.items
      Object.entries(filters).forEach(([key, values]) => {
        items = items.filter((item) => {
          const val = item[key as keyof Item]
          if (val === undefined || val === null) return false

          if (key === 'id' && typeof val === 'number') {
            return values.includes(val)
          }
          if (key === 'foss' && typeof val === 'boolean') {
            return values.includes(val)
          }
          if (Array.isArray(val)) {
            return val.some((v) => typeof v === 'string' && values.includes(v.toLowerCase()))
          }
          return (
            typeof val === 'string' && values.some((value) => val.toLowerCase().includes(value))
          )
        })
      })

      if (terms.length) {
        const fuse = new Fuse(items, {
          keys: ['name', 'type', 'tags', 'url', 'oslink', 'description'],
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
