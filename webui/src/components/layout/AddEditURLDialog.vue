<!-- TODO to continue -->

<template>
  <v-dialog v-model="props.dialog" max-width="700">
    <v-card>
      <v-card-title>
        <!-- <v-card-title class="d-flex justify-space-between"> -->
        {{ props.isEditing ? "Edit" : "Add" }} URL
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="record.url" label="URL"></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-row>
              <v-checkbox
                v-model="record.isregex"
                label="Regex"
                hide-details
              ></v-checkbox>
              <RegexDialog />
            </v-row>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="record.type"
              :items="['Black', 'Gray', 'White']"
              label="Type"
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="record.group"
              :items="['group1', 'group2']"
              label="Group"
            ></v-select>
          </v-col>

          <!-- TODO add categories -->
          <v-col cols="12" md="4">
            <v-select
              v-model="record.category"
              :items="['Gambling', 'Weapons']"
              label="Category"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-text-field
            v-model="startTime"
            :active="menuStartTime"
            :focus="menuStartTime"
            label="Start time"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
          >
            <v-menu
              v-model="menuStartTime"
              :close-on-content-click="false"
              activator="parent"
              transition="scale-transition"
            >
              <v-time-picker
                v-if="menuStartTime"
                v-model="startTime"
                full-width
              ></v-time-picker>
            </v-menu>
          </v-text-field>
          <v-text-field
            v-model="endTime"
            :active="menuEndTime"
            :focus="menuEndTime"
            label="End time"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
          >
            <v-menu
              v-model="menuEndTime"
              :close-on-content-click="false"
              activator="parent"
              transition="scale-transition"
            >
              <v-time-picker
                v-if="menuEndTime"
                v-model="endTime"
                full-width
              ></v-time-picker>
            </v-menu>
          </v-text-field>
          <v-menu v-model="dayMenu" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props"> Selected days </v-btn>
            </template>
            <v-card min-width="100">
              <v-row
                no-gutters
                v-for="(day, index) in days"
                :key="index"
                cols="4"
                class="pa-0 ma-0"
              >
                <v-checkbox
                  v-model="selectedDays"
                  :label="day"
                  :value="day"
                  class="pa-0 ma-0"
                ></v-checkbox>
              </v-row>
            </v-card>
          </v-menu>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="bg-surface-light">
        <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>

        <v-spacer></v-spacer>

        <v-btn text="Save" @click="save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dayMenu = ref(false);

const startTime = ref(null);
const endTime = ref(null);

const menuStartTime = ref(false);
const menuEndTime = ref(false);

const props = defineProps<{}>();
</script>
