<template>
  <v-card
    rounded="md"
    border="sm"
    link
    hover
    height="90"
    class="d-flex flex-1 justify-center px-8 align-center w-100"
  >
    <v-icon :icon="props.icon" size="45" class="me-8" />
    <div class="text-h6 d-flex justify-center align-center">
      {{ props.title }}
    </div>
    <!-- <div class="text-grey text-center" style="width: 60%"> -->
    <!--   Setup on local computer without letting others use it. -->
    <!-- </div> -->
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  icon: string;
}>();
</script>
