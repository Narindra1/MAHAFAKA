<script setup></script>
<template>
  <div class="w-full p-5 flex flex-col gap-3">
    <!-- AnnonceHeader -->
    <div class="text-stone-950 text-2xl">
      <slot name="AnnonceHeader"></slot>
    </div>

    <!-- AnnonceMenu -->
    <div class="flex gap-3 px-1 items-start">
      <slot name="AnnonceMenu"></slot>
    </div>

    <!--AnnonceList  -->
    <div class="w-[30vw] p-2 flex gap-5">
      <slot name="AnnonceList"></slot>
    </div>
  </div>
</template>
