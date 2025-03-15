<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  InformationCircleIcon,
  DocumentCheckIcon,
} from '@heroicons/vue/24/outline'
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-50 h-16 w-full border-0 border-background/10 bg-background/50 backdrop-blur-xl md:h-full md:w-20 md:border-r"
  >
    <div class="flex flex-row items-center gap-4 px-3 py-2 sm:gap-6 sm:p-4 md:flex-col">
      <NuxtLink aria-label="Home" to="/">
        <img
          src="/logo.svg"
          loading="lazy"
          height="48"
          width="48"
          class="ta-150 hover:scale-110"
          alt="Awesome347"
        />
      </NuxtLink>
      <div class="invisible h-px w-full bg-foreground/10 md:visible"></div>
      <NuxtLink
        to="/search"
        aria-label="Search"
        class="rounded-lg p-2 ta-100 hover:bg-foreground/10 focus:bg-foreground/5"
      >
        <MagnifyingGlassIcon class="size-6 stroke-primary-50" />
      </NuxtLink>
      <NuxtLink
        to="/submit"
        aria-label="Submit"
        class="rounded-lg p-2 ta-100 hover:bg-foreground/10 focus:bg-foreground/5"
      >
        <DocumentCheckIcon class="size-6 stroke-primary-50" />
      </NuxtLink>
      <NuxtLink
        to="/about"
        aria-label="About"
        class="rounded-lg p-2 ta-100 hover:bg-foreground/10 focus:bg-foreground/5"
      >
        <InformationCircleIcon class="size-6 stroke-primary-50" />
      </NuxtLink>
    </div>
  </nav>
</template>
