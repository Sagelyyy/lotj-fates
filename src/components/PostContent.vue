<script setup lang="ts">
import { useUserStore, usePostStore } from "@/stores/store";
import type { IPost } from "@/types/post";

defineProps<{
  post: IPost;
  getTime: Function;
}>();

const userStore = useUserStore();
const postStore = usePostStore();
</script>

<template>
  <div
    class="bg-black col-span-8 w-3/4 md:w-5/6 sm:w-3/4 m-auto rounded-xl text-white border-t-4 border-r-4 border-b-2 border-l-2 border-t-yellow-500 border-r-yellow-500 border-b-yellow-700 border-l-yellow-700 hover:border-t-yellow-700 hover:border-r-yellow-700 hover:border-b-yellow-500 hover:border-l-yellow-500 hover:-translate-y-2 transition-all duration-200 ease-linear relative __post_content"
  >
    <div class="absolute inset-0 flex items-center bg-black __sub_border">
      <div
        class="left-6 mt-5 -mr-16 h-full w-full translate-x-4 scale-y-95 transform rounded-xl border-4 border-yellow-500"
      ></div>
    </div>
    <div
      class="flex gap-4 justify-center m-auto w-2/3 md:w-2/5 bg-yellow-700 rounded-b-full border-b-8 border-yellow-400 __roll_container"
    >
      <p class="font-bold text-5xl max-w-12 text-white">
        {{ post.roll }}
      </p>
      <svg
        fill="#ffffff"
        viewBox="-16 0 512 512"
        width="3rem"
        height="3rem"
        xmlns="http://www.w3.org/2000/svg"
        class="p-1 hover:rotate-180 transition-all duration-200 ease-linear shrink-0"
        preserveAspectRatio="xMidYMin slice"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M106.75 215.06L1.2 370.95c-3.08 5 .1 11.5 5.93 12.14l208.26 22.07-108.64-190.1zM7.41 315.43L82.7 193.08 6.06 147.1c-2.67-1.6-6.06.32-6.06 3.43v162.81c0 4.03 5.29 5.53 7.41 2.09zM18.25 423.6l194.4 87.66c5.3 2.45 11.35-1.43 11.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23 5.59-2.2 7.57zm81.22-257.78L179.4 22.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81 110.35c-2.47 1.62-2.39 5.26.13 6.78l81.53 48.69zM240 176h109.21L253.63 7.62C250.5 2.54 245.25 0 240 0s-10.5 2.54-13.63 7.62L130.79 176H240zm233.94-28.9l-76.64 45.99 75.29 122.35c2.11 3.44 7.41 1.94 7.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41 18.72l81.53-48.7c2.53-1.52 2.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12 4.08-10.78 11.14l79.93 142.94zm79.02 250.21L256 438.32v65.67c0 5.84 6.05 9.71 11.35 7.26l194.4-87.66c4.03-1.97 2.25-8.06-2.2-7.56zm-86.3-200.97l-108.63 190.1 208.26-22.07c5.83-.65 9.01-7.14 5.93-12.14L373.25 215.06zM240 208H139.57L240 383.75 340.43 208H240z"
          ></path>
        </g>
      </svg>
    </div>

    <div class="p-4 flex flex-col gap-4">
      <h3
        class="font-montserrat text-3xl font-bold text-yellow-200 capitalize px-2"
      >
        {{ post.title }}
      </h3>
      <p class="font-hind font-medium text-left">
        {{ post.content }}
      </p>
      <div class="flex justify-between gap-2 w-full">
        <div
          class="border border-yellow-500 p-1 flex gap-1 rounded-lg __admin-panel"
          v-if="userStore.user !== null"
        >
          <span
            class="material-symbols-outlined rounded-md hover:scale-125 transition-all cursor-pointer select-none"
          >
            edit
          </span>
          <span
            class="material-symbols-outlined rounded-md hover:scale-125 transition-all cursor-pointer select-none"
            @click="postStore.deletePost(post.id as number)"
          >
            delete
          </span>
        </div>
        <div></div>
        <p class="font-hind text-sm font-light self-end text-yellow-100">
          Rolled by
          <span class="capitalize text-yellow-400">{{ post.character }}</span>
          on
          {{ getTime(post.created_at as string) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.__post_content {
  transform-style: preserve-3d;
}

.__post_content:hover > .__sub_border > div {
  transform: translateZ(-3em) translateX(0.5em) translateY(-0.5em);
  transition: 0.5s;
}

.__post_content > .__sub_border > div {
  transform: translateZ(-1em) translateX(1em);
  transition: 0.5s;
}

.__sub_border {
  transform: translateZ(-1em);
}
</style>
