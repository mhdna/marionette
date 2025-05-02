<!-- TODO: make them clickable where from there you edit or delete or check category and group -->
<template>
  <v-container fluid class="d-flex">
    <AddPhraseCard />
    <NaughtinessLimit />
  </v-container>
  <!-- <div class="mx-4"> -->
  <v-card class="mx-4 d-flex flex-column" flat density="compact">
    <v-toolbar class="px-4" height="50">
      <div class="me-2">
        <v-tooltip
          max-width="250"
          text="Transparently redirect a URL (could be a regexp) to another one, transparently (i.e. the user would not know about it.)."
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props" color="grey">mdi-help-circle-outline</v-icon>
          </template>
        </v-tooltip>
      </div>
      <div style="font-size: 18px" class="font-weight-bold">Phrase List</div>
      <v-spacer />

      <v-text-field
        v-model="search"
        class="mt-6"
        max-width="400"
        label="Search URL"
        menu-icon=""
        density="compact"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        auto-select-first
        item-props
        border
      ></v-text-field>
      <v-btn variant="flat" class="ml-3 mt-1"> Search </v-btn>
      <v-btn
        class="px-2 mx-2"
        prepend-icon="mdi-plus"
        height="42"
        variant="text"
        text="Add a URL"
        border="sm"
        @click="add"
      ></v-btn>
      <!-- <v-btn -->
      <!--   class="px-2 mx-2" -->
      <!--   prepend-icon="mdi-tune" -->
      <!--   height="42" -->
      <!--   variant="text" -->
      <!--   text="Manage categories" -->
      <!--   border -->
      <!--   @click="toggleCategoriesManagerDialog" -->
      <!-- ></v-btn> -->
    </v-toolbar>

    <!-- <v-row> -->
    <!--   <v-text-field -->
    <!--     v-model="search" -->
    <!--     label="Search URLs" -->
    <!--     prepend-inner-icon="mdi-magnify" -->
    <!--     variant="outlined" -->
    <!--     hide-details -->
    <!--     single-line -->
    <!--   > -->
    <!--   </v-text-field> -->
    <!--   <v-btn -->
    <!--     class="me-2" -->
    <!--     prepend-icon="mdi-plus" -->
    <!--     rounded="lg" -->
    <!--     text="Add a URL" -->
    <!--     border -->
    <!--     @click="add" -->
    <!--   ></v-btn> -->
    <!-- </v-row> -->

    <div class="d-flex">
      <div
        :style="{
          width: '50%',
          minHeight: '420px',
          backgroundColor: currentTheme === 'dark' ? '#28332F' : '#A4E5C9',
        }"
        class="d-flex flex-column justify-space-between"
      >
        <!-- borderRadius: '8px', -->
        <div>
          <div class="text-center text-h6">
            <!-- style="background-color: lightgray" -->
            White Phrase List
          </div>
          <VueDraggable
            class="text-center pa-1 rounded overflow-auto"
            v-model="list1"
            animation="150"
            ghostClass="ghost"
            group="people"
            @update="onUpdate"
            @add="onAdd"
            @remove="remove"
          >
            <v-chip
              v-for="item in list1"
              :key="item.id"
              class="draggable-cursor ma-1"
            >
              <!-- :color="item.color" -->
              {{ item.name }}
            </v-chip>
          </VueDraggable>
        </div>
        <v-pagination
          rounded
          density="compact"
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
      <!-- <v-divider vertical thickness="4" /> -->

      <div
        :style="{
          width: '50%',
          minHeight: '420px',
          backgroundColor: currentTheme === 'dark' ? '#51231F' : '#E2C8C5',
        }"
        class="d-flex flex-column justify-space-between"
      >
        <!-- borderRadius: '8px', -->
        <div>
          <div class="text-center text-h6">
            <!-- style="background-color: lightgray" -->
            Black Phrase List
          </div>
          <VueDraggable
            class="text-center pa-1 rounded overflow-auto"
            v-model="list2"
            animation="150"
            ghostClass="ghost"
            group="people"
            @update="onUpdate"
            @add="onAdd"
            @remove="remove"
          >
            <v-chip
              v-for="item in list2"
              :key="item.id"
              class="draggable-cursor ma-1"
            >
              <!-- :style="`border-bottom: 1px solid ${item.color}`" -->
              <!-- :color="item.color" -->
              {{ item.name }}
            </v-chip>
          </VueDraggable>
        </div>
        <v-pagination
          rounded
          density="compact"
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </div>
    <!-- <v-row> -->
    <!--   <v-col :lg="6" :md="6" :sm="12"> -->
    <!--     <v-card> -->
    <!--       <v-card title="Banned Phrases List"></v-card> -->
    <!--       <div class="text-center"> -->
    <!--         <div -->
    <!--           v-draggable="[ -->
    <!--             list, -->
    <!--             { -->
    <!--               animation: 150, -->
    <!--             }, -->
    <!--           ]" -->
    <!--         > -->
    <!--           <v-chip class="draggable-cursor ma-2" v-for="n in 60" color="red" -->
    <!--             >Phrase</v-chip -->
    <!--           > -->
    <!--         </div> -->
    <!--       </div> -->
    <!--     </v-card> -->
    <!--   </v-col> -->
    <!--   <v-col :lg="6" :md="6" :sm="12"> -->
    <!--     <v-card> -->
    <!--       <v-card title="Exception Phrases List"></v-card> -->
    <!--       <div class="text-center"> -->
    <!--         <v-chip -->
    <!--           v-for="item in list" -->
    <!--           :key="item.id" -->
    <!--           class="ma-2" -->
    <!--           color="green" -->
    <!--           >item.name</v-chip -->
    <!--         > -->
    <!--       </div> -->
    <!--     </v-card> -->
    <!--   </v-col> -->
    <!-- </v-row> -->
  </v-card>
  <!-- <Weightedphrases /> -->
</template>

<script setup>
const lists = [
  { name: "Black Phrase List", icon: "mdi-flag" },
  { name: "White Phrase List", icon: "mdi-flag-outline" },
];

import { ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";
const list1 = ref(
  Array(15)
    .fill([
      {
        name: "Joao",
        id: "1",
        color: "red",
      },
      {
        name: "Jean",
        id: "2",
        color: "blue",
      },
      {
        name: "Johanna",
        id: "3",
        color: "green",
      },
      {
        name: "Juan",
        id: "4",
        color: "yellow",
      },
    ])
    .flat(),
);
const list2 = ref(
  list1.value.map((item) => ({
    name: `${item.name}`,
    id: `${item.id}-2`,
    color: `${item.color}`,
  })),
);
function onUpdate() {
  console.log("update");
}
function onAdd() {
  console.log("add");
}
function remove() {
  console.log("remove");
}

import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);
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
