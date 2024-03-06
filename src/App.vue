<script setup>
import { useUserStore } from "./stores/store";
const userStore = useUserStore();
</script>

<template>
  <div
    class="font-montserrat border border-b-2 text-slate-800 border-slate-500 mb-2"
  >
    <h1 class="text-3xl font-bold underline">LoTJ Fates</h1>
    <nav class="flex gap-5 justify-center">
      <router-link to="/">Home</router-link>
      <router-link v-show="userStore.user !== null" to="/post"
        >New Post</router-link
      >
      <router-link to="/login">Login</router-link>
    </nav>
  </div>
  <router-view />
</template>
