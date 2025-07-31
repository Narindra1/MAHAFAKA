<script setup>
import AppLayout from "../Layout/AppLayout.vue";
import Annonce from "../../components/molecules/Annonce.vue";
import MenuItem from "../../components/molecules/MenuItem.vue";
import { menus } from "../../data/menu";
import { reactive } from "vue";

const annonce = reactive({
  id: 374,
  titre: "Telma",
  lieu: "Antananarivo",
  contact: "0340000800",
  description_courte: "Telecom Malagasy",
  description_detaille:
    "Telma, 1er opérateur téléphonique à Madagascar, compte aussi parmi les importants fournisseurs d’accès à internet de l’île.",
  limited_date: "2025-06-07T10:19:10.000000Z",
  created_at: "2025-05-07T07:14:36.000000Z",
  website_url: null,
  is_website_pub: 0,
  parrain_numero: null,
  is_active: 1,
  hasLike: null,
  hasFavourite: null,
  pdf_viewer_url: "",
  menu: {
    id: 1,
    name: "telecommunication",
  },
  auteur_basic: {
    id: 4,
    pseudo: "admin",
    avatarUrl:
      "https://dev.mahafaka.com/images/avatar/Lapin_rabbit_10,000Ar.jpg",
  },
  images: [
    {
      id: 1062,
      url: "https://dev.mahafaka.com/storage/images/menus/quotidien/2025-05-08_03-39-58-681bfd5e21c88.jpeg",
      url_min:
        "https://dev.mahafaka.com/storage/images/menus/quotidien/2025-05-08_03-39-58-681bfd5e21c88_min.jpeg",
    },
  ],
});
</script>
<template>
  <AppLayout>
    <div class="w-[30vw] p-2">
      <Annonce :annonce="annonce" :detailed="true" />
    </div>
    <div class="p-2 flex gap-2 justify-start items-start">
      <template class="" v-for="(menu, index) in menus" :key="index">
        <MenuItem :menu="menu" />
      </template>
    </div>
  </AppLayout>
</template>
