import { defineStore } from 'pinia'
import data from '../data.js'
import Fuse from 'fuse.js'

export const useAwesomeStore = defineStore('awesome', {
  state: () => ({
    items: data,
    searchResults: [],
    theme: localStorage.getItem('theme') || 'light',
  }),
  actions: {
    search(query) {
      const fuse = new Fuse(this.items, {
        keys: ['name', 'category', 'tags'],
        threshold: 0.3,
      })
      this.searchResults = fuse.search(query).map((result) => result.item)
    },
    setTheme(newTheme) {
      this.theme = newTheme
      localStorage.setItem('theme', newTheme)
    },
  },
})
