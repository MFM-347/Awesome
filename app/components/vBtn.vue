<script setup lang="ts">
import { computed } from 'vue'
import { LinkIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  sec: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    :class="[
      'inline-flex w-auto items-center justify-center gap-1 rounded-lg px-4 py-3 font-medium whitespace-nowrap transition-all duration-150 hover:rounded-md',
      sec
        ? 'bg-gray-500 text-gray-100 hover:bg-gray-400'
        : 'bg-blue-500 text-blue-100 hover:bg-blue-400',
    ]"
  >
    <LinkIcon :class="`mt-0.5 mr-1 size-4 stroke-gray-50`" />
    <slot />
  </button>
</template>
