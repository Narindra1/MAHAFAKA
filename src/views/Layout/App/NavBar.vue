<script setup></script>
<template>
  <div
    class="flex justify-between items-center bg-gray-100 min-h-[60px] w-full p-5"
  >
    <div class="py-2 px-3 flex gap-3 flex items-center">
      <div class="h-[40px] w-[40px]">
        <img src="../../../../public/img/ic_mahafaka.png" alt="logo-mahafaka" />
      </div>

      <p class="text-2xl text-orange-500">Mahafaka</p>
    </div>
    <div
      class="relative bg-gray-200 flex justify-between items-center gap-8 w-[700px] h-[42px] rounded-lg text-lg text-gray-800"
    >
      <div class="w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none"
        >
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <input
          type="text"
          class="w-full py-2 pl-12 pr-4 rounded-lg h-[40px]"
          placeholder="Rechercher une annonce ..."
        />
      </div>
      <button class="absolute inset-y-0 right-0 flex items-center pr-5">
        <i class="fa-solid fa-sliders"></i>
      </button>
    </div>
    <div class="flex justify-between gap-6 px-3 py-2 text-lg text-gray-900">
      <span> <i class="fa-regular fa-circle-user"></i> </span>
      <span> <i class="fa-regular fa-bell"></i> </span>
      <span><i class="fa-solid fa-gear"></i></span>
    </div>
  </div>
</template>
