<script setup>
import NavBar from "../../components/organisms/NavBar.vue";
import Footer from "../../components/organisms/Footer.vue";
</script>
<template>
  <div class="h-screen w-screen bg-gray-200 flex flex-col justify-between">
    <div class="">
      <NavBar />
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="">
      <Footer />
    </div>
  </div>
</template>
