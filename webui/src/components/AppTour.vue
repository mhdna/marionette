<template>
  <VTour :steps="steps" autoStart />
</template>

<script setup lang="ts">
import { VTour } from "@globalhive/vuejs-tour";
import "@globalhive/vuejs-tour/dist/style.css";

const steps = [
  {
    target: "#login_card",
    content:
      "Here you can see the summaries of current events with how much growth or drop.",
  },
  {
    target: "#live_preview",
    content: "Step 2",
  },
];
</script>
