<template>
  <v-card rounded="lg" class="pb-4">
    <div class="pt-2 px-4 pb-2 mb-4 font-weight-bold bg-surface-light">
      Add Redirect
    </div>
    <div class="d-flex px-4 flex-column">
      <div class="d-flex flex-column">
        <div class="d-flex justify-space-between">
          <!-- <v-textarea label="Text" counter></v-textarea> -->
          <!-- :model-value="value" -->
          <!-- :rules="rules" -->
          <div class="d-flex w-100 me-2">
            <div class="mt-2 me-2 text-surface-variant">From:</div>
            <v-text-field
              density="compact"
              class="me-2"
              v-model="value"
              placeholder="URL"
            >
              <!-- loading -->
              <!-- <template v-slot:loader> -->
              <!--   <v-progress-linear -->
              <!--     :active="custom" -->
              <!--     :color="color" -->
              <!--     :model-value="progress" -->
              <!--     height="5" -->
              <!--     indeterminate -->
              <!--   ></v-progress-linear> -->
              <!-- </template> -->
            </v-text-field>
          </div>
          <div class="d-flex w-100">
            <div class="mt-2 me-2 text-surface-variant">To:</div>
            <v-text-field density="compact" v-model="value" placeholder="URL" />
          </div>
        </div>

        <div class="d-flex">
          <v-select
            class="me-3"
            density="compact"
            :items="['Black', 'Gray', 'White']"
            label="Type"
          ></v-select>

          <v-select
            density="compact"
            class="me-3"
            :items="['group1', 'group2']"
            label="Group"
          ></v-select>

          <!-- TODO add categories -->

          <v-select
            density="compact"
            class="me-3"
            :items="['Gambling', 'Weapons']"
            label="Phrase Position"
          ></v-select>

          <v-select
            density="compact"
            :items="['Gambling', 'Weapons']"
            label="Category"
          ></v-select>
        </div>
      </div>

      <!-- <v-col> -->
      <!--   <v-radio-group label="Type"> -->
      <!--     <v-radio label="Banned Phrase" value="one"></v-radio> -->
      <!--     <v-radio label="Exception Phrase" value="two"></v-radio> -->
      <!--     <v-radio label="Weighted Phrase" value="three"></v-radio> -->
      <!--     <v-number-input -->
      <!--       max-width="160" -->
      <!--       disabled -->
      <!--       control-variant="split" -->
      <!--       inset -->
      <!--       density="compact" -->
      <!--     ></v-number-input> -->
      <!--   </v-radio-group> -->
      <!-- </v-col> -->
      <!-- <v-col> -->
      <!--   <v-radio-group label="Position"> -->
      <!--     <v-radio label="Begins With" value="one"></v-radio> -->
      <!--     <v-radio label="Ends With" value="two"></v-radio> -->
      <!--     <v-radio label="Contains" value="three"></v-radio> -->
      <!--     <v-radio label="Whole Word" value="four"></v-radio> -->
      <!--   </v-radio-group> -->
      <!-- </v-col> -->
      <!-- <v-col> -->
      <!-- <div class="d-flex flex-column"> -->
      <!-- <v-row> Others </v-row> -->
      <!--   <v-checkbox label="Regex" hide-details></v-checkbox> -->
      <!--   <RegexDialog /> -->
      <!-- </v-row> -->

      <!-- <v-row> -->
      <!--   <v-col> -->
      <!--     <v-select -->
      <!--       class="me-2" -->
      <!--       density="compact" -->
      <!--       :items="['Black', 'Gray', 'White']" -->
      <!--       label="Type" -->
      <!--     ></v-select> -->
      <!--   </v-col> -->

      <!--   <v-col> -->
      <!--     <v-select -->
      <!--       density="compact" -->
      <!--       :items="['group1', 'group2']" -->
      <!--       label="Group" -->
      <!--     ></v-select> -->
      <!--   </v-col> -->

      <!--   <v-col> -->
      <!--     <v-select -->
      <!--       density="compact" -->
      <!--       :items="['Gambling', 'Weapons']" -->
      <!--       label="Category" -->
      <!--     ></v-select> -->
      <!--   </v-col> -->
      <!-- </v-row> -->
      <v-row class="mt-0">
        <v-spacer />
        <v-btn class="mb-1 me-3" variant="tonal"> Add Phrase(s) </v-btn>
        <!-- style="height: 43px" -->
      </v-row>
      <!-- </div> -->
      <!-- </v-col> -->
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
