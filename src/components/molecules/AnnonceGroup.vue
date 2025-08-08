<script setup></script>
<template>
  <div class="w-full flex flex-col gap-3">
    <!-- AnnonceHeader -->
    <div class="text-stone-950 text-[1.4rem] font-bold">
      <slot name="AnnonceHeader"></slot>
    </div>

    <!-- AnnonceMenu -->
    <div class="flex flex-wrap gap-3 items-start">
      <slot name="AnnonceMenu"></slot>
    </div>

    <!--AnnonceList  -->
    <div class="p-0 flex gap-2 overflow-x-scroll">
      <slot name="AnnonceList"></slot>
    </div>
  </div>
</template>
<style scoped>
* {
  scrollbar-width: none;
}
</style>
