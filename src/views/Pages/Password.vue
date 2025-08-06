<script setup>
import { reactive, ref } from "vue";
import { setForgotPassword } from "../../services/auth";

let code = ref("");
const responseForgotPassword = ref({
  status: null,
  message: "",
});

async function sendMail() {
  let emailUser = reactive({
    email: "bebe@yopmail.com",
  });
  responseForgotPassword.value = await setForgotPassword(emailUser);
  console.log(responseForgotPassword);
}
</script>
<template>
  <h3>Mot de passe oublié</h3>
  <button @click="signin">save</button>
  <button @click="sendMail">sendMail</button>
  <button @click="signin">validCode</button>
  <input type="text" v-model="code" />
</template>
