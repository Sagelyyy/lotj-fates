<script setup lang="ts">
import { usePostStore, useUserStore } from "@/stores/store";
import { onMounted } from "vue";
import PostContent from "@/components/PostContent.vue";

const postStore = usePostStore();
const userStore = useUserStore();

onMounted(() => {
  postStore.fetchPosts();
  postStore.subscribePosts();
});

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
    class="grid grid-cols-1 max-w-xl mx-auto gap-5 justify-center w-full mt-4 mb-2"
  >
    <PostContent
      v-for="post in postStore.postData"
      :key="post.id"
      :post="post"
      :getTime="getTime"
    />
  </div>
</template>
