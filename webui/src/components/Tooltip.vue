<template>
  <v-tooltip :text="text">
    <template v-slot:activator="{ props }">
      <slot />
    </template>
  </v-tooltip>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
