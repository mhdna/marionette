<template>
  <v-card class="mx-2 w-100 px-6 pb-4 ma-4">
    <div class="d-flex flex-column">
      <div class="pt-2 pb-4 font-weight-bold">Add Phrase</div>
      <div class="d-flex justify-space-between">
        <v-text-field
          density="compact"
          class="me-4"
          v-model="value"
          placeholder="Phrase"
          loading
        >
          <template v-slot:loader>
            <v-progress-linear
              :active="custom"
              :color="color"
              :model-value="progress"
              height="5"
              indeterminate
            ></v-progress-linear>
          </template>
        </v-text-field>
        <v-btn variant="tonal" style="height: 43px"> Add </v-btn>
      </div>
      <div class="d-flex">
        <v-radio-group label="Type">
          <v-radio label="Banned Phrase" value="one"></v-radio>
          <v-radio label="Exception Phrase" value="two"></v-radio>
          <div>
            <v-radio label="Weighted Phrase" value="three"></v-radio>
            <v-number-input
              max-width="160"
              disabled
              control-variant="split"
              inset
              density="compact"
            ></v-number-input>
          </div>
        </v-radio-group>
        <v-radio-group direction="horizontal" label="Position">
          <v-radio label="Begins With" value="one"></v-radio>
          <v-radio label="Ends With" value="two"></v-radio>
          <v-radio label="Contains" value="three"></v-radio>
          <v-radio label="Whole Word" value="four"></v-radio>
        </v-radio-group>
        <v-radio-group label="Position">
          <v-radio label="Begins With" value="one"></v-radio>
          <v-radio label="Ends With" value="three"></v-radio>
          <v-radio label="Contains" value="two"></v-radio>
          <v-radio label="Whole Word" value="two"></v-radio>
        </v-radio-group>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const slider1 = ref(50);

const naughtiness = ref(60);
const isPlaying = ref(false);

const color = computed(() => {
  if (naughtiness.value <= 60) return "brown";
  if (naughtiness.value <= 100) return "brown-darken-2";
  if (naughtiness.value <= 160) return "brown-darken-4";
  return "red";
});

function decrement() {
  naughtiness.value -= 10;
}
function increment() {
  naughtiness.value += 10;
}

function setVal(val: number) {
  naughtiness.value = val;
}
</script>
