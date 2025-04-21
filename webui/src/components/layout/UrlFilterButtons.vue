<template>
  <v-row no-gutters>
    <v-menu v-model="menu" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn prepend-icon="mdi-flag" color="red" v-bind="props">
          {{ chosenItem }}
        </v-btn>
      </template>
      <v-card max-width="450">
        <v-divider></v-divider>

        <v-list item-props>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="chosenItem = item.title"
            :value="item.title"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-spacer />
    <v-btn prepend-icon="mdi-tune">Filters</v-btn>
  </v-row>
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
const chosenItem = ref("Black List");
const items = [
  { title: "Black List" },
  { title: "Gray List" },
  { title: "White List" },
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
