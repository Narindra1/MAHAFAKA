import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/profil",
      name: "profil",
      component: () => import("../views/profil.vue"),
    },
  ],
});

export default router;
