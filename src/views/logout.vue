<script setup>
import { logout } from "../services/auth";
import { reactive, onMounted } from "vue";

let responseLogout = reactive({
  data: "",
  message: "",
  status: null,
});

// onMounted(function () {
//   responseLogoutValue = await logout();
//   console.log(responseLogoutValue);
// });
async function Logout() {
  responseLogout = await logout();
  console.log(responseLogout);
}
</script>
<template>
  <button @click="Logout">Deconnexion</button>
</template>
