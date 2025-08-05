<script setup>
import { grandmenus } from "../../data/grandmenu";
import Carousel from "primevue/carousel";
import { ref } from "vue";

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "800px",
    numVisible: 3,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="bg-[#FFC107] px-[50px] py-[20px]">
    <p class="text-[30px] text-black font-semibold">Catégories</p>
    <div class="flex justify-center">
      <Carousel
        class="max-w-[1200px]"
        :value="grandmenus"
        :numVisible="4"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        :showIndicators="false"
        :nextButtonProps="{
          class: 'p-button-rounded',
          style: { background: '#eb9a06', color: 'white', border: 'none' },
        }"
        :prevButtonProps="{
          class: 'p-button-rounded',
          style: { background: '#eb9a06', color: 'white', border: 'none' },
        }"
      >
        <template #item="slotProps">
          <div
            class="border border-surface-200 dark:border-surface-700 bg-white flex flex-col items-center rounded-[10px] m-2 p-4 gap-3"
          >
            <div class="relative">
              <img
                :src="slotProps.data.icon"
                :alt="slotProps.data.icon"
                class="rounded"
              />
            </div>
            <div class="flex flex-col items-center justify-center gap-1">
              <div class="font-semibold text-[20px] text-black">
                {{ slotProps.data.nom }}
              </div>
              <div class="font-normal text-[#757575] text-center">
                {{ slotProps.data.description }}
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>
<style scoped></style>
