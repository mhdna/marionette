<template>
  <Gallery
    :images="images"
    :imageWidth="imageWidth"
    :popUpMaxWidth="popUpMaxWidth"
    :mdCols="mdCols"
    :smCols="smCols"
    :xsCols="xsCols"
    :lgCols="lgCols"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const images = ref([]);

const getImageUrl = (image: string) => `http://localhost:8045${image}`;

async function fetchImages() {
  try {
    const response = await axios.get("http://localhost:8045/getimages");
    images.value = response.data.map((imgSrc: string, index: string) => ({
      id: index,
      imgSrc: `http://localhost:8045${imgSrc}`,
    }));
  } catch (error) {
    console.error("Error fetching image list: ", error);
  }
}

onMounted(fetchImages);

const imageWidth = 1150;
const imageHeight = 650;
const popUpMaxWidth = 1150;
const mdCols = 4;
const smCols = 4;
const xsCols = 6;
const lgCols = 3;
</script>
