<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <button
    class="inline-flex w-auto items-center justify-center gap-1 rounded-xl bg-blue-500 px-4 py-3 font-medium whitespace-nowrap text-gray-100 ta-150 hover:bg-blue-400"
  >
    <LinkIcon class="mx-1 size-4 stroke-primary-50" />
    <slot />
  </button>
</template>
