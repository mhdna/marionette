<template>
  <v-card id="websites-list" flat>
    <v-divider></v-divider>
    <v-data-table
      density="compact"
      v-model:search="search"
      :filter-keys="['name']"
      :items="items"
      items-per-page="10"
      :hide-default-header="true"
      :hide-default-footer="true"
    >
    </v-data-table>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

const search = ref("");

const items = [
  { name: "google.com", hits: 900 },
  { name: "youtube.com", hits: 200 },
  { name: "facebook.com", hits: 400 },
  { name: "amazon.com", hits: 350 },
  { name: "wikipedia.org", hits: 325 },
  { name: "twitter.com", hits: 342 },
  { name: "instagram.com", hits: 124 },
  { name: "linkedin.com", hits: 32 },
  { name: "netflix.com", hits: 12 },
  { name: "yahoo.com", hits: 2 },
];
</script>
