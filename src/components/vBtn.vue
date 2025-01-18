<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 bg-primary-600 text-primary-50 shadow hover:bg-primary-700 px-4 py-3 w-auto tc"
  >
    <LinkIcon class="size-4 stroke-primary-50 mx-1" />
    <slot />
  </button>
</template>
