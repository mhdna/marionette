<template>
  <div>
    <v-btn @click="dialog = true" prepend-icon="mdi-image">{{ content }}</v-btn>
    <v-dialog
      v-model="dialog"
      transition="fade-transition"
      :width="popUpMaxWidth"
    >
      <v-lazy>
        <v-card title="Screenshots">
          <GalleryView />
        </v-card>
      </v-lazy>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>();

import { ref } from "vue";

const dialog = ref(false);
</script>
