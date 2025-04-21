<template>
  <FilterButtonsScreenshots />
  <v-container fluid>
    <div class="d-flex align-center">
      <div class="me-1">Daily total:</div>
      <strong class="text-h6" style="color: #5c6bc0">07:00:01</strong>
    </div>
    <v-timeline density="compact" align="start" side="end">
      <v-timeline-item size="small" dot-color="#5c6bc0" width="100%">
        <div>
          <div class="d-flex">
            <strong class="me-4">07:00 am - 08:00 am</strong>
            <div class="me-1">total time worked:</div>
            <strong class="me-4">0:48:01</strong>
          </div>
          <ImagesTimeline :images="images" />
        </div>
      </v-timeline-item>
      <v-timeline-item size="small" dot-color="#5c6bc0" width="100%">
        <div>
          <div class="d-flex">
            <strong class="me-4">08:00 am - 09:00 am</strong>
            <div class="me-1">total time worked:</div>
            <strong class="me-4">0:48:01</strong>
          </div>
          <ImagesTimeline :images="images" />
        </div>
      </v-timeline-item>
      <v-timeline-item size="small" dot-color="#5c6bc0" width="100%">
        <div>
          <div class="d-flex">
            <strong class="me-4">10:00 am - 11:00 am</strong>
            <div class="me-1">total time worked:</div>
            <strong class="me-4">0:48:01</strong>
          </div>
          <ImagesTimeline :images="images" />
        </div>
      </v-timeline-item>
    </v-timeline>

    <!-- <Gallery -->
    <!--   :images="images" -->
    <!--   :imageWidth="imageWidth" -->
    <!--   :popUpMaxWidth="popUpMaxWidth" -->
    <!--   :mdCols="mdCols" -->
    <!--   :smCols="smCols" -->
    <!--   :xsCols="xsCols" -->
    <!--   :lgCols="lgCols" -->
    <!-- /> -->
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const images = ref([]);

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

const imageWidth = 1120;
// const imageHeight = 650;
const popUpMaxWidth = 1120;
const mdCols = 4;
const smCols = 4;
const xsCols = 6;
const lgCols = 3;
</script>
