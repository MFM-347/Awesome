<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { meta } from '@/data'
import { ref, onMounted } from 'vue'

useSeoMeta({
  title: meta.title,
  description: meta.description,
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogUrl: meta.url,
  ogImageAlt: meta.alt,
  twitterImageAlt: meta.alt,
  twitterTitle: meta.title,
  twitterDescription: meta.description,
})
useHead({
  titleTemplate: null,
  link: [{ rel: 'canonical', href: meta.url }],
})

const store = ref<any>(null)
const items = ref([])

onMounted(async () => {
  const { useAwesomeStore } = await import('../stores')
  store.value = useAwesomeStore()
  const { items: storeItems } = storeToRefs(store.value)
  items.value = storeItems.value
})
</script>

<template>
  <div>
    <main class="sm:ml-16">
      <section class="relative flex min-h-screen items-center justify-center p-4 sm:p-8">
        <div class="mx-auto max-w-4xl space-y-4 text-center md:space-y-6">
          <h1 class="text-4xl font-bold md:text-6xl">
            <span
              class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent"
            >
              Unlock Your Full Potential
            </span>
          </h1>
          <p class="text-lg text-white/70 sm:text-xl">
            Explore cutting-edge tools, apps, tutorials and resources to help you improve your
            productivity, solve problems, and maximize efficiency.
          </p>
        </div>
      </section>
    </main>
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <TransitionGroup name="projects" appear>
        <vCard v-for="item in items" :key="item.id" :item="item" />
        <div
          :key="'submit'"
          class="group relative flex scale-[.99] flex-col items-center justify-center gap-y-2 rounded-xl border border-foreground/10 bg-foreground/5 py-8 shadow-sm backdrop-blur-xl ta-175 hover:scale-[1.01] hover:bg-foreground/10"
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
          <a to="/submit" target="_self" class="font-bold hover:underline"> Submit your Project </a>
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
