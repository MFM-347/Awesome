<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Analytics } from '@vercel/analytics/vue'

useSeoMeta({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  author: 'Farhan Madni',
  robots: 'index,follow,max-image-preview:large',
  ogLocale: 'en_US',
  ogSiteName: 'Awesome347',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterCreator: '@mfm347',
  themeColor: '#1f59ff',
  googleSiteVerification: '9C3mmoooLN2NLh5PUEVgr98hTKYWPIarhqp7Efdfwuo',
})
useHead({
  titleTemplate: '%s - Awesome347',
  htmlAttrs: {
    lang: 'en',
    class: 'dark',
  },
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo-light.svg' }],
})

const isProd = process.env.NODE_ENV === 'production'
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div>
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          class="h-16 w-16 animate-spin rounded-full border-4 border-primary-400 border-t-transparent shadow-lg"
        ></div>
        <p class="animate-pulse text-primary-500">Loading Awesome Things...</p>
      </div>
    </div>
    <NuxtLayout>
      <NuxtPage v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          @before-enter="isLoading = true"
          @after-enter="isLoading = false"
        >
          <component :is="Component" />
        </transition>
      </NuxtPage>
    </NuxtLayout>
    <Analytics v-if="isProd" />
  </div>
</template>

<style>
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.5s ease;
}
.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}
</style>
