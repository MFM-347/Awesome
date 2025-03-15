<script setup lang="ts">
import { type Item } from '@/types'

defineProps<{ item: Item }>()
</script>

<template>
  <div
    class="group relative flex flex-col rounded-xl bg-foreground/5 p-1 shadow-xs backdrop-blur-lg ta-150 hover:scale-[.98] hover:border-1 hover:border-foreground/25 hover:bg-foreground/10 hover:backdrop-blur-xl"
  >
    <div class="flex flex-col gap-y-2 p-6">
      <h2
        :to="`/i/${item?.id}`"
        class="text-2xl leading-none font-bold tracking-tight"
        :title="'ID: ' + item?.id"
      >
        {{ item?.name }}
      </h2>
      <p class="text-base">{{ item?.type }}</p>
    </div>
    <div class="flex-grow p-4 pt-0">
      <div class="mb-4 flex flex-wrap gap-2">
        <NuxtLink
          class="cursor-pointer rounded-full bg-foreground/10 px-3 py-1 text-sm ta-150 hover:bg-foreground/15"
          v-for="tag in item?.tags"
          :key="tag"
          :to="`/search?q=${tag}`"
        >
          {{ tag }}
        </NuxtLink>
      </div>
      <div class="flex flex-row gap-x-2">
        <NuxtLink role="link" rel="nofollow noopener" :to="`/i/${item?.id}`">
          <vBtn :ariaLabel="`Learn more about ${item?.name}`"> Learn more </vBtn>
        </NuxtLink>
        <a
          role="link"
          rel="nofollow noopener"
          :href="`${item?.url}?ref=a347.vercel.app&utm_source=a347.vercel.app`"
        >
          <vBtn :ariaLabel="`Check out ${item?.name}`" sec> Visit </vBtn>
        </a>
      </div>
    </div>
  </div>
</template>
