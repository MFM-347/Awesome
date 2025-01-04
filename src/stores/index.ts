import { defineStore } from "pinia";
import data from "../data";
import Fuse from "fuse.js";

export const useAwesomeStore = defineStore("awesome", {
  state: () => ({
    items: data,
    searchResults: [] as typeof data,
  }),
  actions: {
    search(query: string) {
      const fuse = new Fuse(this.items, {
        keys: ["name", "category", "tags"],
        threshold: 0.3,
      });
      this.searchResults = fuse.search(query).map((result) => result.item);
    },
  },
});
