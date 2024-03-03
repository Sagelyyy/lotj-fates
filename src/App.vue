<script setup></script>

<template>
  <body class="bg-slate-200 h-dvh">
    <nav>
      <h1 class="text-3xl font-bold underline">Hello World</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </body>
</template>
