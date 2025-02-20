<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAwesomeStore } from '../stores'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/vue/24/solid'

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

const openUrl = (url: string | undefined) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div v-if="item" class="flex flex-col">
    <div class="relative top-2 mx-auto rounded-lg bg-yellow-400/40 p-4 font-semibold shadow-lg">
      <b>Note:</b> Icons here are either favicons or from icon libraries. Ensure proper permissions and licensing before
      use.
    </div>
    <div class="flex justify-center p-6">
      <div
        class="w-full max-w-md overflow-hidden rounded-xl border bg-foreground/5 text-foreground shadow-lg max-sm:w-[100%]"
      >
        <div class="space-y-4 p-6">
          <div class="flex items-center space-x-4">
            <div class="h-12 w-12 rounded-md bg-zinc-200 p-1">
              <img v-if="item.icon" :src="item.icon" :alt="`${item.name} Icon`" class="h-full w-full rounded-md" />
              <img v-else src="/ph.svg" alt="Placeholder Icon" class="h-full w-full rounded-md" />
            </div>
            <h3 class="text-4xl font-bold">{{ item.name }}</h3>
          </div>
          <p class="mt-2 text-xl"><b>Description:</b> {{ item.description }}</p>
          <p class="text-lg"><b>Type:</b> {{ item.type }}</p>
          <p class="text-lg"><b>Open Source:</b> {{ item.foss }}</p>
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
            <button @click="openUrl(`${item?.url}?ref=Awesome347`)">
              <GlobeAltIcon
                class="size-8 fill-foreground ta-150 hover:fill-primary-500 dark:hover:fill-primary-400"
              /><span class="sr-only"> Check it out </span>
            </button>
            <button v-if="item?.foss" @click="openUrl(`${item?.link}?ref=Awesome347`)">
              <CodeBracketIcon
                class="size-8 fill-foreground ta-150 hover:fill-primary-500 dark:hover:fill-primary-400"
              /><span class="sr-only"> Source Code </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
