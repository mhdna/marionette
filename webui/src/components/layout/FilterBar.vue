<template>
  <v-card flat :rounded="false">
    <!--   title="Filters" -->
    <!--   prepend-icon="mdi-tune" -->
    <!-- > -->
    <v-toolbar class="d-flex justify-space-between px-4 py-1" height="50">
      <!-- <div class="flex-grow-1"> -->
      <!--   <v-date-input -->
      <!--     v-model="dateRange" -->
      <!--     class="mr-1" -->
      <!--     label="Date range" -->
      <!--     multiple="range" -->
      <!--   ></v-date-input> -->
      <!-- </div> -->
      <!-- <div class="flex-grow-1"> -->
      <!--   <v-autocomplete -->
      <!--     v-model="selectedGroup" -->
      <!--     :disabled="isUpdating" -->
      <!--     :items="groups" -->
      <!--     color="blue-grey-lighten-2" -->
      <!--     class="mr-1" -->
      <!--     item-title="name" -->
      <!--     item-value="name" -->
      <!--     label="Group" -->
      <!--     transition="slide-y-transition" -->
      <!--   /> -->
      <!-- </div> -->
      <!-- <div class="flex-grow-1"> -->
      <!--   <v-autocomplete -->
      <!--     v-model="friends" -->
      <!--     clearable -->
      <!--     :disabled="isUpdating" -->
      <!--     :items="people" -->
      <!--     color="blue-grey-lighten-2" -->
      <!--     class="mr-1" -->
      <!--     item-title="name" -->
      <!--     item-value="name" -->
      <!--     label="Users" -->
      <!--     transition="slide-y-transition" -->
      <!--     multiple -->
      <!--   > -->
      <!--     <template #selection="{ item, index }"> -->
      <!--       <v-chip -->
      <!--         v-if="index < 7" -->
      <!--         :prepend-avatar="item.raw.avatar" -->
      <!--         :text="item.raw.name" -->
      <!--       ></v-chip> -->
      <!--       <v-chip v-else-if="index == 6" text="And more..."></v-chip> -->
      <!--     </template> -->
      <!--     <!-- FIXME what's this for the before element? v-bind="props" -->

      <!--     <template v-slot:item="{ props, item }"> -->
      <!--       <v-list-item -->
      <!--         :prepend-avatar="item.raw.avatar" -->
      <!--         :subtitle="item.raw.group" -->
      <!--         :title="item.raw.name" -->
      <!--       ></v-list-item> -->
      <!--     </template> -->
      <!--   </v-autocomplete> -->
      <!-- </div> -->
      <div class="mr-2 text-">
        <v-btn
          variant="outlined"
          rounded="sm"
          height="36"
          width="30"
          icon="mdi-chevron-left"
          border="sm"
        />
        <v-btn
          :disabled="autoUpdate"
          :loading="isUpdating"
          variant="outlined"
          height="36"
          border="sm"
          class="text-body-2"
          @click="isUpdating = true"
        >
          Today
        </v-btn>
        <v-btn
          variant="outlined"
          class="text-body-2"
          rounded="sm"
          height="36"
          width="30"
          icon="mdi-chevron-right"
          border="sm"
        />
      </div>
      <v-spacer />

      <div class="mr-2 text-body-2">
        <v-btn
          :disabled="autoUpdate"
          :loading="isUpdating"
          variant="outlined"
          height="36"
          border="sm"
          class="text-body-2"
          @click="isUpdating = true"
        >
          Filter Users And Groups
        </v-btn>
      </div>
      <div class="ml-2 mr-2 text-body-2">
        <!-- :variant="isUpdating ? 'tonal' : undefined" -->
        <v-btn
          :disabled="autoUpdate"
          :loading="isUpdating"
          variant="outlined"
          height="36"
          prepend-icon="mdi-sync"
          border="sm"
          class="text-body-2"
          @click="isUpdating = true"
        >
          Reload
        </v-btn>
        <v-btn
          variant="outlined"
          rounded="sm"
          height="36"
          width="30"
          icon="mdi-menu-down"
          border="sm"
        />
      </div>
      <!-- <div> -->
      <!-- <v-switch -->
      <!--   v-model="autoUpdate" -->
      <!--   :disabled="isUpdating" -->
      <!--   color="green-lighten-2" -->
      <!--   density="compact" -->
      <!--   label="Auto Update" -->
      <!--   hide-details -->
      <!-- ></v-switch> -->
      <!-- </div> -->
    </v-toolbar>

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
    <!-- <div class="d-flex"> -->
    <!-- </div> -->
  </v-card>
</template>

<script>
export default {
  data() {
    const srcs = {
      1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    };

    return {
      autoUpdate: false,
      selectedGroup: "parents",
      groups: ["kids", "parents", "friends"],
      friends: ["Sandra Adams", "Britta Holt"],
      isUpdating: false,
      name: "Midnight Crew",
      people: [
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
      ],
      title: "The summer breeze",
      timeout: null,
      location: "end",
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      locations: ["top", "bottom", "start", "end", "center"],
    };
  },

  watch: {
    isUpdating(val) {
      clearTimeout(this.timeout);

      if (val) {
        this.timeout = setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
