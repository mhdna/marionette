<template>
  <v-card class="mx-auto">
    <div>
      <!-- class="text-h4" -->
      Naugtiness limit:
      <!-- <span class="text-h5 font-weight-light" v-text="naughtiness"></span> -->
      <!-- <v-spacer></v-spacer> -->
    </div>
    <v-slider
      v-model="naughtiness"
      thumb-label
      :color="color"
      :step="10"
      max="300"
      min="10"
      track-color="grey"
    >
      <template v-slot:prepend>
        <v-btn
          :color="color"
          icon="mdi-minus"
          size="small"
          variant="text"
          @click="decrement"
        ></v-btn>
      </template>

      <template v-slot:append>
        <v-btn
          :color="color"
          icon="mdi-plus"
          size="small"
          variant="text"
          @click="increment"
        ></v-btn>
      </template>
    </v-slider>
    <div class="text-center">
      Presets:
      <v-btn color="cyan" @click="setVal(60)">60: Best for children</v-btn>
      <v-btn color="blue" @click="setVal(100)"
        >100: Best for old children</v-btn
      >
      <v-btn color="blue-darken-4" @click="setVal(160)"
        >160: Best for young adults</v-btn
      >
    </div>
  </v-card>
  <!-- TODO this isn't complete, you have to define the record in script and you should add to save button the save function -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card :title="`${isEditing ? 'Edit' : 'Add'} a Phrase`">
      <template v-slot:text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Phrase"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Group"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-select
              :items="['Black', 'Gray', 'White']"
              label="Type"
            ></v-select>
          </v-col>
        </v-row>
      </template>

      <v-divider></v-divider>

      <v-card-actions class="bg-surface-light">
        <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>

        <v-spacer></v-spacer>

        <v-btn text="Save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-row>
    <v-card>
      <v-card title="Weighted Phrases List"></v-card>
      <div class="text-center">
        <v-chip v-for="n in 40" class="ma-2" color="green">Phrase +20</v-chip>
        <v-chip v-for="n in 40" class="ma-2" color="red">Phrase -20</v-chip>
      </div>
    </v-card>
  </v-row>
</template>

<script lang="ts" setup>
import { onMounted, shallowRef, computed, ref } from "vue";

const slider1 = ref(50);

const naughtiness = ref(60);
const isPlaying = ref(false);

const color = computed(() => {
  if (naughtiness.value <= 60) return "cyan";
  if (naughtiness.value <= 100) return "blue";
  if (naughtiness.value <= 160) return "blue-darken-4";
  return "red";
});

const dialog = shallowRef(false);
const isEditing = shallowRef(false);

function add() {
  isEditing.value = false;
  dialog.value = true;
}

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

<route lang="yaml">
meta:
  layout: proxy
</route>
