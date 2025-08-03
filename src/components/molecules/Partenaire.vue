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
    class="rounded-2xl"
  />
</template>
