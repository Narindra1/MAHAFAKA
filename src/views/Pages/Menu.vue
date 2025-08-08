<script setup>
import AppLayout from "../Layout/AppLayout.vue";
import Partenaire from "../../components/molecules/PartenaireList.vue";
import Breadcrumb from "../../components/molecules/Breadcrumb.vue";
import AnnonceGroup from "../../components/molecules/AnnonceGroup.vue";
import AnnonceDetail from "../../components/molecules/AnnonceDetail.vue";
import AnnonceMin from "../../components/molecules/AnnonceMin.vue";
import { partenaires } from "../../data/partenaire";
import { menusGroups } from "../../data/menuGroups";
import { annonces } from "../../data/annonces";
</script>
<template>
  <AppLayout>
    <div class="w-full flex justify-center">
      <div
        class="grid sm:grid-cols-6 grid-cols-4 sm:grid-rows-2 grid-rows-3 sm:gap-x-4 gap-x-2 gap-y-2 px-2 py-[30px] max-w-[800px]"
      >
        <template v-for="(partenaire, index) in partenaires" :key="index">
          <Partenaire :partenaire="partenaire" />
        </template>
      </div>
    </div>
    <div class="bg-[#FFC107] h-[300px]">
      <Breadcrumb :menuGroup="menusGroups" />
      <div class="w-full flex justify-center">
        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnnonceDetail
            v-for="(annonce, index) in annonces.slice(0, 3)"
            :key="index"
            :annonce="annonce"
          />
        </div>
      </div>
    </div>
    <AnnonceGroup
      v-for="menuGroup in menusGroups.slice(0, 1)"
      class="flex items-start pt-50"
    >
      <template #AnnonceHeader>Premium</template>

      <template #AnnonceList>
        <AnnonceMin
          v-for="(annonce, index) in menuGroup.annonces_recent.slice(0, 3)"
          :key="index"
          :annonce="annonce"
        />
      </template>
    </AnnonceGroup>
    <div class="">
      <p class="text-black text-[1.4rem] font-bold px-5 pt-5">
        Tous les annonces
      </p>
      <AnnonceGroup v-for="menuGroup in menusGroups">
        <template #AnnonceList>
          <AnnonceMin
            v-for="(annonce, index) in menuGroup.annonces_recent"
            :key="index"
            :annonce="annonce"
          />
        </template>
      </AnnonceGroup>
    </div>
  </AppLayout>
</template>
