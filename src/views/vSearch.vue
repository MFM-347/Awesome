<template>
  <div>
    <h1 class="title">Search</h1>
    <div class="mb-6">
      <Input v-model="searchQuery" placeholder="Search..." @input="handleSearch" />
    </div>
    <div
      v-if="searchResults.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <Card v-for="item in searchResults" :key="item.name" class="flex flex-col">
        <CardHeader>
          <CardTitle>{{ item.name }}</CardTitle>
          <CardDescription>{{ item.category }}</CardDescription>
        </CardHeader>
        <CardContent class="flex-grow">
          <div class="flex flex-wrap gap-2">
            <Badge v-for="tag in item.tags" :key="tag" variant="secondary">
              {{ tag }}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
    <div v-else-if="searchQuery" class="text-center text-gray-500">
      No results found for "{{ searchQuery }}"
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAwesomeStore } from '../store'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const store = useAwesomeStore()
const { searchResults } = storeToRefs(store)

const searchQuery = ref('')

const handleSearch = () => {
  store.search(searchQuery.value)
}

watch(searchQuery, () => {
  if (searchQuery.value === '') {
    searchResults.value = []
  }
})
</script>
