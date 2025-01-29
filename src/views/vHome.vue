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
      <section class="relative min-h-screen flex items-center justify-center p-8">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h1 class="text-5xl md:text-7xl font-bold">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-400"
            >
              Unlock Your Potential
            </span>
          </h1>
          <p class="text-xl text-white/70">
            Explore cutting-edge tools and resources for the modern web.
          </p>
        </div>
      </section>
    </main>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      <TransitionGroup name="projects" appear>
        <vCard v-for="item in items" :key="item.id" :item="item" />
        <div
          :key="'submit'"
          class="group relative rounded-xl bg-foreground/5 border border-foreground/10 backdrop-blur-xl hover:bg-foreground/10 transition-all duration-300 hover:scale-[.98] ta shadow-sm flex justify-center items-center gap-y-3 flex-col"
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
          <RouterLink to="/submit" class="font-bold hover:underline">
            Submit your Project
          </RouterLink>
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
