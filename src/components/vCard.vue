<script setup lang="ts">
import { type Item } from '../types'
import vBtn from './vBtn.vue'

defineProps<{ item: Item }>()

const openUrl = (url: string | undefined) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div
    class="group relative flex flex-col rounded-xl bg-foreground/5 p-1 shadow-xs backdrop-blur-lg ta-200 hover:scale-[.98] hover:bg-foreground/15 hover:backdrop-blur-xl"
  >
    <div class="flex flex-col gap-y-1.5 p-6">
      <RouterLink
        :to="`/i/${item?.id}`"
        class="text-2xl leading-none font-bold tracking-tight"
        :title="'ID: ' + item?.id"
      >
        {{ item?.name }}
      </RouterLink>
      <p class="text-base">{{ item?.category }}</p>
    </div>
    <div class="flex-grow p-4 pt-0">
      <div class="mb-4 flex flex-wrap gap-2">
        <RouterLink
          class="cursor-pointer rounded-full bg-foreground/10 px-3 py-1 text-sm ta-200 hover:bg-foreground/15"
          v-for="tag in item?.tags"
          :key="tag"
          :to="`/search?q=${tag}`"
        >
          {{ tag }}
        </RouterLink>
      </div>
      <vBtn @click="openUrl(`${item?.link}?ref=Awesome347`)"> Visit </vBtn>
    </div>
  </div>
</template>
