<template>
  <div class="d-flex align-center">
    <v-icon
      icon="mdi-chevron-right"
      :class="`mx-2 me-0 ${isRtl ? 'flip-in-rtl' : ''}`"
    />
    <v-breadcrumbs :items="items"> </v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  isRtl: boolean;
}>();

const items = ref([
  {
    title: "Dashboard",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    title: "Link 1",
    disabled: false,
    href: "breadcrumbs_link_1",
  },
]);
</script>
