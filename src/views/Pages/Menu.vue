<script setup>
import Paginator from "primevue/paginator";
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
    <div class="bg-[#FDC300] sm:h-[320px] relative">
      <Breadcrumb :menuGroup="menusGroups" class="flex justify-start" />
      <div class="w-full flex justify-center items-center flex-col gap-7">
        <p class="text-center text-black font-semibold text-4xl pb-2">
          {{ menusGroups[0].nom }}
        </p>
        <div class="grid grid-cols-3 gap-4 max-w-[1000px] w-full">
          <AnnonceDetail
            v-for="(annonce, index) in annonces.slice(0, 3)"
            :key="index"
            :annonce="annonce"
          />
        </div>
      </div>
    </div>
    <div class="px-25">
      <AnnonceGroup
        v-for="menuGroup in menusGroups.slice(0, 1)"
        class="flex items-start pt-40"
      >
        <template #AnnonceHeader>Premium</template>

        <template #AnnonceList>
          <AnnonceMin
            v-for="(annonce, index) in menuGroup.annonces_recent.slice(0, 3)"
            :key="index"
            :annonce="annonce"
            class="border"
            style="border-color: #fdc300"
          />
        </template>
      </AnnonceGroup>
      <p class="text-black text-[1.4rem] font-bold pt-5">Tous les annonces</p>
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

    <div class="card">
      <Paginator
        :rows="10"
        :totalRecords="120"
        :rowsPerPageOptions="[10, 20, 30]"
        template="PrevPageLink PageLinks NextPageLink"
      >
      </Paginator>
    </div>
  </AppLayout>
</template>
<style scoped>
:deep(.p-paginator) {
  background-color: transparent;
  margin: 20px;
}

:deep(.p-paginator-page),
:deep(.p-paginator .p-paginator-prev),
:deep(.p-paginator .p-paginator-next) {
  background-color: transparent;
  border: 1px solid #ccc;
  color: #250603;
  border-radius: 4px;
  margin: 0 5px;
}
:deep(.p-paginator .p-paginator-prev:hover),
:deep(.p-paginator .p-paginator-next:hover) {
  background-color: transparent !important;
  border-color: #250603;
  color: #250603;
}
:deep(.p-paginator-page:not(.p-paginator-page-selected):hover) {
  background-color: transparent !important;
  color: #250603;
  border-color: #bebebe;
}

:deep(.p-paginator-page.p-paginator-page-selected) {
  background-color: #d77205b8;
  color: white;
  border-color: #d77205b8;
  border-radius: 4px;
}
</style>
