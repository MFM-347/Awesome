<template>
  <div>
    <h1 class="title">Awesome347</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <vCard v-for="item in items" :key="item.id" :item="item" />
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
