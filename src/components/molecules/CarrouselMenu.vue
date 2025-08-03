<script setup>
import { grandmenus } from "../../data/grandmenu";
import Carousel from "primevue/carousel";
import { ref } from "vue";

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
  // {
  //   breakpoint: "575px",
  //   numVisible: 1,
  //   numScroll: 1,
  // },
]);
</script>

<template>
  <div class="bg-yellow-500">
    <p class="text-2xl text-black font-medium p-5">Catégories</p>
    <Carousel
      :value="grandmenus"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div
          class="border border-surface-200 dark:border-surface-700 bg-gray-100 flex flex-col items-center rounded m-2 p-4"
        >
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="slotProps.data.icon"
                :alt="slotProps.data.icon"
                class="rounded"
              />
            </div>
          </div>
          <div class="mt-0 font-semibold text-xl text-stone-700">
            {{ slotProps.data.nom }}
          </div>
          <div class="mb-4 font-medium text-stone-500">
            {{ slotProps.data.description }}
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>
