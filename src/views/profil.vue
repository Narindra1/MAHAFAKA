<script setup>
import { profil } from "../services/user";
import { onMounted, reactive } from "vue";

let responseProfilValue = reactive({});

onMounted(async function () {
  responseProfilValue = await profil();
  console.log(responseProfilValue);
});
</script>
<template>
  <h2>Voici tes informations</h2>
</template>
