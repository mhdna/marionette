<template>
  <!-- text-black -->
  <v-app-bar density="compact" class="position-fixed" :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="emit('toggleNavigationDrawer')">
      </v-app-bar-nav-icon>
      <!-- v-tooltip:bottom="'Toggle navigation drawer'" -->

      <!-- <v-sheet elevation="6">
        <v-tabs
          bg-color="indigo"
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
          height="34px"
        >
          <v-tab v-for="i in 30" :key="i" :text="`Item ${i}`"></v-tab>
        </v-tabs>
      </v-sheet> -->
    </template>
    <!-- <template v-slot:extension> -->
    <!--   <v-tabs align-tabs="title" v-if="tabs.length > 0"> -->
    <!--     <v-tab -->
    <!--       v-for="tab in tabs" -->
    <!--       :key="tab.to" -->
    <!--       :to="tab.to" -->
    <!--       :text="tab.text" -->
    <!--       :value="tab.to" -->
    <!--     ></v-tab> -->
    <!--   </v-tabs> -->
    <!--   <FilterButtons /> -->
    <!-- </template> -->

    <!-- <v-app-bar-title style="font-family: Lobster; font-size: 26px"> -->
    <!-- <v-img width="170" src="/marionette2.png" /> -->
    <!-- {{ title }} -->
    <!-- {{ props.title }} -->
    <v-app-bar-title>
      <div class="d-flex align-center">
        <!-- <div style="font-family: serif; font-size: 20px">Marionette</div> -->
        <!-- <div style="font-size: 20px">Dashboard</div> -->
        <AppTitleWithDot2 :lang="current" />
        <NavigationLinks :isRtl="isRtl" />

        <!-- <SnackBar /> -->
        <!--     <v-tabs v-if="tabs.length > 0"> -->
        <!--       <v-tab -->
        <!--         v-for="tab in tabs" -->
        <!--         :key="tab.to" -->
        <!--         :to="tab.to" -->
        <!--         :text="tab.text" -->
        <!--         :value="tab.to" -->
        <!--       ></v-tab> -->
        <!--     </v-tabs> -->
      </div>
    </v-app-bar-title>
    <!-- <v-text-field -->
    <!--   density="compact" -->
    <!--   :placeholder="$t('search')" -->
    <!--   prepend-inner-icon="mdi-magnify" -->
    <!--   variant="solo" -->
    <!--   width="200" -->
    <!--   flat -->
    <!--   hide-details -->
    <!--   single-line -->
    <!-- ></v-text-field> -->
    <v-col cols="12" sm="6" md="3" v-show="!smAndDown">
      <SearchInput />
    </v-col>
    <!-- <SearchInputDialog class="mr-4" /> -->
    <template v-slot:append>
      <!-- FIXME rtl not working properly -->
      <div class="d-flex align-center">
        <v-btn class="me-1" @click="emit('toggleUsersDrawer')">
          <!-- v-tooltip:bottom="'Toggle Users Drawer'" -->
          <b class="me-1">25/51</b>
          <v-icon size="x-large" icon="mdi-account-multiple" />
        </v-btn>

        <Notifications class="me-3" />
        <ToggleTheme />
        <ChangeLanguage />
      </div>
      <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
const tab = ref(null);
import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay();

interface Tab {
  text: string;
  to: string;
}

const props = withDefaults(
  defineProps<{
    tabs: Tab[];
    title: string;
  }>(),
  {
    tabs: [],
  }
);

const emit = defineEmits<{
  (e: "toggleNavigationDrawer"): void;
  (e: "toggleUsersDrawer"): void;
}>();

const items = ref([
  {
    title: "Dashboard",
    disabled: false,
    href: "breadcrumbs_dashboard",
  },
  {
    title: "Link 1",
    disabled: false,
    href: "breadcrumbs_link_1",
  },
]);

import { useRouter } from "vue-router";
import { useLocale } from "vuetify";

const { current, isRtl } = useLocale();

const loading = ref(true);
const router = useRouter();

onMounted(() => {
  router.beforeEach((to, from, next) => {
    loading.value = true;
    next();
  });

  router.afterEach(() => {
    setTimeout(() => {
      loading.value = false;
    }, 500);
  });
});
</script>

<!-- <script setup lang="ts"> -->
<!-- import { useTheme } from "vuetify"; -->

<!-- const theme = useTheme(); -->
<!-- </script> -->
