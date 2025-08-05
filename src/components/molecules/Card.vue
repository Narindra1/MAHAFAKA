<script setup></script>
<template>
  <div
    class="w-full min-w-[220px] h-full rounded-lg border border-1 border-gray-300 bg-white overflow-hidden"
  >
    <!-- Img -->
    <slot name="img"></slot>

    <div class="px-[.8rem] py-[.4rem] flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <p class="text-black font-bold text-sm">
          <!-- Titre -->
          <slot name="titre"></slot>
        </p>
        <p class="bg-green-300 rounded-xl p-1 text-white text-sm">
          <!-- Menu -->
          <slot name="menu"></slot>
        </p>
      </div>
      <div class="cardBody flex gap-2 text-lg mb-1 text-gray-400">
        <!-- Body -->
        <slot name="body"></slot>
      </div>

      <div class="cardBody text-lg font-normal text-stone-700">
        <p>
          <!-- Description -->
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>
