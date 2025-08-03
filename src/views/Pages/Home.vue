<script setup>
import AppLayout from "../Layout/AppLayout.vue";
import Annonce from "../../components/molecules/Annonce.vue";
import MenuItem from "../../components/molecules/MenuItem.vue";
import Card from "../../components/molecules/Card.vue";
import AnnonceDetail from "../../components/molecules/AnnonceDetail.vue";
import AnnonceGroup from "../../components/molecules/AnnonceGroup.vue";
import AnnonceMin from "../../components/molecules/AnnonceMin.vue";
import { menu } from "../../data/menu";
import { sousmenus } from "../../data/sousMenu";
import { annonces } from "../../data/annonce";
import CarrouselMenu from "../../components/molecules/CarrouselMenu.vue";
import Partenaire from "../../components/molecules/Partenaire.vue";
import { partenaires } from "../../data/partenaire";
</script>
<template>
  <AppLayout>
    <!--<div class="w-[30vw] p-2">
      <Annonce :annonce="annonces" :detailed="true" />
    </div>
    <div class="w-[30vw] p-2">
      <AnnonceDetail :annonce="annonces" />
    </div>
    <div class="w-[30vw] p-2">
      <AnnonceMin :annonce="annonces" />
    </div>
    <div class="w-[30vw] p-2">
      <Card>
        <template #img v-for="(annonce, index) in annonces" :key="index">
          <img
            :src="annonce.images[0]?.url"
            alt="Annonce"
            class="w-full aspect-[16/9]"
        /></template>
        <template #titre>{{ annonces.titre }}</template>
        <template #menu>{{ annonces.menu.name }}</template>
        <template #body
          ><p>par {{ annonces.auteur_basic.pseudo }}</p>
          <p>- Il y a {{ "7 heures" }}</p>
        </template>
        <template #description>
          {{ annonce.description_detaille }}
        </template>
      </Card>
    </div> -->
    <div class="flex gap-5 py-5 px-50">
      <div v-for="(partenaire, index) in partenaires" :key="index">
        <Partenaire :partenaire="partenaire" />
      </div>
    </div>
    <CarrouselMenu />

    <AnnonceGroup>
      <template #AnnonceHeader>{{ menu[0].nom }}</template>
      <template #AnnonceMenu>
        <MenuItem
          v-for="(menu, index) in sousmenus"
          :key="index"
          :sousmenu="menu"
        />
      </template>
      <template #AnnonceList>
        <AnnonceMin
          v-for="(annonce, index) in annonces"
          :key="index"
          :annonce="annonce"
        />
      </template>
    </AnnonceGroup>
    <!-- <div class="p-2 flex gap-2 justify-start items-start">
      <template class="" v-for="(menu, index) in menus" :key="index">
        <MenuItem :menu="menu" />
      </template>
    </div> -->
  </AppLayout>
</template>
