<script setup></script>
<template>
  <div
    class="z-10 relative flex justify-between items-center bg-[#FBFBFB] border-b-2 border-gray-200 h-auto w-full px-5 py-3"
  >
    <div class="flex gap-6 md:gap-[127px] items-center md:w-auto grow-1">
      <div class="py-2 px-3 flex gap-3 flex items-center">
        <div class="h-[40px] w-[40px]">
          <img src="/img/ic_mahafaka.png" alt="logo-mahafaka" />
        </div>

        <p class="text-20 md:text-[24px] font-medium text-secondaire">
          Mahafaka
        </p>
      </div>
      <div
        class="relative bg-search flex grow-1 mr-[10%] justify-between items-center gap-8 rounded-lg text-lg py-[8px]"
      >
        <div class="w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none"
          >
            <span>
              <i class="fa-solid fa-magnifying-glass text-iconeSearch"></i>
            </span>
          </div>
          <input
            type="text"
            class="w-full min-w-[370px] py-2 pl-12 pr-4 rounded-lg h-[40px] font-normal text-[20px] text-[#8A9CA7] focus:outline-none focus:border-none focus:ring-0"
            placeholder="Rechercher une annonce ..."
          />
        </div>
        <button
          class="absolute inset-y-0 right-0 flex items-center pr-5 text-iconeSearch"
        >
          <i class="fa-solid fa-sliders"></i>
        </button>
      </div>
    </div>
    <div
      class="flex justify-between items-center gap-8 w-full md:w-auto mt-4 md:mt-0 px-3 py-2 text-xl text-gray-600"
    >
      <span> <i class="fa-regular fa-circle-user"></i> </span>
      <span> <i class="fa-regular fa-bell"></i> </span>
      <span><i class="fa-solid fa-bars"></i></span>
    </div>
  </div>
</template>
