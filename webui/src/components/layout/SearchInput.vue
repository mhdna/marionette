<template>
  <!-- <v-col cols="12" sm="6" md="3"> -->
  <!-- :prefix="$t('search')" -->
  <v-autocomplete
    transition="slide-y-transition"
    ref="searchBar"
    :items="items"
    prepend-inner-icon="mdi-magnify"
    flat
    variant="solo"
    density="compact"
    hide-details
    single-line
    item-title="title"
    item-value="route"
    @update:modelValue="goToRoute"
    auto-select-first
    :no-data-text="'No routes found'"
  >
    <template #label>
      <span
        >Search <v-code><b>C-K</b></v-code></span
      >
    </template>
    <template v-slot:item="{ props, item }">
      <v-list-item
        v-bind="props"
        :subtitle="item.raw.subtitle"
        :prepend-icon="item.raw.prependIcon"
      >
      </v-list-item>
    </template>
  </v-autocomplete>
  <!-- </v-col> -->
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const router = useRouter();
const searchBar = ref<HTMLInputElement | null>(null);
const selectedRoute = ref<string>("");

const goToRoute = (route: string | null) => {
  if (route) {
    router.push(route);
  }
  selectedRoute.value = ""; // Reset selected route
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
    if (searchBar?.value) {
      searchBar.value.focus();
    }
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
