<template>
  <v-menu
    open-on-hover
    open-delay="500"
    :close-on-content-click="false"
    v-model="menu"
    location="bottom"
  >
    <template v-slot:activator="{ props }">
      <div v-bind="props">
        <slot />
      </div>
    </template>
    <v-card
      color="surface-light"
      rounded="xl"
      max-width="70"
      class="d-flex justify-center align-center py-1"
    >
      <v-icon size="25" icon="mdi-trash-can" class="me-2" />
      <v-icon size="25" icon="mdi-pencil" />
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref(false);
</script>
