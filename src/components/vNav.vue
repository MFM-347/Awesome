<script setup lang="ts">
import { MagnifyingGlassIcon, InformationCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <nav
    class="fixed left-0 top-0 h-full w-20 border-r border-background/10 bg-background/50 backdrop-blur-xl z-50"
  >
    <div class="flex flex-col items-center gap-6 p-4">
      <RouterLink to="/">
        <img src="/logo.svg" class="w-10 h-10" alt="Awesome347" />
      </RouterLink>
      <div class="w-full h-px bg-foreground/10"></div>
      <RouterLink
        to="/search"
        class="p-2 rounded-lg hover:bg-foreground/10 transition-colors group"
      >
        <MagnifyingGlassIcon class="size-6 stroke-primary-50" />
      </RouterLink>
      <RouterLink to="/about" class="p-2 rounded-lg hover:bg-foreground/10 transition-colors group">
        <InformationCircleIcon class="size-6 stroke-primary-50" />
      </RouterLink>
    </div>
  </nav>
</template>
