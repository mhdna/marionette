<template>
  <v-container>
    <v-skeleton-loader :loading="loading" :type="type">
      <slot />
    </v-skeleton-loader>
  </v-container>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "paragraph",
    },
  },
};
</script>
