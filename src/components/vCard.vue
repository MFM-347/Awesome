<script setup lang="ts">
import { type Item } from '../types';
import vBtn from './vBtn.vue';

defineProps({
  item: Object as () => Item,
});

const openUrl = (url: string | undefined) => {
  if (url) {
    window.open(url, '_blank');
  }
};
</script>

<template>
  <div
    class="rounded-xl border bg-card hover:bg-card/60 hover:scale-[.975] ta text-card-foreground shadow-sm flex flex-col"
  >
    <div class="flex flex-col gap-y-1.5 p-6">
      <RouterLink
        :to="`/item/${item?.id}`"
        class="text-2xl font-semibold leading-none tracking-tight"
        :title="'ID: ' + item?.id"
      >
        {{ item?.name }}
      </RouterLink>
      <p class="text-base">{{ item?.category }}</p>
    </div>
    <div class="p-4 pt-0 flex-grow">
      <div class="flex flex-wrap gap-2 mb-4">
        <RouterLink
          class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold bg-secondary dark:bg-secondary text-secondary-foreground cursor-pointer"
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
