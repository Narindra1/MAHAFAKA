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
    class="max-w-[300px] flex flex-col gap-1 px-3 py-2 items-start rounded-xl bg-gray-100 [box-shadow:0_1.29px_10px_1.3px_rgba(0,0,0,0.25)]"
  >
    <div class="flex items-center gap-2">
      <label class="text-black text-lg"> {{ sousmenu.nom }} </label>
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
        class="rounded-lg p-1 bg-gray-200 text-center text-zinc-900"
      >
        {{ childSousMenu.nom }}
      </p>
    </div>
  </div>
</template>
