<script setup>
import Card from "./Card.vue";

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
  <Card>
    <template #img
      ><img
        :src="annonce.images[0].url"
        alt="Annonce"
        class="w-full aspect-[16/9]"
    /></template>
    <template #titre>{{ annonce.titre }}</template>
    <template #menu>{{ annonce.menu.name }}</template>
    <template #body
      ><p>par {{ annonce.auteur_basic.pseudo }}</p>
      <p>- Il y a {{ "7 heures" }}</p>
    </template>

    <template #description>
      {{ annonce.description_courte }}
    </template>
  </Card>
</template>
