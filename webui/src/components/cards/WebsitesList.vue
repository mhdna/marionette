<template>
  <v-card title="Most visited Domain names" flat>
    <div v-for="(domain, index) in domains" :key="index" class="px-4">
      <v-card
        hover
        flat
        rounded="lg"
        class="px-10 py-1 mb-2 d-flex justify-space-between align-center"
      >
        <div style="width: 6%">
          <v-chip
            density="compact"
            class="py-0 px-2 me-4 d-flex justify-center"
            >{{ index + 1 }}</v-chip
          >
        </div>
        <div style="width: 50%">
          {{ domain }}
        </div>
        <v-chip density="compact" class="py-0 me-2">800 hits</v-chip>
        <v-progress-linear
          style="width: 40%"
          width="80"
          buffer-opacity="1"
          buffer-value="3"
          color="red-darken-4"
          max="100"
          min="1"
          model-value="66"
          rounded
          height="10"
        >
          <!-- buffer-color="#ff0000" -->
          <!-- <strong>{{ 28 }}%</strong> -->
        </v-progress-linear>
      </v-card>
    </div>
    <v-pagination rounded density="compact"></v-pagination>
    <!-- v-model="page" -->
    <!-- :length="pageCount" -->
  </v-card>
</template>

<script setup lang="ts">
const domains = [
  "google.com",
  "youtube.com",
  "facebook.com",
  "amazon.com",
  "wikipedia.org",
  "twitter.com",
  "instagram.com",
  "linkedin.com",
  "netflix.com",
  "yahoo.com",
];

import { ref } from "vue";

const value = ref(28);
</script>
