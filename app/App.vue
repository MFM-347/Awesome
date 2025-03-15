<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Analytics } from '@vercel/analytics/vue'

const isProd = process.env.NODE_ENV === 'production'
useSeoMeta({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  author: 'Farhan Madni',
  robots: 'index,follow,max-image-preview:large',
  ogLocale: 'en_US',
  ogType: 'website',
  ogImage: '/og-image.webp',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.webp',
  twitterCreator: '@mfm347',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppTitle: 'Awesome347',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  themeColor: '#0063ff',
  googleSiteVerification: '9C3mmoooLN2NLh5PUEVgr98hTKYWPIarhqp7Efdfwuo',
})
useHead({
  titleTemplate: '%s - Awesome347',
  htmlAttrs: {
    lang: 'en',
  },
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo-light.svg' }],
})

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-background text-foreground">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          class="h-16 w-16 animate-spin rounded-full border-4 border-primary-400 border-t-transparent shadow-lg"
        ></div>
        <p class="animate-pulse text-primary-600">Loading Awesome Things...</p>
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
