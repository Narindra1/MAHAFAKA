<script setup>
import Breadcrumb from "primevue/breadcrumb";
import { menusGroups } from "../../data/menuGroups";
import { ref } from "vue";

const home = ref({
  icon: "pi pi-home",
  route: "/introduction",
});
const items = ref([
  { label: menusGroups[0].nom },
  { label: menusGroups[0].child[1].nom },
  { label: menusGroups[0].child[1].child[0].nom },
]);
</script>

<template>
  <div class="card flex justify-center bg-[#FFC107]">
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
            <span class="text-primary font-semibold">{{ item.label }}</span>
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
</style>
