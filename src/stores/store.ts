import { defineStore } from "pinia";
import { supabase } from "@/supabase";
import { ref } from "vue";
import type { IPost } from "../types/post";
import router from "@/router";
import type { User } from "@supabase/supabase-js";

export const usePostStore = defineStore("post", () => {
  const postData = ref([] as IPost[]);

  function setPosts(posts: IPost[]) {
    postData.value = posts.map((post) => ({
      ...post,
      roll: post.roll,
    }));
  }

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("status", "Published")
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
    const { error } = await supabase
      .from("posts")
      .insert({ ...post, roll: post.roll });
    if (error) {
      console.error("Error adding post:", error);
      console.error(post);
    } else {
      console.log("Post added successfully: ", post);
      router.push({ path: "/" });
    }
  }

  async function deletePost(id: number) {
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      console.error("Error deleting post:", error);
    } else {
      console.log("Post deleted successfully");
    }
  }

  async function updatePost(id: number, post: IPost) {
    const { error } = await supabase
      .from("posts")
      .update({ ...post, roll: post.roll })
      .eq("id", id);
    if (error) {
      console.error("Error updating post:", error);
    } else {
      console.log("Post updated successfully");
    }
  }

  return { postData, fetchPosts, addPost, deletePost, updatePost };
});

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);

  async function loginWithEmail(email: string, password: string) {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Error logging in:", error);
    } else {
      user.value = data.user;
      // console.log("User logged in:", data);
      router.push({ path: "/" });
    }
  }

  async function logout() {
    console.log("logging out...");
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    } else {
      user.value = null;
      // console.log("User logged out");
      router.push({ path: "/" });
    }
  }

  return { user, loginWithEmail, logout };
});
