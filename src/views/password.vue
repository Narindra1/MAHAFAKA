<script setup>
import { onMounted, reactive, ref } from "vue";
import { setForgotPassword } from "../services/auth";
import { signIn } from "../services/auth";
const responseSignIn = ref({
  status: null,
  message: "",
});
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

onMounted(async function () {});

// onMounted(function () {
//   let userData = reactive({
//     nom: "bebe",
//     pseudo: "be",
//     genre: "M",
//     phone: "0343434434",
//     annee_naissance: "1978",
//     lieu_residence: "Paris",
//     email: "bebe@yopmail.com",
//     password: "bebeParis",
//   });
// });
// async function signin() {
//   let userData = reactive({
//     nom: "bebe",
//     pseudo: "be",
//     genre: "M",
//     phone: "0343434434",
//     annee_naissance: "1978",
//     lieu_residence: "Paris",
//     email: "bebe@yopmail.com",
//     password: "bebeParis",
//   });
//   responseSignIn.value = await signIn(userData);
//   console.log(responseSignIn);
// }
</script>
<template>
  <h3>Mot de passe oublié</h3>
  <button @click="signin">save</button>
  <button @click="sendMail">sendMail</button>
  <button @click="signin">validCode</button>
  <input type="text" v-model="code" />
</template>
