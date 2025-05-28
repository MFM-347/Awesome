<template>
  <div class="min-h-screen overflow-hidden bg-background text-foreground">
    <div id="bg">
      <div
        class="pointer-events-none fixed inset-0 bg-gradient-to-br from-purple-900/20 to-primary-900/20"
      ></div>
      <div class="fixed top-1/4 -left-1/4 h-96 w-96 rounded-full bg-primary-500/30 blur-3xl"></div>
      <div class="fixed top-1/2 -right-1/4 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"></div>
    </div>
    <a
      href="#main"
      class="sr-only rounded-lg backdrop-blur-md focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gray-100/60 focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
      >Skip to content</a
    >
    <vNav />
    <main id="main" role="main">
      <div class="container mx-auto max-w-7xl px-4 py-8 md:py-8 md:pl-16">
        <slot />
      </div>
    </main>
    <vFoot />
  </div>
</template>
