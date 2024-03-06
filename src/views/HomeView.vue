<script setup lang="ts">
import { usePostStore, useUserStore } from "@/stores/store";
import { onMounted } from "vue";

const postStore = usePostStore();
const userStore = useUserStore();

onMounted(postStore.fetchPosts);

function getTime(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}
</script>

<template>
  <div
    v-if="postStore.postData"
    class="grid grid-cols-1 gap-5 justify-center w-full"
  >
    <div
      v-for="post in postStore.postData"
      class="p-4 grid grid-cols-3 w-3/4 md:w-2/6 m-auto transition-all text-pretty text-slate-900 hover:cursor-pointer hover:shadow-xl hover:shadow-slate-950 bg-slate-400 rounded-md __card"
    >
      <div
        class="flex flex-col align-center text-center font-bold border-r-2 border-slate-500 mr-2 __roll"
      >
        <p class="text-sm">
          <span class="text-blue-800">{{ post.character }}</span>
          rolled a...
        </p>
        <h1 class="font-bold text-5xl xl:text-8xl">
          {{ post.roll }}
        </h1>
      </div>

      <div class="col-span-2 flex flex-col gap-2 relative __title">
        <div
          class="absolute top-0 right-0 bg-slate-300 p-1 flex gap-1 rounded-lg __admin-panel"
          v-show="userStore.user !== null"
        >
          <span
            class="material-symbols-outlined rounded-md hover:scale-125 transition-all"
          >
            edit
          </span>
          <span
            class="material-symbols-outlined rounded-md hover:scale-125 transition-all"
            @click="postStore.deletePost(post.id as number)"
          >
            delete
          </span>
        </div>
        <h3 class="font-montserrat text-3xl font-bold">{{ post.title }}</h3>
        <p class="font-hind text-sm font-light">
          {{ getTime(post.created_at as string) }}
        </p>
        <p class="font-hind font-medium text-left">
          {{ post.content }}
        </p>
      </div>
    </div>
  </div>
</template>
