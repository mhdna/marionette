<template>
  <v-card rounded="lg" class="w-100 mb-4">
    <div
      class="d-flex align-center justify-space-between pt-2 px-4 pb-2 mb-4 font-weight-bold bg-surface-light"
    >
      Add URL
      <v-spacer />
      <!-- <v-btn -->
      <!--   class="px-2" -->
      <!--   prepend-icon="mdi-tune" -->
      <!--   variant="text" -->
      <!--   text="Manage categories" -->
      <!--   border -->
      <!-- ></v-btn> -->
      <!-- @click="toggleCategoriesManagerDialog" -->
    </div>
    <div class="d-flex px-4 flex-column">
      <div class="d-flex flex-column">
        <div class="d-flex justify-space-between">
          <!-- <v-textarea label="Text" counter></v-textarea> -->
          <!-- :model-value="value" -->
          <!-- :rules="rules" -->
          <div class="d-flex w-100">
            <!-- <div class="mt-2 me-2 text-surface-variant">From:</div> -->
            <v-text-field density="compact" v-model="value" placeholder="URL">
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
        </div>

        <div class="d-flex">
          <v-select
            class="flex-1-1-100 me-3"
            density="compact"
            :items="['Black', 'Gray', 'White']"
            label="Type"
          ></v-select>

          <v-select
            density="compact"
            class="flex-1-1-100 me-3"
            :items="['group1', 'group2']"
            label="Group"
          ></v-select>

          <!-- TODO add categories -->

          <v-select
            density="compact"
            class="flex-1-1-100 me-3"
            :items="['Gambling', 'Weapons']"
            label="Phrase Position"
          ></v-select>

          <v-select
            density="compact"
            class="flex-1-1-100"
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
      <!-- </div> -->
      <!-- </v-col> -->
    </div>
    <v-card-actions>
      <v-btn text="Clear" variant="plain" @click="dialog = false"></v-btn>

      <v-spacer></v-spacer>

      <v-btn text="Add Phrase(s)" @click="save"></v-btn>
    </v-card-actions>
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
