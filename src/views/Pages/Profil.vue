<script setup>
import { profil } from "../../services/user";
import { onMounted, reactive } from "vue";

let responseProfilValue = reactive({});

async function Profil() {
  responseProfilValue = await profil();
  console.log(responseProfilValue);
}
</script>
<template>
  <button @click="Profil">Voici vos innformations</button>
</template>
