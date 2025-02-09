<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAwesomeStore } from '../stores'
import vCard from '@/components/vCard.vue'

const store = useAwesomeStore()
const { items } = storeToRefs(store)
</script>

<template>
  <div>
    <main class="ml-20">
      <section class="relative flex min-h-screen items-center justify-center p-8">
        <div class="mx-auto max-w-4xl space-y-8 text-center">
          <h1 class="text-5xl font-bold md:text-7xl">
            <span class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              Unlock Your Potential
            </span>
          </h1>
          <p class="text-xl text-white/70">Explore cutting-edge tools and resources for the modern web.</p>
        </div>
      </section>
    </main>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-2">
      <TransitionGroup name="projects" appear>
        <vCard v-for="item in items" :key="item.id" :item="item" />
        <div
          :key="'submit'"
          class="group relative flex scale-[.99] flex-col items-center justify-center gap-y-3 rounded-xl border border-foreground/10 bg-foreground/5 shadow-sm backdrop-blur-xl ta-300 hover:scale-[1.01] hover:bg-foreground/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="size-12 fill-none stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <RouterLink to="/submit" class="font-bold hover:underline"> Submit your Project </RouterLink>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.projects-move,
.projects-enter-active,
.projects-leave-active {
  transition: all 0.5s ease;
}

.projects-enter-from,
.projects-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.projects-leave-active {
  position: absolute;
}
</style>
