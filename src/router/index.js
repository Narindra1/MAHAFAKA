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
      component: () => import("../views/Pages/Profil.vue"),
    },
    {
      path: "/password",
      name: "password",
      component: () => import("../views/Pages/Password.vue"),
    },

    {
      path: "/newPassword",
      name: "newPassword",
      component: () => import("../views/Pages/NewPassword.vue"),
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/Pages/Logout.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Pages/SignUp.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/Pages/Menu.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/Pages/SignIn.vue"),
    },
    {
      path: "/menu1",
      name: "menu1",
      component: () => import("../components/molecules/Menu1.vue"),
    },
    {
      path: "/menu2",
      name: "menu2",
      component: () => import("../components/molecules/Menu2.vue"),
    },
    {
      path: "/menu3",
      name: "menu3",
      component: () => import("../components/molecules/Menu3.vue"),
    },
  ],
});

export default router;
