<template>
  <!-- <v-container class="pa-2"> -->
  <!-- <v-row> -->
  <!-- <v-col :md="10" :sm="12" class="my-0 mx-0"> -->
  <!-- <v-autocomplete -->
  <!--   v-model="friends" -->
  <!--   :disabled="isUpdating" -->
  <!--   :items="people" -->
  <!--   color="blue-grey-lighten-2" -->
  <!--   item-title="name" -->
  <!--   item-value="name" -->
  <!--   label="Users" -->
  <!--   transition="slide-y-transition" -->
  <!--   multiple -->
  <!-- > -->
  <!--   <template #selection="{ item, index }"> -->
  <!--     <v-chip -->
  <!--       v-if="index < 7" -->
  <!--       :prepend-avatar="item.raw.avatar" -->
  <!--       :text="item.raw.name" -->
  <!--     ></v-chip> -->
  <!-- FIXME what's this for the before element? v-bind="props" -->
  <!--   <v-chip v-else-if="index == 6" text="And more..."></v-chip> -->
  <!-- </template> -->

  <!-- <template v-slot:item="{ props, item }"> -->
  <!--   <v-list-item -->
  <!--     :prepend-avatar="item.raw.avatar" -->
  <!--     :subtitle="item.raw.group" -->
  <!--     :title="item.raw.name" -->
  <!--   ></v-list-item> -->
  <!-- FIXME what's this for the before element? v-bind="props" -->
  <!--   </template> -->
  <!-- </v-autocomplete> -->

  <!--   <v-row -->
  <!--     density="compact" -->
  <!--     dense -->
  <!--     align="center" -->
  <!--     justify="center" -->
  <!--     class="my-0 mx-0" -->
  <!--     no-gutters -->
  <!--   > -->
  <!--     <v-col :md="4" :sm="3"> -->
  <!--       <v-date-input -->
  <!--         density="compact" -->
  <!--         max-width="300" -->
  <!--         label="Start date" -->
  <!--         prepend-icon="" -->
  <!--         prepend-inner-icon="$calendar" -->
  <!--         variant="underlined" -->
  <!--       ></v-date-input> -->
  <!--     </v-col> -->

  <!--     <v-col :md="4" :sm="3"> -->
  <!--       <v-date-input -->
  <!--         density="compact" -->
  <!--         label="End date" -->
  <!--         max-width="300" -->
  <!--         prepend-icon="" -->
  <!--         prepend-inner-icon="$calendar" -->
  <!--         variant="underlined" -->
  <!--       ></v-date-input> -->
  <!--     </v-col> -->
  <!--   </v-row> -->
  <!-- </v-col> -->

  <!-- <v-spacer></v-spacer> -->

  <!-- <v-col :md="2"> -->
  <!--   <v-row align="end" justify="center" class="pa-2 mx-2 py-8 fill-height"> -->
  <!--   </v-row> -->
  <!-- </v-col> -->

  <!-- <v-col :md="2"> -->
  <!--   <v-btn> Date filters </v-btn> -->
  <!--   <v-menu> -->
  <!--     <template v-slot:activator="{ props }"> -->
  <!--       <v-btn color="primary" v-bind="props">Time Filters</v-btn> -->
  <!--     </template> -->
  <!--     <v-list> -->
  <!--       <v-list-item v-for="(item, i) in items" :key="i" :value="i"> -->
  <!--         <v-list-item-title>{{ item.title }}</v-list-item-title> -->
  <!--       </v-list-item> -->
  <!--     </v-list> -->
  <!--   </v-menu> -->
  <!-- </v-col> -->

  <!-- <v-col :md="2" :sm="3"> -->

  <!-- <div class="d-flex justify-center"> -->

  <!-- TODO put active users horizontally here -->
  <v-row no-gutters>
    <v-col :md="6" :sm="12">
      <ActiveUsersListHorizontal
        :minWidth="'100%'"
        :cardHeight="120"
        :maxWidth="700"
      />
    </v-col>
    <v-col :md="6" v-if="!smAndDown">
      <v-card title="Filters" prepend-icon="mdi-tune" flat density="compact">
        <v-row>
          <v-date-input
            density="compact"
            v-model="dateRange"
            class="mx-4 mt-3"
            label="Date range"
            multiple="range"
          ></v-date-input>
          <!-- <v-tooltip location="bottom" transition="fade-transition" text="Active group"> -->
          <!--    -->
          <!-- <div v-bind="props"> -->

          <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <v-btn
                max-width="200"
                height="40"
                variant="tonal"
                class="pa-2 mb-2 mt-3 mr-7"
                density="compact"
                prepend-icon="mdi-account-group"
                v-bind="props"
              >
                &nbsp; Groups and users
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
        </v-row>
        <!-- <v-col> -->
        <!-- <v-card class="text-center"> -->
        <!-- <v-btn variant="filled" width="120" prepend-icon="mdi-account-group"> -->
        <!--   {{ chosenItem }} -->
        <!--   <v-menu activator="parent"> -->
        <!--     <v-list> -->
        <!--       <v-list-item -->
        <!--         v-for="(item, index) in items" -->
        <!--         :key="index" -->
        <!--         @click="chosenItem = item.title" -->
        <!--         :value="item.title" -->
        <!--       > -->
        <!--         <v-list-item-title>{{ item.title }}</v-list-item-title> -->
        <!--       </v-list-item> -->
        <!--     </v-list> -->
        <!--   </v-menu> -->
        <!-- </v-btn> -->
        <!--   </div> -->
        <!--  -->
        <!-- </v-tooltip> -->

        <!-- <FiltersDialog /> -->
        <!-- <v-stack> -->
        <!-- </v-stack> -->
        <!-- </v-card> -->
        <!-- </v-col> -->

        <v-row class="mb-4 d-flex justify-center align-center">
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
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <!-- </v-col> -->
  <!-- </v-row> -->
  <!-- </v-container> -->
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
