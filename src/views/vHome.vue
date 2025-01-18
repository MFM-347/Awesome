<template>
  <div>
    <div class="grid place-items-center w-full my-6 md:my-12">
      <img
        :src="`/logo-${mode}.svg`"
        alt="Awesome347 Logo"
        width="240"
        height="240"
        class="transition-all duration-300 hover:scale-110 mb-4"
      />
      <h1 class="title">Awesome347</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      <TransitionGroup name="projects" appear class="contents">
        <vCard v-for="item in items" :key="item.id" :item="item" />
        <div
          class="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex justify-center items-center gap-y-3 flex-col"
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

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useAwesomeStore } from '../stores';
import vCard from '../components/vCard.vue';

const isDarkMode = ref(false);
onMounted(() => {
  const isDarkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';
  isDarkMode.value = isDarkModeEnabled;
  document.documentElement.classList.toggle('dark', isDarkMode.value);

  const observer = new MutationObserver(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark');
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  onUnmounted(() => observer.disconnect());
});

const mode = computed(() => (isDarkMode.value ? 'dark' : 'light'));

const store = useAwesomeStore();
const { items } = storeToRefs(store);
</script>

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
