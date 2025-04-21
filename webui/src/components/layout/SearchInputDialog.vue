<template>
  <div>
    <!-- variant="tonal" -->
    <v-btn
      style="font-size: 12px"
      variant="flat"
      @click="dialog = true"
      prepend-icon="mdi-magnify"
      >Search &nbsp;<v-code> Ctrl-k </v-code>
    </v-btn>
    <v-dialog
      style="background-color: black; color: white; opacity: 0.9"
      v-model="dialog"
      width="auto"
    >
      <!-- <v-card width="400" title="Search"> -->
      <!-- <template v-slot:actions> -->
      <!--   <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn> -->
      <!-- </template> -->
      <v-autocomplete
        width="400"
        v-model="selectedRoute"
        transition="slide-y-transition"
        ref="searchBar"
        :items="items"
        density="compact"
        :placeholder="$t('search')"
        prepend-inner-icon="mdi-magnify"
        variant="filled"
        flat
        hide-details
        single-line
        item-title="title"
        item-value="route"
        @update:modelValue="goToRoute"
        auto-select-first
        :no-data-text="'No routes found'"
      >
        <template v-slot:item="{ props, item }">
          <v-list-item
            v-bind="props"
            :subtitle="item.raw.subtitle"
            :prepend-icon="item.raw.prependIcon"
          >
          </v-list-item>
        </template>
      </v-autocomplete>
      <!-- </v-card> -->
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const dialog = ref(false);

const router = useRouter();
const searchBar = ref<HTMLInputElement | null>(null);
const selectedRoute = ref(null);

const goToRoute = (route: string | null) => {
  dialog.value = false;
  if (route) {
    router.push(route);
  }
  selectedRoute.value = null; // Reset selected route
  if (searchBar?.value) {
    searchBar.value.blur();
  }
};

// const selectFirstItem = () => {
//   if (!selectedRoute.value && items.length > 0) {
//     selectedRoute.value = items[0].route;
//   }
//   goToRoute(selectedRoute.value);
// };

const openSearchBar = (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key === "k") {
    event.preventDefault();
    dialog.value = true;
    setTimeout(() => {
      if (searchBar?.value) {
        searchBar.value.focus();
      }
    }, 0);
  }
};

onMounted(() => {
  window.addEventListener("keydown", openSearchBar);
});

onUnmounted(() => {
  window.removeEventListener("keydown", openSearchBar);
});

const items = [
  // TODO do it right
  // TODO english autocomplete even if you're typing arabic
  // TODO icons not working
  {
    prependIcon: "mdi-magnify",
    title: "Overview",
    subtitle: "Safe Search",
    route: "/",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Screenshots",
    subtitle: "Safe Search",
    route: "/screenshots",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "URL List",
    subtitle: "Safe Search",
    route: "/proxy/urls",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Phrases",
    subtitle: "Safe Search",
    route: "/proxy/phrases",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Redirects",
    subtitle: "Safe Search",
    route: "/proxy/redirects",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Safe Search",
    subtitle: "Safe Search",
    route: "/proxy/safesearch",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Safe Search",
    subtitle: "Safe Search",
    route: "/proxy/safesearch",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Safe Search",
    subtitle: "Safe Search",
    route: "/proxy/safesearch",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Safe Search",
    subtitle: "Safe Search",
    route: "/proxy/safesearch",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Safe Search",
    subtitle: "Safe Search",
    route: "/proxy/safesearch",
  },
];
</script>
