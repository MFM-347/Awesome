<template>
  <div class="container">
    <h1 class="title">Search</h1>
    <div class="mb-4 lg:mb-8">
      <div class="relative">
        <div class="absolute top-4 left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="size-6 stroke-foreground"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          class="rounded-xl p-4 pl-12 border border-foreground bg-zinc-50 dark:bg-zinc-950 focus:ring focus:border-none focus:ring-primary-500 outline-none w-full block"
          v-model="searchQuery"
          placeholder="Search..."
          @input="updateQuery"
        />
      </div>
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
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAwesomeStore } from "@/stores";
import vCard from "@/components/vCard.vue";

const route = useRoute();
const router = useRouter();
const store = useAwesomeStore();
const { searchResults } = storeToRefs(store);
const searchQuery = ref(typeof route.query.q === "string" ? route.query.q : "");
const updateQuery = () => {
  router.push({ path: "/search", query: { q: searchQuery.value } });
  store.search(searchQuery.value);
};

onMounted(() => {
  if (searchQuery.value) {
    store.search(searchQuery.value);
  }
});
watch(
  () => route.query.q,
  (newQuery) => {
    searchQuery.value = typeof newQuery === "string" ? newQuery : "";
    if (searchQuery.value) {
      store.search(searchQuery.value);
    } else {
      searchResults.value = [];
    }
  },
);
</script>
