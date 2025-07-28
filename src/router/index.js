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
    {
      path: "/password",
      name: "password",
      component: () => import("../views/password.vue"),
    },

    {
      path: "/newPassword",
      name: "newPassword",
      component: () => import("../views/newPassword.vue"),
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/logout.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/Pages/Signin.vue"),
    },
  ],
});

export default router;
