<!-- TODO: make them clickable where from there you edit or delete or check category and group -->
<template>
  <v-container fluid>
    <div class="d-flex mb-4 justify-space-between">
      <!-- <AddRedirectCard class="me-2 flex-grow-1" /> -->
      <ActionCard title="Add A Phrase" icon="mdi-plus" class="me-2" />
      <ActionCard
        title="Manage Phrases Categories"
        icon="mdi-tune"
        class="me-2"
      />
      <ActionCard
        title="Modify Naughtiness Limit"
        icon="mdi-speedometer-medium"
      />
    </div>
    <!-- <div class="d-flex"> -->
    <!--   <AddPhraseCard class="flex-2" /> -->
    <!--   <NaughtinessLimit class="flex-1" /> -->
    <!-- </div> -->
    <v-card rounded="lg" class="mt-4 d-flex flex-column flex-1-100">
      <!-- <div -->
      <!--   rounded="lg" -->
      <!--   class="mx-4 d-flex flex-column flex-1-100" -->
      <!--   flat -->
      <!--   density="compact" -->
      <!-- > -->
      <v-toolbar density="compact" class="px-4 pe-0">
        <div class="me-2">
          <v-tooltip
            max-width="250"
            text="Transparently redirect a URL (could be a regexp) to another one, transparently (i.e. the user would not know about it.)."
            location="bottom"
          >
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" color="grey"
                >mdi-help-circle-outline</v-icon
              >
            </template>
          </v-tooltip>
        </div>
        <div style="font-size: 18px" class="me-4 font-weight-bold">
          Phrase List
        </div>
        <v-spacer />

        <!-- <v-btn variant="flat" class="ml-3 mt-1"> Search </v-btn> -->
        <v-text-field
          v-model="search"
          class="mt-5 me-2"
          max-width="400"
          placeholder="Search Phrase"
          menu-icon=""
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-magnify"
          auto-select-first
          item-props
          border
        ></v-text-field>
        <!-- <v-btn -->
        <!--   class="px-2 me-2" -->
        <!--   prepend-icon="mdi-plus" -->
        <!--   variant="text" -->
        <!--   border -->
        <!--   text="Add a Phrase" -->
        <!--   @click="add" -->
        <!-- ></v-btn> -->
        <!-- <NaughtinessLimitMenu> -->
        <!--   <v-btn -->
        <!--     class="px-2" -->
        <!--     prepend-icon="mdi-speedometer" -->
        <!--     variant="text" -->
        <!--     text="Naughtiness Limit" -->
        <!--     border -->
        <!--   ></v-btn> -->
        <!-- </NaughtinessLimitMenu> -->
        <!-- <v-btn -->
        <!--   class="px-2 mx-2" -->
        <!--   prepend-icon="mdi-tune" -->
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
        <!-- <div -->
        <!--   style=" -->
        <!--     height: 100%; -->
        <!--     background-color: red; -->
        <!--     border-radius: 80px; -->
        <!--     padding-top: 15px; -->
        <!--     padding-bottom: 15px; -->
        <!--   " -->
        <!--   class="mt-6 mb-4" -->
        <!-- ></div> -->
        <PhraseList title="White Phrase List" :phrases="list1" />

        <v-divider vertical thickness="4" />
        <PhraseList title="Black Phrase List" :phrases="list2" />
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
      <!-- </div> -->
      <!-- <NaughtinessLimit /> -->
      <!-- <div class="d-flex mx-2 flex-1-100"> -->
      <!--   <div> -->
      <!--     <CategoriesCard -->
      <!--       title="Pre-defined Categories" -->
      <!--       :categories="bannedUrlCategories" -->
      <!--     /> -->
      <!--     <CategoriesCard title="Pre-defined Categories" :categories="[]" /> -->
      <!--   </div> -->
      <!-- </div> -->
      <v-card-actions class="bg-surface-light">
        <v-btn text="Reset" variant="plain" @click="dialog = false"></v-btn>

        <v-spacer></v-spacer>

        <v-btn
          text="Apply Changes"
          color="green-darken-3"
          variant="outlined"
          disabled
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
  <v-dialog v-model="dialog" max-width="700">
    <v-card rounded>
      <v-card-title>
        <!-- <v-card-title class="d-flex justify-space-between"> -->
        {{ isEditing ? "Edit" : "Add" }} Phrase
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="record.phrase" label="Phrase"></v-text-field>
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

        <v-btn
          text="Add"
          v-tooltip:top="'Add URL without closing the dialog'"
          @click="save"
        ></v-btn>
        <v-btn text="Save" @click="save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- <Weightedphrases /> -->
</template>

<script lang="ts" setup>
import { onMounted, shallowRef } from "vue";

import { ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";
const list1 = ref(
  Array(25)
    .fill([
      {
        name: "Joao",
        id: "1",
        color: "#520120",
      },
      {
        name: "Jean",
        id: "2",
        color: "#08403E",
      },
      {
        name: "Johanna",
        id: "3",
        color: "#706513",
      },
      {
        name: "Juannnnnnnnnnnnnnnnnnnnnnnnnnnn",
        id: "4",
        color: "#B57114",
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

import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);

const dialog = shallowRef(false);
const isEditing = shallowRef(false);
const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// const adapter = useDate();
const search = ref("");

const dayMenu = ref(false);

const startTime = ref(null);
const endTime = ref(null);

const menuStartTime = ref(false);
const menuEndTime = ref(false);

const DEFAULT_RECORD = {
  id: 0,
  url: "",
};
const record = ref<{
  id: number;
  url: string;
  group: string;
}>(DEFAULT_RECORD);

function add() {
  isEditing.value = false;
  record.value = DEFAULT_RECORD;
  dialog.value = true;
}

function edit(id: number) {
  isEditing.value = true;

  const found: { id: number; url: string; group: string } =
    urls.value.find((book) => book.id === id) ?? DEFAULT_RECORD;

  record.value = {
    id: found.id,
    url: found.url,
    group: found.group,
  };

  dialog.value = true;
}

const bannedUrlCategories = [
  { name: "Weapons", color: "#00ff00" },
  { name: "Warezhacking", color: "#00ff00" },
  { name: "Violence", color: "#00ff00" },
  { name: "Proxies", color: "#00ff00" },
  { name: "Pornography", color: "#00ff00" },
  { name: "Personals", color: "#00ff00" },
  { name: "Nudism", color: "#00ff00" },
  { name: "Intolerance", color: "#00ff00" },
  { name: "Illegaldrugs", color: "#00ff00" },
  { name: "Gore", color: "#00ff00" },
  { name: "Goodphrases", color: "#00ff00" },
  { name: "Games", color: "#00ff00" },
  { name: "Gambling", color: "#00ff00" },
  { name: "Drugadvocacy", color: "#00ff00" },
  { name: "Chat", color: "#00ff00" },
  { name: "Badwords", color: "#00ff00" },
];
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
