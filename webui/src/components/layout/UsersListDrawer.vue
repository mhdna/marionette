<template>
  <v-navigation-drawer
    location="right"
    class="position-fixed overflow-y-auto"
    :rail="isRail"
    :model-value="props.showDrawer"
    @update:model-value="emit('update:showDrawer', $event)"
    :temporary="isDock"
  >
    <!-- temporary -->
    <template v-slot:prepend>
      <!-- <v-toolbar height="35"> -->
      <!--   <v-btn -->
      <!--     v-tooltip:bottom="'Minimize menu'" -->
      <!--     icon="mdi-unfold-less-vertical" -->
      <!--     @click="toggleRail" -->
      <!--     min-width="30" -->
      <!--   /> -->
      <!--   <v-btn -->
      <!--     v-tooltip:bottom="'Undock menu'" -->
      <!--     icon="mdi-dock-window" -->
      <!--     @click="toggleDock" -->
      <!--     min-width="30" -->
      <!--   /> -->
      <!--   <v-spacer /> -->
      <!-- </v-toolbar> -->
      <!-- <v-toolbar extended> -->
      <!--   <v-toolbar-title text="Users List"></v-toolbar-title> -->
      <!--   <template v-slot:prepend> -->
      <!--     <v-icon icon="mdi-account-multiple" /> -->
      <!--   </template> -->
      <!--   <template v-slot:extension> -->
      <!--     <v-text-field -->
      <!--       placeholder="Search Users" -->
      <!--       density="compact" -->
      <!--       variant="outlined" -->
      <!--       class="px-2" -->
      <!--     ></v-text-field> -->
      <!--   </template> -->
      <!-- </v-toolbar> -->
      <!-- append-icon="mdi-close" -->
      <!-- prepend-icon="mdi-account-multiple"  -->
      <div>
        <!-- <div class="text-h6 text-center mt-2 mb-3">Users List</div> -->
        <v-text-field
          placeholder="Search"
          variant="outlined"
          density="compact"
          class="px-2 mt-4"
        ></v-text-field>
      </div>
      <v-list density="compact">
        <v-list-item
          v-for="(user, index) in users"
          :key="index"
          :title="user.name"
        >
          <template v-slot:subtitle>
            <div class="text-grey-darken-1">Online</div>
          </template>
          <template v-slot:prepend>
            <!-- <v-avatar size="36" color="green" class="pa-1"> -->
            <v-avatar size="32">
              <v-img :src="user.prependAvatar" rounded="xl" />
            </v-avatar>
            <!-- </v-avatar> -->
          </template>
          <!-- <template v-slot:append> -->
          <!--   <v-icon color="green">mdi-circle</v-icon> -->
          <!-- </template> -->
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const props = defineProps<{
  showDrawer: boolean;
}>();

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

const isRail = ref(false);

const toggleRail = () => {
  isRail.value = !isRail.value;
};

const isDock = ref(false);

const toggleDock = () => {
  isDock.value = !isDock.value;
};
</script>
