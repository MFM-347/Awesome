<script setup lang="ts">
import vBtn from '../components/vBtn.vue'

const openUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="container mx-auto px-16 py-8">
    <h1 class="title">About</h1>
    <div class="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 shadow-sm backdrop-blur-xl">
      <h2 class="mb-4 text-2xl font-semibold">Awesome347</h2>
      <p class="mb-6 text-gray-800 dark:text-gray-200">
        Awesome347 is your go-to platform for discovering handpicked tools, resources, and guides for developers and
        designers. From productivity boosters to stunning UI/UX design tools, find everything you need to elevate your
        work.
      </p>
      <h3 class="mb-2 text-xl font-semibold">Key Features</h3>
      <ul class="mb-6 list-inside list-disc text-gray-800 dark:text-gray-200">
        <li>Modern and intuitive user interface</li>
        <li>Responsive design for all devices</li>
        <li>Dark mode for eye comfort</li>
        <li>Curated, quality-assured resources</li>
      </ul>
      <h3 class="mb-2 text-xl font-semibold">Get Started</h3>
      <div class="flex gap-4">
        <vBtn @click="openUrl('https://github.com/MFM-347/Awesome/')"> Source Code </vBtn>
      </div>
      <p class="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Open-source project licensed under the
        <a
          href="https://github.com/MFM-347/Awesome/blob/main/LICENSE"
          class="text-primary-400 hover:underline"
          target="_blank"
        >
          MIT License</a
        >.
      </p>
    </div>
  </div>
</template>
