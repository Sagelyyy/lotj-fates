import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import { ref } from "vue";

interface IPost {
  id?: number;
  title: string;
  content: string;
  created_at?: string;
  roll: number;
  status: string;
  character?: string;
}

export const usePostStore = defineStore("post", () => {
  const postData = ref([] as IPost[]);

  function setPosts(posts: IPost[]) {
    postData.value = posts;
  }

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data);
        // console.log("Posts fetched successfully:", data);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error fetching posts:", err.message);
      }
    }
  }

  async function addPost(post: IPost) {
    if (!post.title || !post.content) return;
    const { error } = await supabase.from("posts").insert(post);
    if (error) {
      console.error("Error adding post:", error);
      console.error(post);
    } else {
      console.log("Post added successfully: ", post);
    }
  }
  return { postData, fetchPosts, addPost };
});
