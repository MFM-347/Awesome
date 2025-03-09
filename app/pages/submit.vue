<script setup lang="ts">
import { meta } from '@/data'

useSeoMeta({
  title: 'Submit',
  description: 'Guidelines and rules for submiting your site or project to Awesome347.',
  ogTitle: 'Submit - Awesome347',
  ogDescription: 'Guidelines and rules for submiting your site or project to Awesome347.',
  ogUrl: `${meta.url}/submit`,
  twitterTitle: 'Submit - Awesome347',
  twitterDescription: 'Guidelines and rules for submiting your site or project to Awesome347.',
})
useHead({
  link: [{ rel: 'canonical', href: `${meta.url}/submit` }],
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
            name: 'Submit',
            url: `${meta.url}/submit`,
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <article class="container mx-auto px-16 py-8">
    <h1 class="title">Submit a Site</h1>
    <div
      class="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 shadow-sm backdrop-blur-xl"
    >
      <h2 class="mb-4 text-2xl font-semibold">Submission Guidelines</h2>
      <p class="mb-6 text-gray-800 dark:text-gray-200">
        Are you interested in featuring your project to Awesome347? If yes then Follow these
        guidelines/rules:
      </p>
      <ul class="mb-6 list-inside list-disc text-gray-800 dark:text-gray-200">
        <li>
          Ensure your project is
          <b>free to use (can include pro version along with free features) and accessible</b> for
          everyone.
        </li>
        <li>
          <b>If it's open-source</b>, make sure it's hosted on a platform that encourages
          contributions (e.g., GitHub).
        </li>
        <li>
          Your project should not promote
          <b>piracy or violate copyright laws</b>.
        </li>
        <li>Make sure your project is <b>respectful and inclusive</b> for users of all ages.</li>
        <li>Your project must be <b>actively maintained or in a stable state</b>.</li>
      </ul>
      <div class="flex gap-4">
        <a
          rel="noopener nofollow"
          title="Submit your project"
          aria-label="Submit your project"
          href="https://spoo.me/a347?ref=Awesome347&utm_source=Awesome347"
        >
          <vBtn>Submit</vBtn>
        </a>
      </div>
    </div>
  </article>
</template>
