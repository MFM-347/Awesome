<template>
  <div class="container">
    <h1 class="title">About</h1>
    <div class="p-8 border">
      <h2 class="text-3xl font-semibold">Project Information</h2>
      <p class="my-4">
        Awesome List is a curated collection of awesome resources, tools, and
        projects across various categories.
      </p>
      <h2 class="text-2xl font-semibold mb-2">Features:</h2>
      <ul class="list-disc list-inside mb-4">
        <li>Browse awesome resources</li>
        <li>Search functionality using Fuse.js</li>
        <li>Responsive design</li>
        <li>Dark mode support</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-2">Links:</h2>
      <div class="lnks">
        <vBtn
          class="w-auto"
          @click="openUrl('https://github.com/MFM-347/Awesome/')"
        >
          Source Code
        </vBtn>
        <vBtn class="w-auto" @click="openUrl('https://github.com/MFM-347/')">
          Author
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

<style scoped>
.lnks {
  @apply flex flex-row gap-4;
}
</style>
