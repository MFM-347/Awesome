<template>
  <div class="container">
    <h1 class="title">Search</h1>
    <div class="mb-4 lg:mb-8">
      <div class="relative max-w-xl mx-auto">
        <input
          class="rounded-xl p-4 pl-12 w-full px-6 py-4 bg-foreground/5 border border-foreground/10 backdrop-blur-xl focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20"
          v-model="searchQuery"
          placeholder="Search..."
          @input="updateQuery"
        />
        <div class="absolute left-3 top-2 py-2">
          <MagnifyingGlassIcon class="size-6 fill-foreground" />
        </div>
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
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAwesomeStore } from '@/stores'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import vCard from '@/components/vCard.vue'

const route = useRoute()
const router = useRouter()
const store = useAwesomeStore()
const { searchResults } = storeToRefs(store)
const searchQuery = ref(typeof route.query.q === 'string' ? route.query.q : '')
const updateQuery = () => {
  router.push({ path: '/search', query: { q: searchQuery.value } })
  store.search(searchQuery.value)
}

onMounted(() => {
  if (searchQuery.value) {
    store.search(searchQuery.value)
  }
})
watch(
  () => route.query.q,
  (newQuery) => {
    searchQuery.value = typeof newQuery === 'string' ? newQuery : ''
    if (searchQuery.value) {
      store.search(searchQuery.value)
    } else {
      searchResults.value = []
    }
  },
)
</script>
