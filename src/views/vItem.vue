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
    <div
      v-if="item.icon"
      class="relative top-2 mx-auto bg-yellow-400/40 font-semibold p-4 rounded-lg shadow-lg"
    >
      <b>Note:</b> Icons here are either favicons or from icon libraries. Ensure proper permissions
      and licensing before use.
    </div>
    <div class="flex justify-center p-6">
      <div
        class="max-w-md w-full bg-card border rounded-xl shadow-lg text-card-foreground overflow-hidden"
      >
        <div class="p-6 space-y-4">
          <div class="flex items-center space-x-4">
            <div v-if="item.icon" class="w-12 h-12 p-1 rounded-md bg-zinc-200">
              <img :src="item.icon" :alt="`${item.name} Icon`" class="h-full w-full rounded-md" />
            </div>
            <h3 class="text-4xl font-bold">{{ item.name }}</h3>
          </div>
          <p class="text-xl mt-2"><b>Description:</b> {{ item.description }}</p>
          <p class="text-lg"><b>Category:</b> {{ item.category }}</p>
          <p class="text-lg"><b>Open Source:</b> {{ item.foss }}</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <span class="text-base"><b>Tags:</b>&nbsp;</span>
            <RouterLink
              class="px-3 py-1 rounded-full bg-foreground/10 text-sm ta cursor-pointer"
              v-for="tag in item?.tags"
              :key="tag"
              :to="`/search?q=${tag}`"
            >
              {{ tag }}
            </RouterLink>
          </div>
          <h4 class="text-2xl font-semibold">Links:</h4>
          <div class="flex flex-wrap gap-2">
            <button @click="openUrl(item?.url)">
              <GlobeAltIcon
                class="size-8 fill-foreground hover:fill-primary-500 dark:hover:fill-primary-400 ta"
              /><span class="sr-only"> Check it out </span>
            </button>
            <button v-if="item?.foss" @click="openUrl(item?.fossLnk)">
              <CodeBracketIcon
                class="size-8 fill-foreground hover:fill-primary-500 dark:hover:fill-primary-400 ta"
              /><span class="sr-only"> Source Code </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .max-w-md {
    max-width: 100%;
  }
}
</style>
