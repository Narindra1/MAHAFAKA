<script setup>
import { resetPassword } from "../services/auth";
import { onMounted, ref, reactive } from "vue";

onMounted(async function () {
  let newData = reactive({
    code_validation: "DJ26x0",
    new_password: "totobe",
  });
  let responseNewPassword = await resetPassword(newData);
  console.log(responseNewPassword);
});
</script>
<template>
  <p>Nouveau mot de passe</p>
</template>
