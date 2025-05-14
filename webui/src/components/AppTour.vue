<template>
  <!-- <div> -->
  <!-- <button -->
  <!--   @click="startTour" -->
  <!--   class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4" -->
  <!-- > -->
  <!--   Start Tour -->
  <!-- </button> -->

  <slot />
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getCurrentInstance } from "vue";
import { tourSteps } from "./tourSteps";

const { proxy } = getCurrentInstance();

// Generate random IDs for your elements
// const titleId = `title-${generateRandomId()}`;
// const featureButtonId = `feature-btn-${generateRandomId()}`;

// Function to generate random ID
// function generateRandomId() {
//   return Math.random().toString(36).substring(2, 15);
// }
import { useRoute } from "vue-router";

const route = useRoute();

const startTour = () => {
  const steps = tourSteps[route.path] || [];

  const options = {
    showBullets: true,
    showProgress: true,
    // scrollToElement: false,
    showStepNumbers: true,
    // dontShowAgain: true,
    scrollPadding: 10,
  };

  proxy.$startIntro(
    steps,
    () => {
      console.log("Tour completed!");
    },
    options
  );
};

onMounted(() => {
  setTimeout(() => {
    startTour();
  }, 500);
});
</script>
