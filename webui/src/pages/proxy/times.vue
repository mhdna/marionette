<template>
  <!-- <ScreenshotsBig /> -->
  <v-container>
    <v-row justify="center">
      <v-date-picker width="400"></v-date-picker>
    </v-row>
  </v-container>
  <v-row justify="space-around">
    <v-time-picker color="green-lighten-1"> </v-time-picker>

    <v-time-picker color="pink" header-color="primary"></v-time-picker>
  </v-row>

  <div class="d-flex justify-center">
    <v-date-input
      v-model="model"
      label="Select range"
      max-width="368"
      multiple="range"
    ></v-date-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const model = ref(null); // required for the date picker
</script>

<!-- <route lang="yaml"> -->
<!-- meta: -->
<!--   layout: proxy -->
<!-- </route> -->
