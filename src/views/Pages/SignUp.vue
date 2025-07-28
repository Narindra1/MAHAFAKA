<script setup>
import { signIn } from "../../services/auth";
import { ref, reactive } from "vue";
import Header from "../components/organisms/header.vue";

const responseSignIn = ref({
  status: null,
  message: "",
});

async function Signin() {
  let userData = reactive({
    nom: "mimi",
    pseudo: "mi",
    genre: "F",
    phone: "0341100011",
    annee_naissance: "2002",
    lieu_residence: "Australie",
    email: "mimi@yopmail.com",
    password: "Aumi02",
  });
  responseSignIn.value = await signIn(userData);
  console.log(responseSignIn);
}
</script>
<template>
  <div class>
    <Header />
  </div>
  <button @click="Signin">Envoyer</button>
</template>
