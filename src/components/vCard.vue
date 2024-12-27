<script setup lang="ts">
import { type Item } from "../types";
import vBtn from "./vBtn.vue";

defineProps({
  item: Object as () => Item,
});

const openUrl = (url: string | undefined) => {
  if (url) {
    window.open(url, "_blank");
  }
};
</script>

<template>
  <div
    class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col"
  >
    <div class="flex flex-col gap-y-1.5 p-6">
      <h3
        class="text-2xl font-semibold leading-none tracking-tight"
        :title="'ID: ' + item?.id"
      >
        {{ item?.name }}
      </h3>
      <p class="text-base text-muted-foreground">{{ item?.category }}</p>
    </div>
    <div class="p-6 pt-0 flex-grow">
      <div class="flex flex-wrap gap-2 mb-4">
        <div
          class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold bg-secondary dark:bg-primary text-secondary-foreground"
          v-for="tag in item?.tags"
          :key="tag"
        >
          {{ tag }}
        </div>
      </div>
      <vBtn @click="openUrl(item?.url)"> Visit </vBtn>
    </div>
  </div>
</template>
