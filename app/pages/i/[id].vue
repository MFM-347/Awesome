<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAwesomeStore } from '@/stores'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from '#imports'
import { meta } from '@/data'

const store = useAwesomeStore()
const { items } = storeToRefs(store)
const route = useRoute()
const router = useRouter()
const item = computed(() => {
  const id = Number(route.params.id)
  return items.value.find((item) => item.id === id)
})
onMounted(() => {
  if (!item.value) {
    router.push('/404')
  }
})
useSeoMeta({
  title: `${item.value?.id}. ${item.value?.name}`,
  description: `Learn about ${item.value?.name} at Awesome347, a curated collection of items.`,
  ogTitle: `${item.value?.id}. ${item.value?.name} - Awesome347`,
  ogDescription: `Learn more about ${item.value?.name} at Awesome347, a curated collection of items.`,
  ogUrl: `${meta.url}/submit`,
  ogImage: item.value?.icon,
  ogImageAlt: `${item.value?.name} Logo`,
  twitterImage: item.value?.icon,
  twitterCard: 'summary',
  twitterImageAlt: `${item.value?.name} Logo`,
  twitterTitle: `${item.value?.id}. ${item.value?.name} - Awesome347`,
  twitterDescription: `Learn about ${item.value?.name} at Awesome347, a curated collection of items.`,
})
useHead({
  link: [{ rel: 'canonical', href: `${meta.url}/i/${item.value?.id}` }],
  script: [
    {
      type: 'application/ld+json',
      value: JSON.stringify({
        type: 'WebPage',
        title: `${item.value?.id}. ${item.value?.name} - Awesome347`,
        description: `Learn about ${item.value?.name} at Awesome347, a curated collection of items.`,
        url: `${meta.url}/i/${item.value?.id}`,
        publisher: {
          '@type': 'Person',
          name: 'Farhan Madni',
          url: 'https://xyzdev.vercel.app/',
        },
        sameAs: [
          'https://github.com/mfm-347',
          'https://dev.to/mfm-347',
          'https://codepen.io/mfm-347/',
          'https://twitter.com/@mfm347',
          'https://xyzdev.vercel.app/',
        ],
      }),
    },
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
            name: item.value?.name,
            url: `${meta.url}/i/${item.value?.id}`,
          },
        ],
      }),
    },
  ],
})
defineOgImage({
  component: 'a347',
  props: {
    title: `${item.value?.id}. ${item.value?.name} - Awesome347`,
    description: `Learn more about ${item.value?.name} at Awesome347, a curated collection of items.`,
  },
})
</script>

<template>
  <div v-if="item" class="flex flex-col">
    <div class="relative top-2 mx-auto rounded-lg bg-yellow-400/40 p-4 font-semibold shadow-lg">
      <b>Note:</b> Icons here are either favicons or from icon libraries. Ensure proper permissions
      and licensing before use.
    </div>
    <div class="flex justify-center p-6">
      <div
        class="w-full max-w-xs overflow-hidden rounded-xl border bg-foreground/5 text-foreground shadow-lg ta-150 hover:border-foreground/25 hover:bg-foreground/7.5 max-sm:w-[100%] sm:max-w-md"
      >
        <div class="space-y-4 p-6">
          <div class="flex items-center space-x-4">
            <div class="h-12 w-12 rounded-md bg-zinc-200 p-1">
              <img
                v-if="item.icon"
                :src="item.icon"
                loading="lazy"
                :alt="`${item.name} Icon`"
                class="size-full rounded-md"
              />
            </div>
            <h1 class="text-3xl font-bold sm:text-4xl">{{ item.name }}</h1>
          </div>
          <p class="mt-2 text-lg sm:text-xl"><b>Description:</b> {{ item.description }}</p>
          <p class="text-md sm:text-lg"><b>Type:</b> {{ item.type }}</p>
          <p class="text-md sm:text-lg"><b>Open Source:</b> {{ item.foss }}</p>
          <div class="mt-2 flex flex-wrap gap-2">
            <span class="text-base"><b>Tags:</b>&nbsp;</span>
            <RouterLink
              class="cursor-pointer rounded-full bg-foreground/10 px-3 py-1 text-sm ta-100 hover:scale-105 hover:bg-foreground/20"
              v-for="tag in item?.tags"
              :key="tag"
              :to="`/search?q=${tag}`"
            >
              {{ tag }}
            </RouterLink>
          </div>
          <h4 class="text-2xl font-semibold">Links:</h4>
          <div class="flex flex-wrap gap-2">
            <a
              :title="`Check out ${item.name}`"
              :aria-label="`Check out ${item.name}`"
              rel="nofollow noopener"
              :href="`${item?.url}?ref=a347.vercel.app&utm_source=a347.vercel.app`"
            >
              <VIcon
                name="carbon:earth-filled"
                class="size-8 text-foreground ta-150 hover:text-primary-500 dark:hover:text-primary-400"
              /><span class="sr-only"> Check it out </span>
            </a>
            <a
              :title="`Source Code of ${item.name}`"
              :aria-label="`Source Code of ${item.name}`"
              rel="nofollow noopener"
              v-if="item?.foss"
              :href="item?.osLink"
            >
              <VIcon
                name="carbon:logo-github"
                class="size-8 text-foreground ta-150 hover:text-primary-500 dark:hover:text-primary-400"
              /><span class="sr-only"> Source Code </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
