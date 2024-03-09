<script setup>
import { useUserStore } from "./stores/store";
const userStore = useUserStore();
</script>

<template>
  <div class="font-montserrat p-2 border-b-2 border-yellow-500 text-white">
    <h1 class="text-3xl font-bold underline text-yellow-500">LoTJ Fates</h1>
    <nav class="flex gap-5 justify-center text-yellow-200">
      <router-link class="link link-underline link-underline-yellow" to="/"
        >Home</router-link
      >
      <router-link
        class="link link-underline link-underline-yellow"
        v-show="userStore.user !== null"
        to="/post"
        >New Post</router-link
      >
      <router-link class="link link-underline link-underline-yellow" to="/login"
        >Login</router-link
      >
    </nav>
  </div>
  <router-view />
</template>

<style>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;
}

.link-underline-yellow {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(rgb(248, 234, 104), rgb(248, 234, 104));
}

.link-underline:hover {
  background-size: 100% 3px;
  background-position: 0 100%;
}
</style>
