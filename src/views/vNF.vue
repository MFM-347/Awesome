<template>
  <section class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="mb-2 text-9xl font-bold">404</h1>
    <p class="mb-10 text-xl sm:text-3xl">Sorry, we couldn't find this page.</p>
    <RouterLink
      to="/"
      class="cursor-pointer rounded-xl bg-primary-500/70 px-4 py-2 text-lg text-foreground ta-200 hover:bg-primary-400/80"
    >
      Go Home
    </RouterLink>
  </section>
</template>
