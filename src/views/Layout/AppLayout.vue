<script setup>
import NavBar from "./App/NavBar.vue";
import Footer from "./App/Footer.vue";
</script>
<template>
  <div class="h-screen w-screen bg-gray-200 flex flex-col">
    <div class="">
      <NavBar />
    </div>
    <div class="grow-1 bg-gray-50">
      <slot></slot>
    </div>
    <div class="">
      <Footer />
    </div>
  </div>
</template>
