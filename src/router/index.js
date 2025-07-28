import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Pages/Home.vue"),
    },
    {
      path: "/profil",
      name: "profil",
      component: () => import("../views/Profil.vue"),
    },
    {
      path: "/password",
      name: "password",
      component: () => import("../views/Password.vue"),
    },

    {
      path: "/newPassword",
      name: "newPassword",
      component: () => import("../views/NewPassword.vue"),
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/Logout.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Pages/SignUp.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/Pages/SignIn.vue"),
    },
  ],
});

export default router;
