<template>
  <div>
    <NavBar />
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import NavBar from '@/components/navBar.vue'
</script>
