<script setup>
import { signUp } from "../../services/auth";
import { ref, reactive } from "vue";

const responseSignIn = ref({
  status: null,
  message: "",
});

async function signup() {
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
  responseSignIn.value = await signUp(userData);
  console.log(responseSignIn);
}
</script>
<template>
  <div class>
    <h1>Hello</h1>
  </div>
  <button @click="Signup">Envoyer</button>
</template>
