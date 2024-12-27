<template>
  <div>
    <h1 class="title">Search</h1>
    <div class="mb-6">
      <input
        class="rounded-md p-2.5 border border-zinc-300 bg-zinc-200 dark:bg-zinc-800 focus:ring-2 focus:ring-zinc-400 focus:outline-none w-full transition-colors duration-300 ease-in block"
        v-model="searchQuery"
        placeholder="Search..."
        @input="handleSearch"
      />
    </div>
    <div
      v-if="searchResults.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <vCard v-for="item in searchResults" :key="item.id" :item="item" />
    </div>
    <div v-else-if="searchQuery" class="text-center text-gray-500">
      No results found for "{{ searchQuery }}"
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useAwesomeStore } from "../stores";

const store = useAwesomeStore();
const { searchResults } = storeToRefs(store);

const searchQuery = ref("");

const handleSearch = () => {
  store.search(searchQuery.value);
};

watch(searchQuery, () => {
  if (searchQuery.value === "") {
    searchResults.value = [];
  }
});
</script>
