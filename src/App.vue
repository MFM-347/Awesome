<script setup lang="ts">
import { ref, onMounted } from 'vue';
import vNav from './components/vNav.vue';
import vFoot from './components/vFoot.vue';
import vFloat from './components/vFloat.vue';
import { Analytics } from '@vercel/analytics/vue';

const isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <vNav />
    <a
      href="#top"
      class="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-md"
    >
      Skip to main content
    </a>
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          class="animate-spin rounded-full h-16 w-16 border-4 border-primary-400 border-t-transparent shadow-lg"
        ></div>
        <p class="text-primary-600 animate-pulse">Loading...</p>
      </div>
    </div>
    <main id="top" class="flex-grow">
      <div class="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Transition
          name="page"
          mode="out-in"
          @before-enter="isLoading = true"
          @after-enter="isLoading = false"
        >
          <RouterView />
        </Transition>
      </div>
    </main>
    <vFoot class="relative bottom-0 w-full" />
    <vFloat class="fixed bottom-4 right-4" />
    <Analytics />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
*:focus-visible {
  @apply outline-dashed outline-offset-2 outline-primary-500;
}
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s ease;
}
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}
@media (max-width: 640px) {
  html {
    font-size: 14px;
  }
}
.dark {
  --tw-bg-opacity: 0.95;
}
html {
  scroll-behavior: smooth;
}
:focus:not(:focus-visible) {
  outline: none;
}
</style>
