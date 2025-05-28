<template>
  <nav
    class="fixed top-0 left-0 z-10 h-16 w-full border-0 border-background/10 bg-background/50 backdrop-blur-xl md:h-full md:w-20 md:border-r"
  >
    <div class="flex flex-row items-center gap-4 px-3 py-2 sm:gap-6 sm:p-4 md:flex-col">
      <NuxtLink aria-label="Home" to="/">
        <img
          src="/logo.svg"
          loading="lazy"
          height="48"
          width="48"
          class="ta-150 hover:scale-110"
          alt="Awesome347"
        />
      </NuxtLink>
      <div class="invisible h-px w-full bg-foreground/10 md:visible"></div>
      <NuxtLink
        to="/search"
        aria-label="Search"
        class="rounded-lg p-2 pb-px ta-120 hover:bg-foreground/10 focus:bg-foreground/5"
      >
        <VIcon name="carbon:search" class="size-6 text-primary-50" />
      </NuxtLink>
      <NuxtLink
        to="/submit"
        aria-label="Submit"
        class="rounded-lg p-2 pb-px ta-120 hover:bg-foreground/10 focus:bg-foreground/5"
      >
        <VIcon name="carbon:document-requirements" class="size-6 text-primary-50" />
      </NuxtLink>
      <NuxtLink
        to="/about"
        aria-label="About"
        class="rounded-lg p-2 pb-px ta-120 hover:bg-foreground/10 focus:bg-foreground/5"
      >
        <VIcon name="carbon:information" class="size-6 text-primary-50" />
      </NuxtLink>
    </div>
  </nav>
</template>
