<template>
  <!-- TODO use v-list  -->
  <v-card flat class="px-4 mx-1" :title="title">
    <v-row
      class="py-1 align-center"
      v-if="categories.length > 0"
      v-for="(category, index) in categories"
      :key="index"
    >
      <v-switch color="#ff0000" :label="category" hide-details />
      <v-spacer />
      <v-avatar size="22" color="red" @click="toggleColorPicker" />
      <!-- prepend-icon="$vuetify" -->
    </v-row>

    <v-empty-state
      v-else
      icon="mdi-magnify"
      action-text="Add your own category"
      title="Could not find any categories."
    ></v-empty-state>
    <!-- TODO @click:action="onClickAction" -->
  </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

defineProps<{
  categories: string[];
  title: string;
}>();

const appStore = useAppStore();

function toggleColorPicker() {
  appStore.colorPickerDialog = true;
}
</script>
