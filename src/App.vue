<template>
  <ul>
    <li class="text-sky-400/100 underline">
      <router-link :to="{ path: '/' }">HOME</router-link>
    </li>
    <li class="text-sky-400/100 underline">
      <router-link :to="{ name: 'About' }">About</router-link>
    </li>
  </ul>
  <router-view></router-view>
  <h1 class="text-3xl font-bold">TailwindCSSの確認</h1>
</template>

<scrpt></scrpt>
