<template>
  <v-card id="websites-list" flat>
    <v-divider></v-divider>
    <v-data-table
      density="compact"
      v-model:search="search"
      :filter-keys="['name']"
      :items="items"
      items-per-page="10"
      :hide-default-footer="true"
    >
      <template v-slot:item.hours="{ value }">
        <div
          class="d-flex justify-space-between align-center"
          style="width: 100%"
        >
          <div style="width: 40px">{{ value }}</div>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

const search = ref("");

const totalhours = 2000;

const items = [
  { name: "Comms", hours: 900 },
  { name: "Internet", hours: 200 },
  { name: "facebook.com", hours: 400 },
  { name: "amazon.com", hours: 350 },
  { name: "wikipedia.org", hours: 325 },
  { name: "twitter.com", hours: 342 },
  { name: "instagram.com", hours: 124 },
  { name: "linkedin.com", hours: 32 },
  { name: "netflix.com", hours: 12 },
  { name: "yahoo.com", hours: 2 },
];
</script>
