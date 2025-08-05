<script setup>
import { ref } from "vue";

const dropdownOpen = ref(false);
const props = defineProps({
  sousmenu: {
    type: Object,
    required: true,
  },
});

const childCount = props.sousmenu.child.length;
</script>
<template>
  <div
    class="max-w-[300px] flex flex-col gap-1 px-3 py-2 items-start rounded-xl bg-gray-100 [box-shadow:0_0_8px_-5px_rgba(0,0,0,1)]"
  >
    <div class="flex items-center gap-2">
      <label class="text-gray-800 font-bold">
        {{ sousmenu.nom }}
      </label>
      <span
        v-if="childCount"
        @click="dropdownOpen = !dropdownOpen"
        class="cursor-pointer"
      >
        <i
          class="fa-solid text-zinc-900"
          :class="dropdownOpen ? 'fa-angle-up' : 'fa-angle-down'"
        ></i>
      </span>
    </div>

    <div v-if="childCount && dropdownOpen" class="flex flex-wrap gap-2">
      <p
        v-for="(childSousMenu, i) in sousmenu.child"
        :key="i"
        class="rounded-lg py-1 px-2 bg-gray-200 text-center text-zinc-700 font-normal text-sm"
      >
        {{ childSousMenu.nom }}
      </p>
    </div>
  </div>
</template>
