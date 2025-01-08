<template>
  <div class="container mx-auto p-8">
    <h1 class="title">Submit a Site</h1>
    <div class="p-6 border rounded-lg bg-white dark:bg-zinc-900">
      <h2 class="text-2xl font-semibold mb-4">Submission Guidelines</h2>
      <p class="text-gray-800 dark:text-gray-200 mb-6">
        Interested in adding your project to Awesome347? Follow these
        guidelines:
      </p>
      <ul class="list-disc list-inside text-gray-800 dark:text-gray-200 mb-6">
        <li>
          Ensure your project is <b>free to use and accessible</b> for everyone.
        </li>
        <li>
          <b>If it's open-source</b>, make sure it's hosted on a platform that
          encourages contributions (e.g., GitHub).
        </li>
        <li>
          Your project should not promote
          <b>piracy or violate copyright laws</b>.
        </li>
        <li>
          Make sure your project is <b>respectful and inclusive</b> for users of
          all ages.
        </li>
        <li>
          Your project must be <b>actively maintained or in a stable state</b>.
        </li>
      </ul>
      <div class="flex gap-4">
        <vBtn @click="openUrl('https://forms.gle/fZx156goymyvG8vq9')">
          Submit Your Project
        </vBtn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import vBtn from "../components/vBtn.vue";

const openUrl = (url: string) => {
  window.open(url, "_blank");
};
</script>
