<template>
  <v-card
    class="justify-space-between d-flex flex-column mx-auto w-100 px-6 pb-4 ma-4"
    max-width="300"
    rounded="lg"
  >
    <div class="d-flex flex-column">
      <div class="d-flex justify-space-between mt-2">
        <div class="pt-1 font-weight-bold text-center text-body-1">
          Naugtiness limit
        </div>
      </div>
      <div class="flex-grow-1 d-flex flex-column pt-6">
        <!-- class="text-h4" -->
        <!-- <span class="text-h5 font-weight-light" v-text="naughtiness"></span> -->
        <!-- <v-spacer></v-spacer> -->
        <v-slider
          v-model="naughtiness"
          thumb-label="always"
          class="mt-4"
          :step="10"
          max="300"
          min="10"
          track-color="grey"
        >
          <!-- :color="color" -->
          <template v-slot:prepend>
            <v-btn
              icon="mdi-minus"
              size="small"
              variant="text"
              @click="decrement"
            ></v-btn>
          </template>

          <template v-slot:append>
            <v-btn
              icon="mdi-plus"
              size="small"
              variant="text"
              @click="increment"
            ></v-btn>
          </template>
        </v-slider>
        <div class="text-center d-flex flex-column justify-center align-center">
          <v-btn variant="tonal" class="mb-1 mx-2 w-100" @click="setVal(60)">
            <!-- color="red-darken-2 " -->
            60: Best for children
          </v-btn>
          <v-btn variant="tonal" class="mx-2 w-100 mb-1" @click="setVal(100)"
            >100: Best for old children</v-btn
          >
          <!-- color="yellow-darken-4" -->
          <v-btn variant="tonal" class="w-100" @click="setVal(160)"
            >160: Best for young adults
            <!-- color="cyan-darken-2" -->
          </v-btn>
        </div>
      </div>
    </div>
    <v-btn variant="tonal" disabled color="green">Apply</v-btn>
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
