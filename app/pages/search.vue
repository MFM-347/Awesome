<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from '#imports'
import { storeToRefs } from 'pinia'
import { useAwesomeStore } from '@/stores'
import { meta } from '@/data'

const r = useRoute()
const router = useRouter()
const store = useAwesomeStore()
const { results } = storeToRefs(store)
const q = ref(typeof r.query.q === 'string' ? r.query.q : '')

const update = () => {
  router.push({ path: '/search', query: { q: q.value } })
  store.search(q.value)
}

onMounted(() => {
  if (q.value) store.search(q.value)
})

watch(
  () => r.query.q,
  (newQ) => {
    q.value = typeof newQ === 'string' ? newQ : ''
    store.search(q.value)
  },
)
useSeoMeta({
  title: 'Search',
  description: q.value
    ? `Searching ${q.value} from curated collection of Awesome347`
    : 'Search something from curated collection of Awesome347',
  ogTitle: 'Search - Awesome347',
  ogDescription: q.value
    ? `Searching ${q.value} from curated collection of Awesome347`
    : 'Search something from curated collection of Awesome347',
  ogUrl: `${meta.url}/search`,
  twitterTitle: 'Search - Awesome347',
  twitterDescription: q.value
    ? `Searching ${q.value} from curated collection of Awesome347`
    : 'Search something from curated collection of Awesome347',
})
useHead({
  link: [{ rel: 'canonical', href: `${meta.url}/search` }],
  script: [
    {
      type: 'application/ld+json',
      value: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            url: meta.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Search',
            url: `${meta.url}/search`,
          },
        ],
      }),
    },
  ],
})
defineOgImageComponent('a347', {
  title: 'Search - Awesome347',
  description: 'Search something from curated collection of Awesome347',
})
</script>

<template>
  <div class="container my-10">
    <h1 class="title">Search</h1>
    <div class="mb-8 lg:mb-16">
      <div class="relative mx-auto max-w-xl">
        <input
          class="w-full rounded-xl border border-foreground/10 bg-foreground/5 p-4 px-6 py-4 pl-12 backdrop-blur-xl focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none"
          v-model="q"
          placeholder="Search..."
          @input="update"
        />
        <div class="absolute top-2 left-3 py-2">
          <VIcon name="carbon:search" class="size-6 stroke-foreground" />
        </div>
      </div>
    </div>
    <div
      v-if="results.length"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4"
    >
      <LazyVCard v-for="item in results" :key="item.id" :item="item" />
    </div>
    <div v-else-if="q" class="text-center text-gray-400">No results found for "{{ q }}"</div>
  </div>
</template>
