<!-- TODO: make them clickable where from there you edit or delete or check category and group -->
<template>
  <v-card border rounded>
    <v-row>
      <v-text-field
        v-model="search"
        label="Search URLs"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      >
      </v-text-field>
      <v-btn
        class="me-2"
        prepend-icon="mdi-plus"
        rounded="lg"
        text="Add a URL"
        border
        @click="add"
      ></v-btn>
    </v-row>

    <v-row>
      <v-col :lg="6" :md="6" :sm="12">
        <v-card>
          <v-card title="Banned Phrases List"></v-card>
          <div class="text-center">
            <div
              v-draggable="[
                list,
                {
                  animation: 150,
                },
              ]"
            >
              <v-chip class="draggable-cursor ma-2" v-for="n in 60" color="red"
                >Phrase</v-chip
              >
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col :lg="6" :md="6" :sm="12">
        <v-card>
          <v-card title="Exception Phrases List"></v-card>
          <div class="text-center">
            <v-chip
              v-for="item in list"
              :key="item.id"
              class="ma-2"
              color="green"
              >item.name</v-chip
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  <Weightedphrases />
</template>

<script setup>
const lists = [
  { name: "Banned Phrase List", icon: "mdi-flag" },
  { name: "Exception Phrase List", icon: "mdi-flag-outline" },
];

import { ref } from "vue";
import { vDraggable } from "vue-draggable-plus";
const list = ref([
  {
    name: "Joao",
    id: 1,
  },
  {
    name: "Jean",
    id: 2,
  },
  {
    name: "Johanna",
    id: 3,
  },
  {
    name: "Juan",
    id: 4,
  },
  {
    name: "Yuan",
    id: 5,
  },
  {
    name: "Joao",
    id: 6,
  },
  {
    name: "Jean",
    id: 7,
  },
  {
    name: "Johanna",
    id: 8,
  },
  {
    name: "Juan",
    id: 9,
  },
  {
    name: "Yuan",
    id: 10,
  },
  {
    name: "Joao",
    id: 11,
  },
  {
    name: "Jean",
    id: 12,
  },
  {
    name: "Johanna",
    id: 13,
  },
  {
    name: "Juan",
    id: 14,
  },
  {
    name: "Yuan",
    id: 15,
  },
  {
    name: "Joao",
    id: 16,
  },
  {
    name: "Jean",
    id: 17,
  },
  {
    name: "Johanna",
    id: 18,
  },
  {
    name: "Juan",
    id: 19,
  },
  {
    name: "Yuan",
    id: 20,
  },
  {
    name: "Joao",
    id: 21,
  },
  {
    name: "Jean",
    id: 22,
  },
  {
    name: "Johanna",
    id: 23,
  },
  {
    name: "Juan",
    id: 24,
  },
  {
    name: "Yuan",
    id: 25,
  },
  {
    name: "Joao",
    id: 26,
  },
  {
    name: "Jean",
    id: 27,
  },
  {
    name: "Johanna",
    id: 28,
  },
  {
    name: "Juan",
    id: 29,
  },
  {
    name: "Yuan",
    id: 30,
  },
  {
    name: "Joao",
    id: 31,
  },
  {
    name: "Jean",
    id: 32,
  },
  {
    name: "Johanna",
    id: 33,
  },
  {
    name: "Juan",
    id: 34,
  },
  {
    name: "Yuan",
    id: 35,
  },
  {
    name: "Joao",
    id: 36,
  },
  {
    name: "Jean",
    id: 37,
  },
  {
    name: "Johanna",
    id: 38,
  },
  {
    name: "Juan",
    id: 39,
  },
  {
    name: "Yuan",
    id: 40,
  },
  {
    name: "Joao",
    id: 41,
  },
  {
    name: "Jean",
    id: 42,
  },
  {
    name: "Johanna",
    id: 43,
  },
  {
    name: "Juan",
    id: 44,
  },
  {
    name: "Yuan",
    id: 45,
  },
]);

function onStart() {
  console.log("start");
}

function onUpdate() {
  console.log("update");
}
</script>

<!-- <route lang="yaml"> -->
<!-- meta: -->
<!--   layout: proxy -->
<!-- </route> -->

<style>
.draggable-cursor {
  user-select: none;
}
.draggable-cursor *,
.draggable-cursor {
  cursor: grab !important;
}
.draggable-cursor:active *,
.draggable-cursor:active {
  cursor: grabbing !important;
}
</style>
