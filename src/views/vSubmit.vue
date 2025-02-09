<script setup lang="ts">
import vBtn from '../components/vBtn.vue'

const openUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="container mx-auto px-16 py-8">
    <h1 class="title">Submit a Site</h1>
    <div class="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 shadow-sm backdrop-blur-xl">
      <h2 class="mb-4 text-2xl font-semibold">Submission Guidelines</h2>
      <p class="mb-6 text-gray-800 dark:text-gray-200">
        Interested in adding your project to Awesome347? Follow these guidelines:
      </p>
      <ul class="mb-6 list-inside list-disc text-gray-800 dark:text-gray-200">
        <li>Ensure your project is <b>free to use and accessible</b> for everyone.</li>
        <li>
          <b>If it's open-source</b>, make sure it's hosted on a platform that encourages contributions (e.g., GitHub).
        </li>
        <li>
          Your project should not promote
          <b>piracy or violate copyright laws</b>.
        </li>
        <li>Make sure your project is <b>respectful and inclusive</b> for users of all ages.</li>
        <li>Your project must be <b>actively maintained or in a stable state</b>.</li>
      </ul>
      <div class="flex gap-4">
        <vBtn @click="openUrl('https://spoo.me/a347?ref=Awesome347')"> Submit Your Project </vBtn>
      </div>
    </div>
  </div>
</template>
