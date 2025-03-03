<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <section class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="mb-2 text-9xl font-bold">{{ error?.statusCode }}</h1>
    <p class="mb-10 text-xl sm:text-3xl">{{ error?.statusMessage }}</p>
    <RouterLink
      to="/"
      class="cursor-pointer rounded-xl bg-primary-500/70 px-4 py-2 text-lg text-foreground ta-200 hover:bg-primary-400/80"
    >
      Go Home
    </RouterLink>
  </section>
</template>
