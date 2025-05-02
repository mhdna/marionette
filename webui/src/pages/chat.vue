<template>
  <v-navigation-drawer width="370" permanent>
    <v-list v-model:selected="selected" select-strategy="single-independent">
      <v-list-item
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        :prepend-avatar="item.avatar"
        active-color="#5c6bc0"
        class="py-3"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>

        <!-- <v-list-item-subtitle class="mb-1 text-high-emphasis opacity-100">{{ -->
        <!--   item.headline -->
        <!-- }}</v-list-item-subtitle> -->

        <v-list-item-subtitle class="text-high-emphasis">{{
          item.subtitle
        }}</v-list-item-subtitle>

        <template v-slot:append="{ isSelected }">
          <v-list-item-action class="flex-column align-end">
            <small class="mb-4 text-high-emphasis opacity-60">{{
              item.action
            }}</small>

            <v-spacer></v-spacer>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-container>
    <v-empty-state
      v-if="selected.length == 0"
      class="pa-0"
      image="https://vuetifyjs.b-cdn.net/docs/images/components/v-empty-state/astro-cat.svg"
      size="200"
      justify="center"
    >
      <template v-slot:title>
        <div class="text-h6 text-high-emphasis">Get Started</div>
      </template>

      <template v-slot:text>
        <div class="text-body-2 font-weight-medium text-medium-emphasis">
          Find a great movie, then relax and enjoy with the Movies & TV app.
        </div>
      </template>

      <!-- <template v-slot:actions> -->
      <!--   <v-spacer></v-spacer> -->

      <!--   <v-btn color="#4c00d5" text="Shop Movies"></v-btn> -->

      <!--   <v-spacer></v-spacer> -->
      <!-- </template> -->
    </v-empty-state>
    <div v-else>hi</div>
  </v-container>
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
