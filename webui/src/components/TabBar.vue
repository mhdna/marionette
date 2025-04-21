<template>
  <!-- What is v-model=tab for?  -->
  <!-- v-model="tab" -->

  <v-tabs
    align-tabs="title"
    v-if="tabs.length > 0"
    bg-color="deep-purple-darken-4"
    center-active
  >
    <v-tab
      v-for="(tab, index) in tabs"
      :key="index"
      :text="tab.text"
      :value="tab.to"
      :to="tab.to"
    ></v-tab>
  </v-tabs>
</template>

<script lang="ts" setup>
interface Tab {
  text: string;
  to: string;
}

defineProps<{
  tabs: Tab[];
}>();
</script>
