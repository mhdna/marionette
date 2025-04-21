<template>
  <v-row class="mt-0">
    <v-col>
      <v-text-field
        max-width="160"
        density="compact"
        v-model="start"
        :active="menu2"
        :focus="menu2"
        label="Start time"
        prepend-icon="mdi-clock"
        readonly
      >
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          activator="parent"
          transition="scale-transition"
        >
          <v-time-picker
            v-if="menu2"
            v-model="start"
            :max="end"
            full-width
          ></v-time-picker>
        </v-menu>
      </v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        v-model="end"
        :active="menu3"
        :focus="menu3"
        class="mx-2"
        max-width="120"
        density="compact"
        label="End Time"
        readonly
      >
        <v-menu
          v-model="menu3"
          :close-on-content-click="false"
          activator="parent"
          transition="scale-transition"
        >
          <v-time-picker
            v-if="menu3"
            :min="start"
            v-model="end"
            full-width
          ></v-time-picker>
        </v-menu>
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
const menu2 = ref(false);
const menu3 = ref(false);

const start = ref("00:00");
const end = ref("23:59");

watch(start, () => {
  console.log(typeof start.value);
});
</script>
