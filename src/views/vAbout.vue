<template>
  <div>
    <h1 class="title">About Awesome</h1>
    <Card>
      <CardHeader>
        <CardTitle>Project Information</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="mb-4">
          Awesome List is a curated collection of awesome resources, tools, and projects across
          various categories.
        </p>
        <h2 class="text-2xl font-semibold mb-2">Features:</h2>
        <ul class="list-disc list-inside mb-4">
          <li>Browse awesome resources</li>
          <li>Search functionality using Fuse.js</li>
          <li>Responsive design</li>
          <li>Dark mode support</li>
        </ul>
        <div class="lnks">
          <a href="https://github.com/MFM-347/Awesome" class="ico"> <Github /> Source Code </a>
          <a href="https://github.com/MFM-347" class="ico"> <User /> Author </a>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Github, User } from 'lucide-vue-next'
</script>

<style scoped>
.lnks {
  @apply relative bottom-2 flex flex-row gap-4;
}
.ico {
  @apply block text-blue-400 hover:text-blue-600;
}
</style>
