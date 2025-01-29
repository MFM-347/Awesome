<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-1 whitespace-nowrap px-4 py-3 w-auto rounded-xl bg-blue-500 hover:bg-blue-400 transition-colors text-gray-100 font-medium"
  >
    <LinkIcon class="size-4 stroke-primary-50 mx-1" />
    <slot />
  </button>
</template>
