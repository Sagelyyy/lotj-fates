import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/post",
      name: "post",
      component: () => import("../views/Post.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

export default router;
