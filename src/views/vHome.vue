<template>
  <div>
    <h1 class="title">Awesome List</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <Card v-for="item in items" :key="item.name" class="flex flex-col">
        <CardHeader>
          <CardTitle>{{ item.name }}</CardTitle>
          <CardDescription>{{ item.category }}</CardDescription>
        </CardHeader>
        <CardContent class="flex-grow">
          <div class="flex flex-wrap gap-2 mb-4">
            <Badge v-for="tag in item.tags" :key="tag" variant="secondary">
              {{ tag }}
            </Badge>
          </div>
          <Button v-if="item.url" @click="openUrl(item.url)" class="w-auto">
            <LinkIcon class="w-4 h-4 mr-2" />
            Visit
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAwesomeStore } from '../store'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { LinkIcon } from 'lucide-vue-next'

const store = useAwesomeStore()
const { items } = storeToRefs(store)

const openUrl = (url) => {
  window.open(url, '_blank')
}
</script>
