<script setup>
import { resetPassword } from "../../services/auth";
import { reactive } from "vue";

// onMounted(async function () {
//   let newData = reactive({
//     code_validation: "jZK2Wm",
//     new_password: "bebeto",
//   });
//   let responseNewPassword = await resetPassword(newData);
//   console.log(responseNewPassword);
// });
async function ResetPassword() {
  let newData = reactive({
    code_validation: "jUwfbe",
    new_password: "bebeto",
  });
  let responseNewPassword = await resetPassword(newData);
  console.log(responseNewPassword);
}
</script>
<template>
  <button @click="ResetPassword">Nouveau mot de passe</button>
</template>
