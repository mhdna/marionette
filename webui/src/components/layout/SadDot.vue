<template>
  <div
    class="circle d-flex justify-center align-center big-emoticon pb-2"
    :style="`width: ${size}px; height: ${size}px`"
  >
    :(
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size: number;
  }>(),
  {
    size: 26,
  },
);
</script>

<style>
.circle {
  /* position: absolute; */
  background: #c00;
  border-radius: 50%;
  box-shadow:
    0px 1px 9px 2px #c00,
    -2px -2px 191px 2px #c00;
  /* animation-name: rotate; */
  /* animation-duration: 3s; */
  /* animation-iteration-count: infinite; */
}

.big-emoticon {
  font-size: 85px;
  font-weight: bold;
  transform: rotate(30deg);
}
</style>
