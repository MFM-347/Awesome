<script setup lang="ts">
import { MagnifyingGlassIcon, InformationCircleIcon, DocumentCheckIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-50 h-16 w-full border-0 border-background/10 bg-background/50 backdrop-blur-xl md:h-full md:w-20 md:border-r"
  >
    <div class="flex flex-row items-center gap-4 px-3 py-2 sm:gap-6 sm:p-4 md:flex-col">
      <RouterLink to="/">
        <img src="/logo.svg" class="size-12 ta-200 hover:scale-110" alt="Awesome347" />
      </RouterLink>
      <div class="invisible h-px w-full bg-foreground/10 md:visible"></div>
      <RouterLink to="/search" class="group rounded-lg p-2 ta-75 hover:bg-foreground/10">
        <MagnifyingGlassIcon class="size-6 stroke-primary-50" />
      </RouterLink>
      <RouterLink to="/submit" class="group rounded-lg p-2 ta-75 hover:bg-foreground/10">
        <DocumentCheckIcon class="size-6 stroke-primary-50" />
      </RouterLink>
      <RouterLink to="/about" class="group rounded-lg p-2 ta-75 hover:bg-foreground/10">
        <InformationCircleIcon class="size-6 stroke-primary-50" />
      </RouterLink>
    </div>
  </nav>
</template>
