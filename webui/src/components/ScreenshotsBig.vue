<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";

const currentSlide = ref("");
const images = ref([]);

async function fetchImages() {
  try {
    const response = await axios.get("http://localhost:8045/getimages");
    images.value = response.data;
  } catch (error) {
    console.error("Error fetching image list: ", error);
  }
}

onMounted(fetchImages);

const slideTo = (nextSlide: string) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade",
  mouseDrag: false,
  touchDrag: false,
  height: 320,
};

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
};
</script>

<template>
  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
    <Slide v-for="(url, index) in images" :key="index">
      <img
        :src="`http://localhost:8045${url}`"
        alt="Gallery Image"
        class="gallery-image"
      />
    </Slide>
  </Carousel>

  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="(url, index) in images" :key="index">
      <template #default="{ currentIndex, isActive }">
        <div
          :class="['thumbnail', { 'is-active': isActive }]"
          @click="slideTo(currentIndex)"
        >
          <img
            :src="`http://localhost:8045${url}`"
            alt="Thumbnail Image"
            class="thumbnail-image"
          />
        </div>
      </template>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
