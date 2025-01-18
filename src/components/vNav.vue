<template>
  <header
    class="sticky top-0 z-50 py-2 px-4 bg-background-ultra border-b shadow-sm backdrop-blur-sm"
  >
    <nav
      class="flex flex-col sm:flex-row px-2 items-center max-w-7xl mx-auto"
      aria-label="Main navigation"
    >
      <RouterLink
        to="/"
        class="flex gap-1 items-start sm:items-center transition-transform hover:scale-105"
        aria-label="Home"
      >
        <img class="sm:w-8 w-12" src="/logo.svg" alt="Awesome347 Logo" />
        <span class="text-xl sm:text-3xl font-bold">347</span>
      </RouterLink>
      <ul class="flex gap-3 sm:gap-6 sm:ml-auto text-base sm:text-xl capitalize" role="menubar">
        <li role="none">
          <RouterLink
            to="/"
            class="transition-colors hover:text-primary-500 focus:text-primary-500 rounded-md px-2 py-1"
            role="menuitem"
            :class="{ 'text-primary-500': route.path === '/' }"
          >
            Home
          </RouterLink>
        </li>
        <li role="none">
          <RouterLink
            to="/search"
            class="transition-colors hover:text-primary-500 focus:text-primary-500 rounded-md px-2 py-1"
            role="menuitem"
            :class="{ 'text-primary-500': route.path === '/search' }"
          >
            Browse
          </RouterLink>
        </li>
        <li role="none">
          <RouterLink
            to="/submit"
            class="transition-colors hover:text-primary-500 focus:text-primary-500 rounded-md px-2 py-1"
            role="menuitem"
            :class="{ 'text-primary-500': route.path === '/submit' }"
          >
            Submit
          </RouterLink>
        </li>
        <li role="none">
          <RouterLink
            to="/about"
            class="transition-colors hover:text-primary-500 focus:text-primary-500 rounded-md px-2 py-1"
            role="menuitem"
            :class="{ 'text-primary-500': route.path === '/about' }"
          >
            About
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
