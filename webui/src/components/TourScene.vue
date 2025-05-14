<template>
  <StagePlayScene
    :act-name="'basic'"
    :scene="props.sceneNumber"
    :voice-over-title="'Step1'"
    :voice-over-content="'Open the door of the refrigerator.'"
  >
    <slot />
  </StagePlayScene>
</template>

<script setup lang="ts">
import { StagePlayScene } from "vue-stage-play";

const props = defineProps<{
  sceneNumber: number;
}>();
</script>
