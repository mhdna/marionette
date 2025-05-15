<template>
  <div class="pt-2 px-4 pb-2 mb-4 font-weight-bold bg-surface-light">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
