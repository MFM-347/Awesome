<script setup lang="ts">
import { meta } from '@/data'

useSeoMeta({
  title: 'About',
  description:
    'Learn about Awesome347 and the technologies behind this curated list of tools and resources.',
  ogTitle: 'About - Awesome347',
  ogDescription:
    'Learn about Awesome347 and the technologies behind this curated list of tools and resources.',
  ogUrl: `${meta.url}/about`,
  twitterTitle: 'About - Awesome347',
  twitterDescription:
    'Learn about Awesome347 and the technologies behind this curated list of tools and resources.',
})
useHead({
  link: [{ rel: 'canonical', href: `${meta.url}/about` }],
  script: [
    {
      type: 'application/ld+json',
      value: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            url: meta.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            url: `${meta.url}/about`,
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="container mx-auto px-16 py-8">
    <h1 class="title">About</h1>
    <div
      class="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 shadow-sm backdrop-blur-xl"
    >
      <article id="intro" class="mb-6">
        <p class="text-gray-800 dark:text-gray-200">
          Awesome347 is your go-to platform for discovering handpicked tools, resources, and guides
          for developers and designers. From productivity boosters to stunning UI/UX design tools,
          find everything you need to elevate your work.
        </p>
      </article>
      <article id="features" class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">Key Features</h2>
        <ul class="list-inside list-disc text-gray-800 dark:text-gray-200">
          <li>Modern and intuitive user interface</li>
          <li>Responsive design for all devices</li>
          <li>Dark mode for eye comfort</li>
          <li>Curated, quality-assured resources</li>
        </ul>
      </article>
      <article id="techs" class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">Technologies used in Awesome347</h2>
        <ul class="list-inside list-disc text-gray-800 dark:text-gray-200">
          <li v-for="tech in meta.techs" :key="tech.id">
            <a
              rel="noopener nofollow"
              class="underline hover:no-underline"
              :title="tech.name"
              :aria-label="tech.name"
              :href="tech.url"
            >
              {{ tech.name }}</a
            >: {{ tech.description }}
          </li>
        </ul>
      </article>
      <article id="os-license" class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold">Opensource</h2>
        <div class="flex gap-4">
          <p class="text-sm text-gray-800 dark:text-gray-200">
            Awesome347 is an open-source project is licensed under
            <a
              title="LICENSE Information"
              aria-label="LICENSE Information"
              href="https://github.com/MFM-347/Awesome/blob/main/LICENSE"
              class="text-primary-400 hover:underline"
              target="_blank"
            >
              MIT License
            </a>
            with source code available at
            <a
              class="text-primary-400 hover:underline"
              title="Source Code"
              aria-label="Source Code"
              href="https://github.com/MFM-347/Awesome"
            >
              Github</a
            >.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>
