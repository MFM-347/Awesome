<script setup lang="ts">
import { LinkIcon } from '@heroicons/vue/24/solid'

defineProps({
  sec: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: 'Link Button',
  },
})
</script>

<template>
  <button
    :class="[
      'inline-flex w-auto items-center justify-center gap-1 rounded-lg px-4 py-3 font-medium whitespace-nowrap transition-all duration-150 hover:rounded-md focus:ring-2 focus:ring-offset-2 focus:outline-none',
      sec
        ? 'bg-gray-500 text-gray-100 hover:bg-gray-400 focus:ring-gray-500'
        : 'bg-primary-500 text-primary-100 hover:bg-primary-400 focus:ring-primary-500',
    ]"
    :aria-label="ariaLabel"
  >
    <LinkIcon :class="`mt-0.5 mr-1 size-4 stroke-primary-50`" />
    <slot />
  </button>
</template>
