<template>
  <header class="border-b">
    <Menubar class="container mx-auto px-4 py-2">
      <MenubarMenu>
        <MenubarTrigger class="font-bold text-xl">Awesome</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <router-link to="/" class="flex items-center">
          <MenubarTrigger>
            <HomeIcon class="w-4 h-4 mr-2" />
            Home
          </MenubarTrigger>
        </router-link>
      </MenubarMenu>
      <MenubarMenu>
        <router-link to="/search" class="flex items-center">
          <MenubarTrigger>
            <SearchIcon class="w-4 h-4 mr-2" />
            Search
          </MenubarTrigger>
        </router-link>
      </MenubarMenu>
      <MenubarMenu>
        <router-link to="/about" class="flex items-center">
          <MenubarTrigger>
            <InfoIcon class="w-4 h-4 mr-2" />
            About
          </MenubarTrigger>
        </router-link>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger @click="toggleTheme" class="flex items-center">
          <template v-if="isDarkMode">
            <SunIcon class="w-4 h-4 mr-2" />
            Light Mode
          </template>
          <template v-else>
            <MoonIcon class="w-4 h-4 mr-2" />
            Dark Mode
          </template>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  </header>
</template>

<script setup>
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { ref, onMounted } from 'vue'
import { HomeIcon, SearchIcon, InfoIcon, SunIcon, MoonIcon } from 'lucide-vue-next'

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  isDarkMode.value = theme === 'dark'
})
</script>
