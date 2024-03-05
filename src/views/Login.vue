<script setup lang="ts">
import { useUserStore } from "@/stores/store";
const userStore = useUserStore();
const userData = {
  email: "",
  password: "",
};
</script>

<template>
  <div v-if="userStore.user === null">
    <form
      class="flex flex-col gap-3 bg-slate-400 p-5 w-3/4 lg:w-2/6 justify-center m-auto rounded font-montserrat"
    >
      <h1 class="text-3xl font-bold">Login</h1>
      <input
        v-model="userData.email"
        type="text"
        placeholder="Username"
        class="self-center p-2"
      />
      <input
        v-model="userData.password"
        type="password"
        placeholder="Password"
        class="self-center p-2"
      />
      <button
        class="bg-slate-900 text-slate-300 self-center px-5 py-2 rounded hover:bg-slate-600 hover:text-slate-900 transition-all"
        @click.prevent="
          userStore.loginWithEmail(userData.email, userData.password)
        "
      >
        Login
      </button>
    </form>
  </div>
  <div
    class="flex flex-col gap-3 bg-slate-400 p-5 w-3/4 lg:w-2/6 justify-center m-auto rounded font-montserrat"
    v-else
  >
    <h3>You are already logged in as</h3>
    <p class="text-blue-800 font-bold">{{ userStore.user.email }}</p>
    <button
      class="bg-slate-900 text-slate-300 self-center px-5 py-2 rounded hover:bg-slate-600 hover:text-slate-900 transition-all"
      @click.prevent="userStore.logout()"
    >
      Logout
    </button>
  </div>
</template>
