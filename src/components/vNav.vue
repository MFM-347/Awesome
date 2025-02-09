<script setup lang="ts">
import { MagnifyingGlassIcon, InformationCircleIcon, DocumentCheckIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <nav class="fixed top-0 left-0 z-50 h-full w-20 border-r border-background/10 bg-background/50 backdrop-blur-xl">
    <div class="flex flex-col items-center gap-6 p-4">
      <RouterLink to="/">
        <img src="/logo.svg" class="h-10 w-10" alt="Awesome347" />
      </RouterLink>
      <div class="h-px w-full bg-foreground/10"></div>
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
