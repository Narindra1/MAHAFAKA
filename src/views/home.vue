<script setup>
import { login } from "../services/authentification";
import { onMounted, reactive, ref } from "vue";

const responseLogin = ref({
  status: null,
  message: "Chargement en cours...", // Message par défaut
});

onMounted(async function () {
  let auth = reactive({
    email: "0340000000",
    password: "12345678",
    a_vis: 0,
  });
  responseLogin.value = await login(auth);
});
</script>

<template>
  <div
    class="flex flex-col gap-1 justify-center items-center w-screen h-screen"
  >
    <h1>Bienvenue à MAHAFAKA</h1>
    <template v-if="responseLogin">
      <p
        v-text="responseLogin.message"
        :class="responseLogin.status ? 'text-green-600' : 'text-red-600'"
      ></p>
    </template>
    <template v-else>
      <p class="text-green-200">Miandry ehh</p>
    </template>
  </div>
</template>
