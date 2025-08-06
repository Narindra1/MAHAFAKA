<script setup>
const props = defineProps({
  partenaire: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <img
    :src="props.partenaire.images[0].url"
    alt="Annonce"
    class="rounded-lg w-[105px] h-[60px]"
  />
</template>
