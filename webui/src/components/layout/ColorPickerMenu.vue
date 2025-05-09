<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <v-icon icon="mdi-circle" size="large" :color="color" v-bind="props" />
    </template>
    <v-card>
      <v-color-picker
        v-model="c"
        mode="hex"
        :swatches="swatches"
        show-swatches
      ></v-color-picker>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref(false);

const { color } = defineProps<{
  color: string;
}>();

const c = ref(color);

const swatches = [
  ["#FF0000", "#AA0000", "#550000"],
  ["#FFFF00", "#AAAA00", "#555500"],
  ["#00FF00", "#00AA00", "#005500"],
  ["#00FFFF", "#00AAAA", "#005555"],
  ["#0000FF", "#0000AA", "#000055"],
];
</script>
