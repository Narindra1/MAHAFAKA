<script setup>
const menuSpecials = [
  {
    id: 9,
    reference: "AA",
    url_icon: "",
    ordre: 1,
    annoncesTodayCount: 0,
    nom: "Maha Nouvelles",
    description: null,
    hasLike: null,
    content_type: null,
  },
  {
    id: 10,
    reference: "AB",
    url_icon: "",
    ordre: 2,
    annoncesTodayCount: 0,
    nom: "Promos & Nouveauté",
    description: null,
    hasLike: null,
    content_type: null,
  },
  {
    id: 11,
    reference: "AC",
    url_icon: "",
    ordre: 3,
    annoncesTodayCount: 0,
    nom: "Événement",
    description: null,
    hasLike: null,
    content_type: null,
  },
  {
    id: 12,
    reference: "AD",
    url_icon: "",
    ordre: 4,
    annoncesTodayCount: 0,
    nom: "Education",
    description: null,
    hasLike: null,
    content_type: null,
  },
  {
    id: 13,
    reference: "AE",
    url_icon: "",
    ordre: 5,
    annoncesTodayCount: 0,
    nom: "Santé",
    description: null,
    hasLike: null,
    content_type: null,
  },
  {
    id: 14,
    reference: "AF",
    url_icon: "",
    ordre: 6,
    annoncesTodayCount: 0,
    nom: "Vétérinaire",
    description: null,
    hasLike: null,
    content_type: null,
  },
];
</script>
<template>
  <div class="flex justify-center items-center gap-2 p-5">
    <div
      class="bg-[#441308] py-3 px-5 mx-0 rounded-lg text-neutral-300"
      v-for="menu in menuSpecials"
      :key="menu.id"
    >
      {{ menu.nom }}
    </div>
  </div>
</template>
