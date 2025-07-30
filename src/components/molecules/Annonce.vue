<script setup>
const props = defineProps({
  annonce: {
    type: Object,
    required: true,
  },
  detailed: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
<template>
  <div
    class="w-full min-w-[300px] h-full rounded-lg [box-shadow:0_1.29px_10px_1.3px_rgba(0,0,0,0.25)] bg-white"
  >
    <img
      :src="annonce.images[0].url"
      alt="Annonce"
      class="w-full aspect-[16/9]"
    />
    <div class="px-[1.2rem] py-[1rem] flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <p class="text-black font-bold text-2xl">{{ annonce.titre }}</p>
        <p class="bg-green-300 rounded-xl p-2 text-white text-sm">
          {{ annonce.menu.name }}
        </p>
      </div>
      <div v-if="props.detailed" class="">
        <div class="flex gap-2 text-lg mb-1 text-gray-400">
          <p>par {{ annonce.auteur_basic.pseudo }}</p>
          <p>- Il y a {{ "7 heures" }}</p>
          <!-- <p>- Il y a {{ annonce.created_at }}</p> -->
        </div>
        <div class="text-lg font-normal text-stone-700">
          <p>{{ annonce.description_detaille }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
