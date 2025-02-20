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
  <div class="min-h-screen overflow-hidden bg-background text-foreground">
    <div id="bg">
      <div class="pointer-events-none fixed inset-0 bg-gradient-to-br from-purple-900/20 to-primary-900/20"></div>
      <div class="fixed top-1/4 -left-1/4 h-96 w-96 rounded-full bg-primary-500/30 blur-3xl"></div>
      <div class="fixed top-1/2 -right-1/4 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"></div>
    </div>
    <vNav />
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm">
      <div class="flex flex-col items-center gap-4">
        <div
          class="h-16 w-16 animate-spin rounded-full border-4 border-primary-400 border-t-transparent shadow-lg"
        ></div>
        <p class="animate-pulse text-primary-600">Loading...</p>
      </div>
    </div>
    <main id="top">
      <div class="container mx-auto max-w-7xl px-4 py-8 md:py-8 md:pl-16">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in" @before-enter="isLoading = true" @after-enter="isLoading = false">
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
