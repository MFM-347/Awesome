<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import vNav from "./components/vNav.vue";
import vFoot from "./components/vFoot.vue";
import vFloat from "./components/vFloat.vue";
import { Analytics } from "@vercel/analytics/vue";

const isDarkMode = ref(false);
onMounted(() => {
  const isDarkModeEnabled = localStorage.getItem("dark-mode") === "enabled";
  isDarkMode.value = isDarkModeEnabled;
  document.documentElement.classList.toggle("dark", isDarkMode.value);

  const observer = new MutationObserver(() => {
    isDarkMode.value = document.documentElement.classList.contains("dark");
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  onUnmounted(() => observer.disconnect());
});

const mode = computed(() => (isDarkMode.value ? "dark" : "light"));
</script>

<template>
  <vNav />
  <div id="top"></div>
  <div class="grid place-items-center h-full w-full my-4 md:my-8">
    <img :src="`/logo-${mode}.svg`" alt="Awesome347 Logo" width="200px" />
  </div>
  <main class="container mx-auto px-4 py-6 md:py-8">
    <RouterView />
  </main>
  <vFoot class="relative bottom-0 w-full" />
  <vFloat class="fixed bottom-4 right-4" />
  <Analytics />
</template>
