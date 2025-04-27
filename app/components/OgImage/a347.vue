<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  id?: number
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center p-8 text-center font-sans text-white/90"
    :style="{
      backgroundImage: `linear-gradient(to left, #09090b, #52525c)`,
    }"
  >
    <div class="w-full max-w-3xl rounded-3xl p-12">
      <h1 class="mb-6 text-5xl leading-tight font-extrabold tracking-tight">
        {{ title }}
      </h1>
      <p v-if="description" class="mt-4 text-3xl font-semibold text-white/80">
        {{ description }}
      </p>
    </div>
    <div class="mt-2 flex w-full flex-row items-center justify-center gap-4 text-left">
      <img src="/logo-light.svg" height="40" width="40" />
      <p style="font-size: 35px" class="font-semibold">Awesome347</p>
    </div>
  </div>
</template>
