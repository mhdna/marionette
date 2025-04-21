<template>
  <v-progress-circular v-if="loading" color="green" indeterminate>
  </v-progress-circular>
  <slot v-else></slot>
</template>

<script lang="ts">
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.loader-container {
  position: relative;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
