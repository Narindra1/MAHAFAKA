<script setup>
import { onMounted, reactive, ref } from "vue";
import { setForgotPassword } from "../services/auth";
import { signIn } from "../services/auth";
const responseSignIn = ref({
  status: null,
  message: "",
});
const responseForgotPassword = ref({
  status: null,
  message: "",
});
onMounted(async function () {
  let emailUser = reactive({
    email: "tutu@yopmail.com",
  });
  responseForgotPassword.value = await setForgotPassword(emailUser);
  console.log(responseForgotPassword);
});

// onMounted(function () {
//   let userData = reactive({
//     nom: "Tuto",
//     pseudo: "tu",
//     genre: "M",
//     phone: "0343322210",
//     annee_naissance: "2002",
//     lieu_residence: "La Reunion",
//     email: "tutu@yopmail.com",
//     password: "tutupetit",
//   });
// });
// async function signin() {
//   let userData = reactive({
//     nom: "Tuto",
//     pseudo: "tu",
//     genre: "M",
//     phone: "0343322210",
//     annee_naissance: "2002",
//     lieu_residence: "La Reunion",
//     email: "tutu@yopmail.com",
//     password: "tutupetit",
//   });
//   responseSignIn.value = await signIn(userData);
//   console.log(responseSignIn);
// }
</script>
<template>
  <h3>Mot de passe oublié</h3>
  <!-- <button @click="signin">save</button> -->
</template>
