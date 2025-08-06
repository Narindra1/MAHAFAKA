<script setup>
import Card from "./Card.vue";

const props = defineProps({
  annonce: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <Card>
    <template #img
      ><img
        :src="props.annonce.images[0].url"
        alt="Annonce"
        class="w-full aspect-[20/9]"
    /></template>
    <template #titre>{{ props.annonce.titre }}</template>
    <template #menu>{{ props.annonce.menu.name }}</template>
  </Card>
</template>

<style>
.cardBody {
  display: none;
}
</style>
