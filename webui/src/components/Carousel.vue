<template>
  <!-- <v-carousel hide-delimiters cycle height="500" v-model="model"> -->
  <!--   <v-carousel-item -->
  <!--     interval="2000" -->
  <!--     v-for="(image, index) in images" -->
  <!--     :value="index" -->
  <!--     :key="image" -->
  <!--     :src="getImageUrl(image)" -->
  <!--   /> -->
  <!-- </v-carousel> -->
  <!-- <v-sheet class="mx-auto"> -->

  <v-slide-group
    center-active
    v-model="model"
    selected-class="bg-success"
    show-arrows
  >
    <v-slide-group-item v-for="(image, index) in images" :key="index">
      <v-lazy>
        <v-card class="mx-1" height="180" width="100">
          <img rounded :src="getImageUrl(image)" class="thumbnail" />
        </v-card>
      </v-lazy>
    </v-slide-group-item>
  </v-slide-group>
  <!-- <v-card class="mx-1" height="120" width="160"> -->
  <!-- <v-dialog transition="v-fade-transition" width="auto">
            <template v-slot:activator="{ props: activatorProps }">
             -->
  <!-- v-bind="activatorProps" -->
  <!-- </template>

            <template v-slot:default="{ isActive }">
              <v-card :title="image" max-width="70vw" height="50vh">
                <img :src="`http://localhost:8045${image}`" />

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text="{{" @click="isActive.value = false"></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog> -->
  <!-- </v-card> -->
  <!-- </v-sheet> -->
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

const getImageUrl = (image: string) => `http://localhost:8045${image}`;

const model = ref(0);

const images = ref([]);

async function fetchImages() {
  try {
    const response = await axios.get("http://localhost:8045/getimages");
    images.value = response.data;
    model.value = 1;
  } catch (error) {
    console.error("Error fetching image list: ", error);
  }
}

// Reactive references for hover index and mouse position
const hoveredIndex = ref(null);
const mousePosition = ref({ x: 0, y: 0 });

// Function to handle when an image is hovered over
function showFullImage(index, event) {
  hoveredIndex.value = index;
  updateMousePosition(event);
}

// Function to hide the floating image when mouse leaves
function hideFullImage() {
  hoveredIndex.value = null;
}

// Function to update mouse position
function updateMousePosition(event) {
  mousePosition.value = { x: event.clientX, y: event.clientY };
}

onMounted(fetchImages);
</script>

<style scoped>
.thumbnail {
  height: 180px;
}
</style>
