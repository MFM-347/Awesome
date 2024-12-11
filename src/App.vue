<template>
  <div :class="{ dark: isDarkMode }">
    <NavBar />
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

onMounted(() => {
  const theme = localStorage.getItem('theme')
  isDarkMode.value = theme === 'dark'
})
</script>
