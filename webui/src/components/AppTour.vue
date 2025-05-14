<script setup>
import { StagePlaySpotlight, useStagePlay } from "vue-stage-play";

const { action } = useStagePlay();
</script>

<template>
  <StagePlaySpotlight>
    <button @click="action('basic')">Start</button>
    <slot />
  </StagePlaySpotlight>
</template>
