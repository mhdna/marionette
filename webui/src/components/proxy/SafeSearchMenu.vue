<template>
  <v-menu :close-on-content-click="false" v-model="menu" location="bottom">
    <template v-slot:activator="{ props }">
      <div v-bind="props">
        <slot />
      </div>
    </template>
    <SafeSearchCard />

    <!-- <v-card-actions> -->
    <!--   <v-btn variant="text" text="Close" @click="resetUserSettings" /> -->
    <!--   <v-spacer /> -->
    <!--   <v-btn -->
    <!--     variant="text" -->
    <!--     disabled -->
    <!--     text="Reset" -->
    <!--     @click="resetUserSettings" -->
    <!--   /> -->
    <!--   <v-btn -->
    <!--     color="primary" -->
    <!--     variant="text" -->
    <!--     text="Save" -->
    <!--     @click="saveUserSettings" -->
    <!--   /> -->
    <!-- </v-card-actions> -->
  </v-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref(false);

// const { color } = defineProps<{
//   user_id: string;
// }>();
</script>
