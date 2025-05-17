<template>
  <div class="d-flex" style="height: 100%">
    <v-container
      style="height: 100%; width: 100%"
      class="d-flex flex-column align-center pt-4"
    >
      <div class="text-h4 mb-4">Global Settings</div>
      <v-card
        class="justify-space-between d-flex flex-column mx-4"
        min-width="300"
        rounded="lg"
      >
        <div class="pt-2 px-4 pb-2 mb-4 font-weight-bold bg-surface-light">
          Notifications
        </div>
        <div class="d-flex px-6 flex-column">
          <div class="d-flex justify-space-between"></div>
          <div class="flex-grow-1 d-flex flex-column"></div>
        </div>
        <v-card-actions>
          <v-btn text="Reset" variant="plain" @click="dialog = false"></v-btn>

          <v-spacer></v-spacer>

          <v-btn text="Apply" @click="save"></v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";

const items = [
  {
    id: 1,
    action: "15 min",
    headline: "Brunch this weekend?",
    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    title: "Ali Connors",
    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  },
  {
    id: 2,
    action: "2 hr",
    headline: "Summer BBQ",
    subtitle: `Wish I could come, but I'm out of town this weekend.`,
    title: "me, Scrott, Jennifer",
    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  },
  {
    id: 3,
    action: "6 hr",
    headline: "Oui oui",
    subtitle: "Do you have Paris recommendations? Have you ever been?",
    title: "Sandra Adams",
    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  },
  {
    id: 4,
    action: "12 hr",
    headline: "Birthday gift",
    subtitle: "Have any ideas about what we should get Heidi for her birthday?",
    title: "Trevor Hansen",
    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  },
  {
    id: 5,
    action: "18hr",
    headline: "Recipe to try",
    subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
    title: "Britta Holt",
    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  },
];

const selected = shallowRef([]);
</script>
