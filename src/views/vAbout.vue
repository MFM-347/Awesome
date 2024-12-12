<template>
  <div>
    <h1 class="title">About</h1>
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
          <Button @click="openUrl('https://github.com/MFM-347/Awesome/')" class="w-auto">
            <GithubIcon class="w-4 h-4 mr-2" /> Source Code
          </Button>
          <Button @click="openUrl('https://github.com/MFM-347/')" class="w-auto">
            <GithubIcon class="w-4 h-4 mr-2" /> Author
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GithubIcon, User } from 'lucide-vue-next'

const openUrl = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.lnks {
  @apply relative right-2 bottom-2 flex flex-row gap-4;
}
</style>
