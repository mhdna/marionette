<template>
  <v-tour name="myTour" :steps="steps"> </v-tour>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";

const steps = [
  {
    target: "#v-step-0", // We're using document.querySelector() under the hood
    header: {
      title: "Get Started",
    },
    content: `Discover <strong>Vue Tour</strong>!`,
  },
  {
    target: "#v-step-1", // We're using document.querySelector() under the hood
    header: {
      title: "Second Step",
    },
    content: `<strong>Hi</strong>!`,
  },
  {
    target: "#v-step-2", // We're using document.querySelector() under the hood
    header: {
      title: "Third Step",
    },
    content: `Here's something else <strong>Vue Tour</strong>!`,
    params: {
      placement: "top", // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
    },
  },
];

onMounted(() => {
  const { proxy } = getCurrentInstance();
  proxy.$tours["myTour"].start();
});
</script>
