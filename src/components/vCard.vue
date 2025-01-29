<script setup lang="ts">
import { type Item } from '../types'
import vBtn from './vBtn.vue'

defineProps({
  item: Object as () => Item,
})

const openUrl = (url: string | undefined) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<template>
  <div
    class="group relative rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-xl hover:bg-foreground/10 ta hover:scale-[.99] ta shadow-sm flex flex-col"
  >
    <div class="flex flex-col gap-y-1.5 p-6">
      <RouterLink
        :to="`/item/${item?.id}`"
        class="text-2xl font-bold leading-none tracking-tight"
        :title="'ID: ' + item?.id"
      >
        {{ item?.name }}
      </RouterLink>
      <p class="text-base">{{ item?.category }}</p>
    </div>
    <div class="p-4 pt-0 flex-grow">
      <div class="flex flex-wrap gap-2 mb-4">
        <RouterLink
          class="px-3 py-1 rounded-full bg-foreground/10 text-sm ta cursor-pointer"
          v-for="tag in item?.tags"
          :key="tag"
          :to="`/search?q=${tag}`"
        >
          {{ tag }}
        </RouterLink>
      </div>
      <vBtn @click="openUrl(item?.url)"> Visit </vBtn>
    </div>
  </div>
</template>
