<script setup lang="ts">
import { ref } from "vue";
import { usePostStore } from "@/stores/store";
const postStore = usePostStore();

const data = {
  character: "Test",
  title: "",
  content: "",
  status: "",
  roll: ref(0),
};

function roll() {
  data.roll.value = Math.floor(Math.random() * 20) + 1;
}
</script>

<template>
  <div
    class="flex flex-col w-3/4 lg:w-2/6 m-auto justify-center gap-3 bg-slate-400 p-5 font-montserrat rounded"
  >
    <h3 class="text-3xl font-bold">New Post</h3>
    <button
      v-if="data.roll.value === 0"
      class="bg-slate-900 text-slate-300 self-center px-5 py-2 rounded hover:bg-slate-600 hover:text-slate-900 transition-all"
      @click="roll"
    >
      Roll
    </button>
    <p>You rolled a {{ data.roll.value }}</p>
    <form v-if="data.roll.value > 0" class="flex flex-col gap-3 transition-all">
      <select v-model="data.status" class="self-center p-2" required>
        <option selected="true">Unpublished</option>
        <option>Published</option>
      </select>
      <input
        v-model="data.title"
        type="text"
        placeholder="Title"
        class="self-center w-3/4 p-2"
        required
      />
      <textarea
        v-model="data.content"
        class="self-center w-3/4 p-2"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Post Content"
        required
      ></textarea>
      <button
        @click.prevent="postStore.addPost({ ...data, roll: data.roll.value })"
        class="bg-slate-900 text-slate-300 self-center px-5 py-2 rounded hover:bg-slate-600 hover:text-slate-900 transition-all"
      >
        Submit
      </button>
    </form>
  </div>
</template>
