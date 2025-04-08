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
      'inline-flex w-auto items-center justify-center gap-1 rounded-lg p-3 text-base font-medium whitespace-nowrap ta-150 focus:ring-2 focus:ring-offset-2 focus:outline-none',
      sec
        ? 'border border-gray-500/40 bg-gray-500/15 text-gray-100 hover:border-gray-500/60 hover:bg-gray-500/35 focus:border-none focus:bg-gray-500/25 focus:ring-gray-400/70'
        : 'bg-primary-500 text-primary-100 hover:bg-primary-400 focus:ring-primary-500',
    ]"
    :aria-label="ariaLabel"
    role="button"
  >
    <LinkIcon :class="`mt-0.5 mr-1 size-4 stroke-primary-50`" />
    <span class="sr-only">{{ ariaLabel }}</span>
    <slot />
  </button>
</template>
