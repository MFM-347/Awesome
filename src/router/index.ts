import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/vHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/vSearch.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/vAbout.vue"),
    },
  ],
});

export default router;
