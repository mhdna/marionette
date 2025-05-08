<!-- TODO: edit/delete buttons -->
<!-- INFO check here to complete https://vuetifyjs.com/en/components/icon-buttons/#datatable-actions -->
<!-- TODO: regex help in main page -->
<!-- TODO: help notifications and help badges about url kinds (if a new user) -->
<template>
  <!-- <v-container> -->
  <!-- <v-row no-gutters> -->
  <!-- <v-tabs fixed-tabs> -->
  <!--   <v-tab -->
  <!--     v-for="(list, index) in lists" -->
  <!--     :text="list.name" -->
  <!--     @click.prevent="activeTab = list.id" -->
  <!--   ></v-tab> -->
  <!-- </v-tabs> -->
  <!-- </v-row> -->
  <v-container fluid>
    <!-- <AddURLCard /> -->
    <div class="d-flex mb-4 justify-space-between">
      <!-- <AddRedirectCard class="me-2 flex-grow-1" /> -->
      <ActionCard title="Add A URL" icon="mdi-plus" class="me-2" />
      <ActionCard title="Manage URL Categories" icon="mdi-tune" />
    </div>
    <!-- :style="`background-color: ${list.color}; color: black`" -->
    <!-- <v-row class="mx-3"> -->
    <!--   <!-- <v-col :md="6"> -->

    <!--   <!-- TODO support search using list="banned" or group="something" + using regexp -->
    <!--   <v-text-field -->
    <!--     v-model="search" -->
    <!--     label="Search URL, group, or type" -->
    <!--     density="compact" -->
    <!--     menu-icon="" -->
    <!--     variant="outlined" -->
    <!--     border="sm" -->
    <!--     prepend-inner-icon="mdi-magnify" -->
    <!--     auto-select-first -->
    <!--     item-props -->
    <!--   ></v-text-field> -->
    <!--   <!-- </v-col> -->
    <!--   <!-- <v-spacer /> -->

    <!--   <v-btn -->
    <!--     class="px-2 mx-2" -->
    <!--     prepend-icon="mdi-plus" -->
    <!--     height="42" -->
    <!--     variant="text" -->
    <!--     text="Add a URL" -->
    <!--     border="sm" -->
    <!--     @click="add" -->
    <!--   ></v-btn> -->
    <!--   <v-btn -->
    <!--     class="px-2 mx-2" -->
    <!--     prepend-icon="mdi-tune" -->
    <!--     height="42" -->
    <!--     variant="text" -->
    <!--     text="Manage categories" -->
    <!--     border -->
    <!--     @click="toggleCategoriesManagerDialog" -->
    <!--   ></v-btn> -->
    <!-- </v-row> -->
    <!-- <v-row no-gutters> -->
    <!--   <v-col :md="4" > -->
    <!--     <v-btn -->
    <!--       :ripple="false" -->
    <!--       :key="index" -->
    <!--       :value="list.name" -->
    <!--        -->
    <!--       :prepend-icon="list.icon" -->
    <!--       rounded="lg" -->
    <!--       width="100%" -->
    <!--       grow -->
    <!--       :style="`border-left: 4px solid ${list.color}; color: ${list.color}`" -->
    <!--     > -->
    <!--       {{ list.name }} -->
    <!--     </v-btn> -->
    <!--   </v-col> -->
    <!-- </v-row> -->
    <!-- </v-container> -->

    <v-window v-model="activeTab">
      <v-window-item :value="list.id" v-for="list in lists" :key="list.id">
        <!-- TODO use v-list  -->
        <!-- <v-col :md="3"> -->
        <!--   <v-container> -->
        <!--     <v-container title="Categories"> -->
        <!--     <CategoriesCard -->
        <!--       v-if="list.categories.length > 0" -->
        <!--       :categories="list.categories" -->
        <!--       title="Predefined Categories" -->
        <!--     /> -->
        <!--     <CategoriesCard -->
        <!--       :categories="list.userCategories" -->
        <!--       title="Your Categories" -->
        <!--     /> -->
        <!--   </v-container> -->
        <!-- </v-col> -->
        <!-- <v-col :md="9"> -->
        <!-- <v-container> -->
        <!-- <v-container> -->

        <!-- :hide-default-footer="urls.length < 11" -->
        <v-card>
          <v-toolbar class="px-4" height="50">
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
            <div style="font-size: 18px" class="font-weight-bold">
              URL Lists
            </div>
            <v-spacer />

            <v-text-field
              v-model="search"
              class="mt-6 me-2"
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
            <!-- <v-btn variant="flat" class="ml-3 mt-1"> Search </v-btn> -->
            <!-- <v-btn -->
            <!--   class="px-2" -->
            <!--   prepend-icon="mdi-plus" -->
            <!--   variant="text" -->
            <!--   text="Add a URL" -->
            <!--   border="sm" -->
            <!--   @click="add" -->
            <!-- ></v-btn> -->
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

          <v-tabs class="d-flex">
            <v-tab
              v-for="(list, index) in lists"
              :text="list.name"
              :style="`background-color: ${list.color}; color: black; `"
              class="flex-grow-1"
              @click.prevent="activeTab = list.id"
            ></v-tab>
          </v-tabs>

          <v-data-table
            density="compact"
            items-per-page="20"
            hover
            item-selectable
            :headers="headers"
            :search="search"
            :items="[].concat(...Array(30).fill(urls)).flat()"
          >
            <template v-slot:item.category="{ value }">
              <div>
                <!-- :style="`background-color: ${getCategoryColor(value)}`" -->
                <v-icon
                  icon="mdi-circle"
                  :color="getCategoryColor(value)"
                  class="me-1"
                />
                {{ value }}
              </div>
              <!-- <v-chip -->
              <!--   :color="getCategoryColor(value)" -->
              <!--   :text="value" -->
              <!--   size="x-medium" -->
              <!-- ></v-chip> -->
            </template>
            <template v-slot:item.isregex="{ item }">
              <div class="text-green-darken-2" v-if="item.isregex">
                <v-icon icon="mdi-check-bold" />
              </div>
              <div class="text-red-darken-2" v-else>
                <v-icon icon="mdi-close" />
              </div>
            </template>

            <!-- style="max-width: 250px" -->
            <!-- <template v-slot:item.group="{ value }"> -->
            <!--   <div -->
            <!--     class="d-flex text-black font-weight-bold align-center text-center pa-0 w-100 h-100 ma-0" -->
            <!--     :style="`background-color: ${getGroupColor(value)}`" -->
            <!--   > -->
            <!--     <v-icon icon="mdi-circle" :color="getCategoryColor(value)" /> -->
            <!--     {{ value }} -->
            <!--   </div> -->
            <!-- </template> -->
            <!-- <template v-slot:item.group="{ value }"> -->
            <!--   <v-chip -->
            <!--     :color="getGroupColor(value)" -->
            <!--     :text="value" -->
            <!--     size="x-medium" -->
            <!--   ></v-chip> -->
            <!-- </template> -->
            <template v-slot:item.url="{ item }">
              <!--   <v-row> -->
              <!-- <v-icon-btn -->
              <!--   icon="mdi-pencil" -->
              <!--   size="24" -->
              <!--   variant="plain" -->
              <!--   @click="edit(item.id)" -->
              <!-- > -->
              <!--   <v-icon size="16"></v-icon> -->
              <!-- </v-icon-btn> -->

              <!-- <v-icon-btn -->
              <!--   icon="mdi-delete-outline" -->
              <!--   size="24" -->
              <!--   variant="plain" -->
              <!--   @click="onClickDelete(index)" -->
              <!-- > -->
              <!--   <v-icon size="16"></v-icon> -->
              <!-- </v-icon-btn> -->
              <v-chip
                :text="item.url"
                size="x-medium"
                prepend-icon="mdi-link"
                label
              />
              <!-- @click="edit(item.id)" -->
              <!-- @mouseover="hoverUrl = item.id" -->
              <!-- @mouseleave="hoverUrl = null" -->
              <!-- <template v-slot:prepend> -->
              <!--   <v-icon -->
              <!--     class="mr-1" -->
              <!--     :color=" -->
              <!--       hoverUrl === item.id ? 'primary' : 'medium-emphasis' -->
              <!--     " -->
              <!--   > -->
              <!--     {{ hoverUrl === item.id ? "mdi-pencil" : "mdi-link" }} -->
              <!--   </v-icon> -->
              <!-- </template> -->
              <!-- </v-chip> -->
              <!--   </v-row> -->
            </template>

            <!-- <template v-slot:item.actions="{ item }"> -->
            <!--   <div class="d-flex ga-2 justify-end"> -->
            <!--     <v-icon -->
            <!--       color="medium-emphasis" -->
            <!--       icon="mdi-pencil" -->
            <!--       size="small" -->
            <!--       @click="edit(item.id)" -->
            <!--     ></v-icon> -->

            <!--     <v-icon -->
            <!--       color="medium-emphasis" -->
            <!--       icon="mdi-delete" -->
            <!--       size="small" -->
            <!--       @click="remove(item.id)" -->
            <!--     ></v-icon> -->
            <!--   </div> -->
            <!-- </template> -->

            <template v-slot:no-data>
              <v-btn
                prepend-icon="mdi-backup-restore"
                rounded="lg"
                text="Reset data"
                variant="text"
                border
                @click="reset"
              ></v-btn>
            </template>
          </v-data-table>
        </v-card>
        <!-- </v-container> -->
        <!-- </v-container> -->
        <!-- </v-col> -->
      </v-window-item>
    </v-window>
  </v-container>

  <!-- <v-col -->
  <!--   v-for="(list, index) in lists" -->
  <!--   :key="index" -->
  <!--   :lg="4" -->
  <!--   :sm="12" -->
  <!--   :md="12" -->
  <!-- > -->
  <!-- <v-card flat density="compact"> -->
  <!--   <v-card-title -->
  <!--     class="d-flex align-center pe-2" -->
  <!--     :style="`background-color: ${list.color}; color: black`" -->
  <!--   > -->
  <!--     <v-icon :icon="list.icon"></v-icon> &nbsp; -->
  <!--     {{ list.name }} -->
  <!--   </v-card-title> -->
  <!-- <v-card-subtitle class="d-flex align-center pe-2"> -->
  <!--   {{ list.description }} -->
  <!-- </v-card-subtitle> -->

  <!-- <v-divider></v-divider> -->

  <!-- </v-card> -->
  <!-- </v-col> -->
  <v-dialog v-model="dialog" max-width="700">
    <v-card rounded>
      <v-card-title>
        <!-- <v-card-title class="d-flex justify-space-between"> -->
        {{ isEditing ? "Edit" : "Add" }} URL
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

        <v-btn
          text="Add"
          v-tooltip:top="'Add URL without closing the dialog'"
          @click="save"
        ></v-btn>
        <v-btn text="Save" @click="save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="categoriesManagerDialog" max-width="700">
    <ManageCategoriesDialog />
  </v-dialog>

  <!-- <v-dialog -->
  <!--   v-model="appStore.colorPickerDialog" -->
  <!--   width="auto" -->
  <!--   height="auto" -->
  <!--   opacity="0" -->
  <!--   position="absolute" -->
  <!--   location-strategy="connected" -->
  <!--   scroll-strategy="reposition" -->
  <!--   :style="{ backgroundColor: 'transparent' }" -->
  <!-- > -->
  <!--   <ColorPickerDialog /> -->
  <!-- </v-dialog> -->
</template>
<script setup lang="ts">
import { onMounted, ref, shallowRef } from "vue";

import { useAppStore } from "@/stores/app";
const appStore = useAppStore();

// import { useDate } from "vuetify";

const activeTab = ref(1);
const hoverUrl = ref(false);

const selectedDays = ref<string[]>([]);

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

const urls = ref<
  {
    id: number;
    url: string;
    category: string;
    isregex: boolean;
    group: string;
  }[]
>([]);
const record = ref<{
  id: number;
  url: string;
  group: string;
}>(DEFAULT_RECORD);
const dialog = shallowRef(false);
const categoriesManagerDialog = shallowRef(false);

function toggleCategoriesManagerDialog() {
  categoriesManagerDialog.value = true;
}

const isEditing = shallowRef(false);

const headers = [
  { title: "Category", key: "category", align: "left" },
  { title: "Group", key: "group", align: "left" },
  { title: "IsRegex", key: "isregex", align: "left" },
  { title: "URL", key: "url", align: "start" },
  // { title: "Actions", key: "actions", align: "end", sortable: false },
];

onMounted(() => {
  reset();
});

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

// function remove(id: number) {
//   const index = urls.value.findIndex((book) => book.id === id);
//   urls.value.splice(index, 1);
// }

function save() {
  if (isEditing.value) {
    const index = urls.value.findIndex((book) => book.id === record.value.id);
    urls.value[index] = record.value;
  } else {
    record.value.id = urls.value.length + 1;
    urls.value.push(record.value);
  }

  dialog.value = false;
}

function reset() {
  dialog.value = false;
  record.value = DEFAULT_RECORD;
  urls.value = [
    {
      id: 1,
      url: "https://www.google.com/search?q=long+url+testing+examples+for+browser+compatibility",
      category: "Gambling",
      isregex: false,
      group: "group2",
    },
    {
      id: 2,
      url: "https://www.facebook.com/groups/1234567890123456/long-url-check-test",
      category: "Porn",
      isregex: true,
      group: "group1",
    },
    {
      id: 3,
      url: "https://www.amazon.com/s?k=testing+long+url+examples+for+validations",
      category: "Weapons",
      isregex: true,
      group: "group1",
    },
  ];
}
const lists = [
  {
    id: 1,
    name: "Banned URLs",
    // description: "All URLs in this list are banned",
    icon: "mdi-flag",
    color: "red",
    categories: ["Adware + malware", "Social", "Pornogoraphy", "Gambling"],
    userCategories: [],
  },
  {
    id: 2,
    name: "Gray URL List",
    // description: "All URLS in this list are not banned",
    icon: "mdi-flag-checkered",
    color: "orange",
    categories: [],
    userCategories: [],
  },
  {
    id: 3,
    name: "Exception URLs",
    // description: "All URLS in this list are not banned",
    icon: "mdi-flag-outline",
    color: "green",
    categories: [],
    userCategories: [],
  },
];

function getCategoryColor(group: string): string {
  if (group === "Gambling") return "purple";
  else if (group === "Porn") return "red";
  else if (group === "Weapons") return "brown";
  return "white";
}

function getGroupColor(group: string): string {
  if (group === "group1") return "cyan";
  else if (group === "group2") return "lime";
  return "white";
}

// const bannedPhrasesCategories = [
//   "weapons",
//   "warezhacking",
//   "violence",
//   "proxies",
//   "pornography",
//   "personals",
//   "nudism",
//   "intolerance",
//   "illegaldrugs",
//   "gore",
//   "goodphrases",
//   "games",
//   "gambling",
//   "drugadvocacy",
//   "chat",
//   "badwords",
// ];
</script>

<!-- <route lang="yaml"> -->
<!-- meta: -->
<!--   layout: proxy -->
<!-- </route> -->
