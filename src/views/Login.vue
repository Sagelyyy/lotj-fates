<script setup>
import { useUserStore } from "@/stores/store";
const userStore = useUserStore();
const userData = {
  email: "",
  password: "",
};
</script>

<template>
  <div v-if="!userStore.user.email">
    <h1>Login</h1>
    <form>
      <input v-model="userData.email" type="text" placeholder="Username" />
      <input
        v-model="userData.password"
        type="password"
        placeholder="Password"
      />
      <button
        @click.prevent="
          userStore.loginWithEmail(userData.email, userData.password)
        "
      >
        Login
      </button>
    </form>
  </div>
  <div v-else>
    <h1>You are already logged in as {{ userStore.user.email }}</h1>
    <button @click.prevent="userStore.logout()">Logout</button>
  </div>
</template>
