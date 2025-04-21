<template>
  <!-- <v-card title="Filters" prepend-icon="mdi-tune" flat density="compact"> -->
  <v-row>
    <v-col>
      <v-date-input
        density="compact"
        v-model="dateRange"
        class="mx-4 mt-3"
        label="Date range"
        multiple="range"
      ></v-date-input>
    </v-col>

    <!-- <v-col>
      <v-btn
        variant="tonal"
        class="pb-7 pt-3 px-4 mt-3"
        prepend-icon="mdi-account-group"
        v-bind="props"
      >
        Filter Groups & Users
      </v-btn>
    </v-col> -->
    <v-col>
      <v-text-field
        density="compact"
        placeholder="Group"
        prepend-inner-icon="mdi-account-group"
        width="200"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        density="compact"
        placeholder="Users"
        prepend-inner-icon="mdi-account-group"
        width="200"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-col>
    <v-col>
      <v-btn prepend-icon="mdi-mark"> Apply filters </v-btn>
    </v-col>
  </v-row>
  <!-- <v-row class="pa-6">
    <v-spacer />
    <v-btn prepend-icon="mdi-tune"> Filters </v-btn>
  </v-row> -->
  <v-row>
    <v-col>
      <v-switch
        v-model="autoUpdate"
        :disabled="isUpdating"
        class="mx-2"
        color="green-lighten-2"
        density="compact"
        hide-details
      >
        <template v-slot:label>
          <div>Auto Fetch</div>
        </template>
      </v-switch>
    </v-col>
    <v-col>
      <v-btn
        :disabled="autoUpdate"
        :loading="isUpdating"
        :variant="isUpdating ? 'tonal' : undefined"
        class="mx-2"
        color="orange"
        prepend-icon="mdi-update"
        @click="isUpdating = true"
      >
        Fetch Data Tables
      </v-btn>
    </v-col>
  </v-row>
  <!-- </v-card> -->
</template>

<script lang="ts" setup>
import { shallowRef, ref, watch } from "vue";

import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay();

function getDatesOneMonthAgo() {
  const dates = [];
  const today = new Date();
  const oneMonthAgo = new Date(today);

  // Set the date to one month ago
  oneMonthAgo.setMonth(today.getMonth() - 1);

  // Loop through each day from one month ago to today
  while (oneMonthAgo <= today) {
    dates.push(new Date(oneMonthAgo));
    oneMonthAgo.setDate(oneMonthAgo.getDate() + 1); // Move to the next day
  }

  return dates;
}

const dateRange = shallowRef(getDatesOneMonthAgo());

const srcs = {
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
};

const menu = ref(false);
const autoUpdate = ref(true);
const friends = ["Sandra Adams", "Britta Holt"];
const isUpdating = ref(false);
const name = ref("Midnight Crew");
// dialog: false,
const people = [
  // TODO: https://github.com/vuetifyjs/vuetify/issues/15721
  // { header: 'Group 1' },
  { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
  { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
  { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
  { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },
  // { divider: true },
  // { header: 'Group 2' },
  { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
  { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
  { name: "John Smith", group: "Group 2", avatar: srcs[1] },
  { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] },
];
const title = ref("The summer breeze");
const timeout = ref(null);
const location = ref("end");
const chosenItem = ref("Kids");
const items = [
  { title: "Kids" },
  { title: "Parents" },
  { title: "Workers" },
  { title: "Firefox" },
];
const locations = ["top", "bottom", "start", "end", "center"];

watch(isUpdating, (val) => {
  clearTimeout(this.timeout);

  if (val) {
    this.timeout = setTimeout(() => (this.isUpdating = false), 3000);
  }
});

function remove(item) {
  const index = this.friends.indexOf(item.name);
  if (index >= 0) this.friends.splice(index, 1);
}
</script>
