<script setup lang="ts">
import { useUserStore } from "@/stores/store";
const userStore = useUserStore();
const userData = {
  email: "",
  password: "",
};
</script>

<template>
  <div class="mt-2" v-if="userStore.user === null">
    <form
      class="flex flex-col gap-3 bg-black p-5 w-3/4 lg:w-2/6 justify-center m-auto rounded font-montserrat border-yellow-500 border-2 text-white"
    >
      <h1 class="text-3xl font-bold">Login</h1>
      <input
        v-model="userData.email"
        type="text"
        placeholder="Username"
        class="self-center p-2 bg-black rounded-lg border-2 focus:border-white focus:outline-none focus:ring-0"
      />
      <input
        v-model="userData.password"
        type="password"
        placeholder="Password"
        class="self-center p-2 bg-black rounded-lg border-2 focus:border-white focus:outline-none focus:ring-0"
      />
      <button
        class="bg-yellow-300 text-yellow-900 self-center px-5 py-2 rounded hover:bg-yellow-600 hover:text-yellow-300 transition-all"
        @click.prevent="
          userStore.loginWithEmail(userData.email, userData.password)
        "
      >
        Login
      </button>
    </form>
  </div>
  <div
    class="flex flex-col gap-3 bg-black border-yellow-500 border-2 text-white p-5 w-3/4 lg:w-2/6 justify-center m-auto rounded font-montserrat mt-2"
    v-else
  >
    <h3>You are already logged in as</h3>
    <p class="text-blue-800 font-bold">{{ userStore.user.email }}</p>
    <button
      class="bg-yellow-300 text-yellow-900 self-center px-5 py-2 rounded hover:bg-yellow-600 hover:text-yellow-300 transition-all"
      @click.prevent="userStore.logout()"
    >
      Logout
    </button>
  </div>
</template>
