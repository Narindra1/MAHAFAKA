<script setup></script>
<template>
  <div
    class="w-full min-w-[300px] h-full rounded-lg [box-shadow:0_1.29px_10px_1.3px_rgba(0,0,0,0.25)] bg-white"
  >
    <!-- Img -->
    <slot name="img"></slot>

    <div class="px-[1.2rem] py-[1rem] flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <p class="text-black font-bold text-2xl">
          <!-- Titre -->
          <slot name="titre"></slot>
        </p>
        <p class="bg-green-300 rounded-xl p-2 text-white text-sm">
          <!-- Menu -->
          <slot name="menu"></slot>
        </p>
      </div>
      <div class="flex gap-2 text-lg mb-1 text-gray-400">
        <!-- Body -->
        <slot name="body"></slot>
      </div>

      <div class="text-lg font-normal text-stone-700">
        <p>
          <!-- Description -->
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>
