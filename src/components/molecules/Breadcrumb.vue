<script setup>
import Breadcrumb from "primevue/breadcrumb";
import { ref } from "vue";

const props = defineProps({
  menuGroup: {
    type: Object,
    required: true,
  },
});
const home = ref({
  icon: "pi pi-home",
  route: "/",
});
const items = ref([
  { label: props.menuGroup[0].nom, route: "menu1" },
  // { label: props.menuGroup[0].child[1].nom, route: "menu2" },
  // { label: props.menuGroup[0].child[1].child[0].nom, route: "menu3" },
]);
</script>

<template>
  <div class="card flex justify-center bg-[#0000] px-8 pt-2">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-black font-bold">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0 text-black">{{
            item.label
          }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>
<style scoped>
.p-breadcrumb {
  background-color: transparent;
}
:deep(.p-breadcrumb-separator-icon) {
  color: black !important;
}

:deep(.p-breadcrumb-item-link) {
  color: black !important;
}
</style>
