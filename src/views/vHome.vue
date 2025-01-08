<template>
  <div>
    <h1 class="title">Awesome347</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAwesomeStore } from "../stores";
import vCard from "../components/vCard.vue";

const store = useAwesomeStore();
const { items } = storeToRefs(store);
</script>
