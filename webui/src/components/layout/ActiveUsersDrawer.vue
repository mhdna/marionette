<template>
  <v-btn
    v-tooltip:bottom="'Undock menu'"
    :active="isActiveDrawer"
    icon="mdi-account-multiple"
    @click="toggleDrawer"
  />
  <v-navigation-drawer location="right" :model-value="isActiveDrawer">
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link title="List Item 1"></v-list-item>
    <v-list-item link title="List Item 2"></v-list-item>
    <v-list-item link title="List Item 3"></v-list-item>
  </v-navigation-drawer>

  <v-navigation-drawer
    location="right"
    app
    persistent
    :model-value="isActiveDrawer"
  >
    <template v-slot:prepend>
      <v-card> Active Users: </v-card>
      <v-list density="compact">
        <v-list-item
          v-for="(user, index) in users"
          :key="index"
          :title="user.name"
        >
          <v-avatar>
            <v-img :src="user.prependAvatar" />
          </v-avatar>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isActiveDrawer = ref(false);

function toggleDrawer() {
  isActiveDrawer.value = !isActiveDrawer.value;
}

const users = [
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    name: "Ali",
    // subname: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  // { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    name: "Summer BBQ",
    // subname: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  // { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    name: "Oui oui",
    // subname:
    // '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  // { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    name: "Summer BBQ",
    // subname: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    name: "Summer BBQ",
    // subname: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    name: "Summer BBQ",
    // subname: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Birthday gift",
  },
  // { type: "divider", inset: true },
];
</script>
