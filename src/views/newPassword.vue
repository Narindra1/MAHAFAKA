<script setup>
import { resetPassword } from "../services/auth";
import { onMounted, ref, reactive } from "vue";

onMounted(async function () {
  let newData = reactive({
    code_validation: "jZK2Wm",
    new_password: "bebeto",
  });
  let responseNewPassword = await resetPassword(newData);
  console.log(responseNewPassword);
});
</script>
<template>
  <p>Nouveau mot de passe</p>
</template>
