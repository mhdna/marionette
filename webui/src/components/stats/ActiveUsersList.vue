<template>
  <v-card class="mx-auto" height="91vh" title="Users list">
    <v-sheet :max-height="cardheight" class="overflow-y-auto">
      <v-list density="compact">
        <v-list-subheader>Group 1</v-list-subheader>
        <v-list-item
          v-for="item in items"
          :prepend-avatar="item.prependAvatar"
          density="compact"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
          <template v-slot:append>
            <v-icon color="green">mdi-circle</v-icon>
          </template>
        </v-list-item>
        <v-list-subheader>Group 1</v-list-subheader>
        <v-list-item
          v-for="item in items"
          :prepend-avatar="item.prependAvatar"
          density="compact"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
          <template v-slot:append>
            <v-icon color="gray">mdi-circle</v-icon>
          </template>
        </v-list-item>
        <v-list-subheader>Group 1</v-list-subheader>
        <v-list-item
          v-for="item in items"
          :prepend-avatar="item.prependAvatar"
          density="compact"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
          <template v-slot:append>
            <v-icon color="green">mdi-circle</v-icon>
          </template>
        </v-list-item>
        <!-- <template v-slot:subtitle="{ subtitle }"> -->
        <!--   <div v-html="subtitle"></div> -->
        <!-- </template> -->
        <!-- <template v-slot:append> -->
        <!--   <v-icon color="green">mdi-circle</v-icon> -->
        <!-- </template> -->
        <!-- <template v-slot:title="{ title }"> -->
        <!--   <div class="d-flex align-center"> -->
        <!--     <span>{{ title }}</span> -->
        <!--     <v-icon color="green">mdi-circle</v-icon> -->
        <!--   </div> -->
        <!-- </template> -->
      </v-list>
    </v-sheet>
  </v-card>
</template>
<script lang="ts" setup>
const items = [
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Ali",
    // subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  // { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "Summer BBQ",
    // subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  // { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    // subtitle:
    // '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  // { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    // subtitle:
    //   '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  // { type: "divider", inset: true },
];

defineProps<{
  cardheight: number;
}>();
</script>
