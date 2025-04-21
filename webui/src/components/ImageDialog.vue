<template>
  <v-dialog :model-value="dialog" :width="maxWidth">
    <!-- @update:model-value="dialog = $event" -->
    <!-- @click="dialog = false" -->
    <v-btn width="20px" color="primary" class="close-button" text>
      <v-icon class="red--text">mdi-close</v-icon>
    </v-btn>
    <v-card flat class="image-card">
      <v-img :src="imgSrc" :width="imageWidth" :height="imageHeight"></v-img>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="left-button" fab small outlined text @click="moveToLeft()"
          ><v-icon>mdi-arrow-left</v-icon></v-btn
        >
        <v-btn
          class="right-button"
          fab
          small
          outlined
          text
          @click="moveToRight()"
          ><v-icon>mdi-arrow-right</v-icon></v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    images: { id: number; imgSrc: string }[];
    dialog: boolean;
    maxWidth?: number;
    imageWidth?: number;
    imageHeight?: number | string;
  }>(),
  {
    maxWidth: 720,
    imageWidth: 720,
    imageHeight: "auto",
  },
);

const imgSrc = ref("");
const image_id = ref(0);

function moveToRight() {
  var lastElement = props.images[props.images.length - 1];
  if (lastElement.id >= image_id.value + 1) {
    image_id.value += 1;
    var newitem = props.images.find((item) => item.id === image_id.value);
    imgSrc.value = newitem?.imgSrc || "";
  }
}

function moveToLeft() {
  if (props.images[0].id <= image_id.value - 1) {
    image_id.value -= 1;
    var newitem = props.images.find((item) => item.id === image_id.value);
    imgSrc.value = newitem?.imgSrc || "";
  }
}
</script>

<style scoped>
.close-button {
  position: absolute;
  z-index: 1;
  margin: auto;
}
.action {
  display: block;
}
</style>
