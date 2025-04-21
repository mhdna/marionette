<template>
  <v-row>
    <v-col :md="6" :sm="6" :xs="12">
      <CategoriesCard
        title="Pre-defined Categories"
        :categories="bannedUrlCategories"
      />
    </v-col>
    <!-- <v-divider v-if="!xsAndDown" vertical thickness="3" /> -->
    <v-col :md="6" :sm="6" :xs="12">
      <CategoriesCard
        title="Your Categories"
        :categories="bannedUrlCategories"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";

const { xsAndDown } = useDisplay();

const bannedUrlCategories = [
  "Adware + malware",
  "Social",
  "Pornogoraphy",
  "Gambling",
];
</script>

<!-- <route lang="yaml"> -->
<!--   meta: -->
<!--   layout: proxy -->
<!-- </route> -->
