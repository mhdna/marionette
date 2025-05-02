<!-- TODO properize this -->
<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-tooltip text="Notifications" max-width="300" location="bottom">
          <template v-slot:activator="{ props }">
            <v-badge
              class="mr-3"
              v-bind="props"
              color="red-darken-4"
              content="9+"
            >
              <v-icon v-bind="on">mdi-bell</v-icon>
            </v-badge>
          </template>
        </v-tooltip>
      </template>

      <v-card max-width="400" class="overflow-y-auto" max-height="520">
        <!-- <v-list> -->
        <!--   <v-list-item -->
        <!--     prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" -->
        <!--     subtitle="Founder of Vuetify" -->
        <!--     title="John Leider" -->
        <!--   > -->
        <!--     <template v-slot:append> -->
        <!--       <v-btn -->
        <!--         :class="fav ? 'text-red' : ''" -->
        <!--         icon="mdi-heart" -->
        <!--         variant="text" -->
        <!--         @click="fav = !fav" -->
        <!--       ></v-btn> -->
        <!--     </template> -->
        <!--   </v-list-item> -->
        <!-- </v-list> -->

        <v-divider></v-divider>

        <v-list :items="items" lines="three" item-props>
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>

        <!-- <v-card-actions> -->
        <!--   <v-spacer></v-spacer> -->

        <!--   <v-btn variant="text" @click="menu = false"> Cancel </v-btn> -->
        <!--   <v-btn color="primary" variant="text" @click="menu = false"> -->
        <!--     Save -->
        <!--   </v-btn> -->
        <!-- </v-card-actions> -->
      </v-card>
    </v-menu>
  </div>
</template>
<script setup>
import { ref } from "vue";

const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);
const items = [
  { type: "subheader", title: "Today" },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "Summer BBQ",
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle:
      '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle:
      '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
];
</script>
