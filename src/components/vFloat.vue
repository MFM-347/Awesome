<script setup lang="ts">
import { ref, onMounted } from "vue";

const text = ref("Dark");
const darkMode = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
  text.value = isDark ? "Light" : "Dark";
};

onMounted(() => {
  const isDarkModeEnabled = localStorage.getItem("dark-mode") === "enabled";
  if (isDarkModeEnabled) {
    document.documentElement.classList.add("dark");
    text.value = "Light";
  } else {
    text.value = "Dark";
  }
});
</script>

<template>
  <div
    class="rounded-full p-1 gap-1 bg-zinc-50 dark:bg-zinc-950 border shadow-sm shadow-black dark:shadow-white"
  >
    <div class="grid grid-cols-2">
      <a href="#top" class="btn rounded-l-full">Top</a>
      <button class="btn rounded-r-full" @click="darkMode">{{ text }}</button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  @apply inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium outline-none hover:bg-zinc-200 hover:dark:bg-zinc-800 whitespace-nowrap;
}
</style>
