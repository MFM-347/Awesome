<template>
  <header class="py-2 px-4 bg-background-ultra border-b">
    <nav class="flex px-2 items-center">
      <RouterLink to="/" class="flex gap-1 items-start sm:items-center">
        <img class="sm:w-8 w-12" src="/logo.svg" alt="Awesome347 Logo" />
        <span class="text-xl sm:text-3xl font-bold">347</span>
      </RouterLink>
      <ul class="flex gap-3 sm:gap-6 ml-auto text-base sm:text-xl capitalize">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/search">Search</RouterLink>
        </li>
        <li>
          <RouterLink to="/submit">Submit</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
