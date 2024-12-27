<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import vNav from "./components/vNav.vue";
import vMenu from "./components/vMenu.vue";

const isDarkMode = ref(document.documentElement.classList.contains("dark"));
onMounted(() => {
  const observer = new MutationObserver(() => {
    isDarkMode.value = document.documentElement.classList.contains("dark");
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  onUnmounted(() => {
    observer.disconnect();
  });
});
const icon = computed(() =>
  isDarkMode.value ? "/logo-dark.svg" : "/logo-light.svg",
);
</script>

<template>
  <vNav />
  <div class="grid place-items-center h-full w-full my-8">
    <img :src="icon" id="top" alt="Logo" width="250px" />
  </div>
  <main class="container mx-auto px-4 py-8">
    <RouterView />
  </main>
  <vMenu class="fixed bottom-4 right-4" />
</template>
