<template>
  <v-btn
    variant="filled"
    :variant="isUpdating ? 'tonal' : undefined"
    prepend-icon="mdi-tune"
    @click="dialog = true"
  >
    Filters
  </v-btn>
  <v-dialog v-model="dialog" max-width="700">
    <!-- <v-card width="400" title="Search"> -->
    <!-- <template v-slot:actions> -->
    <!--   <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn> -->
    <!-- </template> -->
    <v-card>
      <v-card-title> Advanced Filters </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-date-input
              label="Start date"
              prepend-icon=""
              hide-actions
              prepend-inner-icon="$calendar"
              variant="underlined"
            ></v-date-input>
          </v-col>

          <v-col>
            <v-date-input
              label="End date"
              hide-actions
              prepend-icon=""
              prepend-inner-icon="$calendar"
              variant="underlined"
            ></v-date-input>
          </v-col>
        </v-row>

        <v-autocomplete
          v-model="friends"
          :disabled="isUpdating"
          :items="people"
          color="blue-grey-lighten-2"
          item-title="name"
          item-value="name"
          label="Users"
          transition="slide-y-transition"
          multiple
        >
          <template #selection="{ item, index }">
            <v-chip
              v-if="index < 7"
              :prepend-avatar="item.raw.avatar"
              :text="item.raw.name"
            ></v-chip>
            <!-- FIXME what's this for the before element? v-bind="props" -->
            <v-chip v-else-if="index == 6" text="And more..."></v-chip>
          </template>

          <template v-slot:item="{ props, item }">
            <v-list-item
              :prepend-avatar="item.raw.avatar"
              :subtitle="item.raw.group"
              :title="item.raw.name"
            ></v-list-item>
            <!-- FIXME what's this for the before element? v-bind="props" -->
          </template>
        </v-autocomplete>
      </v-card-text>
      <v-card-actions class="bg-surface-light">
        <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>

        <v-spacer></v-spacer>

        <v-btn text="Apply" @click="apply"></v-btn>
      </v-card-actions>
    </v-card>
    <!-- </v-card> -->
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const dialog = ref(false);
const friends = ["Sandra Adams", "Britta Holt"];
const isUpdating = ref(false);

const srcs = {
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
};

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

watch(isUpdating, (val) => {
  clearTimeout(this.timeout);

  if (val) {
    this.timeout = setTimeout(() => (this.isUpdating = false), 3000);
  }
});
</script>
