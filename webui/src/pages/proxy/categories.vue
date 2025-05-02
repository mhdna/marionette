<template>
  <v-container fluid>
    <v-card-title> Manage Categories </v-card-title>
    <v-card-text>
      <URLCategories />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="bg-surface-light">
      <!-- <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn> -->

      <v-spacer></v-spacer>

      <!-- <v-btn text="Save" @click="save"></v-btn> -->
    </v-card-actions>
  </v-container>
  <v-dialog
    v-model="appStore.colorPickerDialog"
    width="auto"
    height="auto"
    opacity="0"
    position="absolute"
    location-strategy="connected"
    scroll-strategy="reposition"
    :style="{ backgroundColor: 'transparent' }"
  >
    <ColorPickerDialog />
  </v-dialog>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
</script>
