<script setup>
import NavBar from '@/components/navBar.vue'
import { Analytics } from '@vercel/analytics/vue'
import { ref, computed, onMounted } from 'vue'

const isDarkMode = ref(document.documentElement.classList.contains('dark'))
onMounted(() => {
  const observer = new MutationObserver(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark')
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  onUnmounted(() => observer.disconnect())
})

const icon = computed(() => (isDarkMode.value ? '/logo-dark.svg' : '/logo-light.svg'))
</script>

<template>
  <div>
    <NavBar />
    <div class="grid place-items-center h-full w-full my-8">
      <img :src="icon" alt="Logo" width="250px" />
    </div>
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
    <Analytics />
  </div>
</template>
