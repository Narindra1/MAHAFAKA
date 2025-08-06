<script setup>
import AppLayout from "../Layout/AppLayout.vue";
import MenuItem from "../../components/molecules/MenuItem.vue";
import AnnonceGroup from "../../components/molecules/AnnonceGroup.vue";
import AnnonceMin from "../../components/molecules/AnnonceMin.vue";
import Partenaire from "../../components/molecules/PartenaireList.vue";
import { partenaires } from "../../data/partenaire";
import GrandMenuList from "../../components/molecules/GrandMenuList.vue";
import { menusGroups } from "../../data/menuGroups";
import MenuSpecial from "../../components/molecules/MenuSpecial.vue";
</script>
<template>
  <AppLayout>
    <div class="w-full flex justify-center">
      <!-- <div class="flex flex-col gap-4 p-5 max-w-[800px]">
        <div class="flex gap-4">
          <template
            v-for="(partenaire, index) in partenaires.slice(0, 6)"
            :key="index"
          >
            <Partenaire :partenaire="partenaire" />
          </template>
        </div>
        <div class="flex gap-4">
          <template
            v-for="(partenaire, index) in partenaires.slice(0, 6)"
            :key="index"
          >
            <Partenaire :partenaire="partenaire" />
          </template>
        </div>
      </div> -->
      <div
        class="grid sm:grid-cols-6 grid-cols-4 sm:grid-rows-2 grid-rows-3 sm:gap-x-4 gap-x-2 gap-y-2 px-2 py-[30px] max-w-[800px]"
      >
        <template v-for="(partenaire, index) in partenaires" :key="index">
          <Partenaire :partenaire="partenaire" />
        </template>
      </div>
    </div>
    <GrandMenuList />
    <MenuSpecial />

    <AnnonceGroup v-for="menuGroup in menusGroups">
      <template #AnnonceHeader>{{ menuGroup.nom }}</template>
      <template #AnnonceMenu>
        <MenuItem
          v-for="(menu, index) in menuGroup.child"
          :key="index"
          :sousmenu="menu"
        />
      </template>
      <template #AnnonceList>
        <AnnonceMin
          v-for="(annonce, index) in menuGroup.annonces_recent"
          :key="index"
          :annonce="annonce"
        />
      </template>
    </AnnonceGroup>
  </AppLayout>
</template>
