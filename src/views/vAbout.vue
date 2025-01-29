<template>
  <div class="container mx-auto py-8 px-16">
    <h1 class="title">About</h1>
    <div
      class="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-xl shadow-sm"
    >
      <h2 class="text-2xl font-semibold mb-4">Awesome347</h2>
      <p class="text-gray-800 dark:text-gray-200 mb-6">
        Awesome347 is your go-to platform for discovering handpicked tools, resources, and guides
        for developers and designers. From productivity boosters to stunning UI/UX design tools,
        find everything you need to elevate your work.
      </p>
      <h3 class="text-xl font-semibold mb-2">Key Features</h3>
      <ul class="list-disc list-inside text-gray-800 dark:text-gray-200 mb-6">
        <li>Modern and intuitive user interface</li>
        <li>Responsive design for all devices</li>
        <li>Dark mode for eye comfort</li>
        <li>Curated, quality-assured resources</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Get Started</h3>
      <div class="flex gap-4">
        <vBtn @click="openUrl('https://github.com/MFM-347/Awesome/')"> Source Code </vBtn>
      </div>
      <p class="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Open-source project licensed under the
        <a
          href="https://github.com/MFM-347/Awesome/blob/main/LICENSE"
          class="text-primary-500 hover:underline"
          target="_blank"
        >
          MIT License </a
        >.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import vBtn from '../components/vBtn.vue'

const openUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>
