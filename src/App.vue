<script setup lang="ts">
import { ref, onMounted } from 'vue'
import vNav from './components/vNav.vue'
import vFoot from './components/vFoot.vue'
import { Analytics } from '@vercel/analytics/vue'

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground overflow-hidden">
    <div id="bg">
      <div
        class="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-primary-900/20 pointer-events-none"
      ></div>
      <div class="fixed top-1/4 -left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"></div>
      <div class="fixed top-1/2 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
    </div>
    <vNav />
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          class="animate-spin rounded-full h-16 w-16 border-4 border-primary-400 border-t-transparent shadow-lg"
        ></div>
        <p class="text-primary-600 animate-pulse">Loading...</p>
      </div>
    </div>
    <main id="top">
      <div class="container mx-auto px-4 pl-16 py-8 md:py-12 max-w-7xl">
        <router-view v-slot="{ Component }">
          <transition
            name="page"
            mode="out-in"
            @before-enter="isLoading = true"
            @after-enter="isLoading = false"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
    <vFoot />
  </div>
  <Analytics />
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
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s ease;
}
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}
</style>
