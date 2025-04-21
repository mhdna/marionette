<template>
  <!-- <v-card -->
  <!--   density="compact" -->
  <!--   class="align-center justify-center" -->
  <!--   flat -->
  <!--   title="Choose a Color" -->
  <!-- > -->
  <v-color-picker
    :swatches="swatches"
    class="ma-2"
    show-swatches
  ></v-color-picker>
  <!-- </v-card> -->
</template>

<script setup lang="ts">
const swatches = [
  ["#FF0000", "#AA0000", "#550000"],
  ["#FFFF00", "#AAAA00", "#555500"],
  ["#00FF00", "#00AA00", "#005500"],
  ["#00FFFF", "#00AAAA", "#005555"],
  ["#0000FF", "#0000AA", "#000055"],
];
</script>
