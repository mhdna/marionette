<template>
  <!-- TODO: refine and minimalize -->
  <!--  permanent makes your bar always apparent even after resize -->
  <!-- :image="bg" -->
  <v-navigation-drawer
    absolute
    app
    mobile-breakpoint="sm"
    :rail="isRail"
    :model-value="props.showDrawer"
    @update:model-value="emit('update:showDrawer', $event)"
    :temporary="xs"
    class="position-fixed"
  >
    <!-- :rail="props.isRail" -->
    <!-- width="240" -->
    <!-- :temporary="isDock" -->
    <!-- :model-value="isDock || props.showDrawer" -->
    <!-- TODO v-model="!mobile && drawer" -->
    <!-- <p class="text-center">{{ $t("layout.title") }}</p> -->
    <!-- prepend-avatar="/profile.jpg" -->
    <!-- <v-list-item subtitle="mahdi@mail.com" title="Papa Mahdi"> -->
    <template v-slot:prepend>
      <!-- <div class="pa-0"> -->
      <!-- <AppTitle /> -->
      <!-- <AppTitleWithDot2 /> -->
      <v-list-item>
        <template v-slot:prepend>
          <v-avatar size="40" class="avatar-align">
            <!-- <v-img src="https://cdn.vuetifyjs.com/images/lists/4.jpg" /> -->
            <v-img src="/profile.jpg" />
          </v-avatar>
        </template>
        <template v-slot:append>
          <div>
            <v-list-item-title>Papa Mahdi</v-list-item-title>
            <!-- <v-list-item-title>Rashel Gabriel</v-list-item-title> -->
            <!-- FIXME if so long it'll push the arrow to the right -->
            <v-list-item-subtitle>mahdi@gmail.com</v-list-item-subtitle>
          </div>
          <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn>
        </template>
      </v-list-item>
      <div v-if="!isRail">
        <StatsCard />
      </div>
      <!-- <Dot v-else /> -->
      <!-- </div> -->
      <!-- <v-avatar size="50px"> -->
      <!--   <v-img src="/profile.jpg"></v-img> -->
      <!-- </v-avatar> -->
      <!-- <v-btn icon="mdi-menu-down" size="small" variant="text"></v-btn> -->
      <!-- <StatusCard /> -->
    </template>
    <!-- <v-divider thickness="2" /> -->
    <!-- <div style="height: 1px; background-color: grey; border-radius: 80px"></div> -->
    <!-- </v-list-item> -->
    <!-- <Reload /> -->
    <!-- <v-divider></v-divider> -->

    <!-- nav -->
    <v-list density="compact" v-model:opened="open">
      <!-- class="mt-0 pt-0" -->
      <!-- <v-list-item class="text-center"> -->
      <!-- <SearchInput v-show="!smAndDown" /> -->
      <!-- <SearchInput /> -->
      <!-- <SearchInputDialog class="mr-4" /> -->
      <!-- </v-list-item> -->
      <MenuItem
        :isRail="isRail"
        v-for="item in items"
        :item="item"
        :key="item.text"
      />
    </v-list>

    <template v-slot:append>
      <v-list density="compact">
        <MenuItem
          v-for="(item, i) in bottomItems"
          :item="item"
          :key="item.text"
        />
      </v-list>
      <!-- <v-toolbar height="35"> -->
      <!--   <v-spacer /> -->
      <!--   <v-btn -->
      <!--     v-tooltip:bottom="'Minimize menu'" -->
      <!--     icon="mdi-unfold-less-vertical" -->
      <!--     @click="toggleRail" -->
      <!--     min-width="30" -->
      <!--   /> -->
      <!-- <v-btn -->
      <!--   v-tooltip:bottom="'Undock menu'" -->
      <!--   icon="mdi-dock-window" -->
      <!--   @click="toggleDock" -->
      <!--   min-width="30" -->
      <!-- /> -->
      <!-- </v-toolbar> -->
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import { useDisplay } from "vuetify";

const { mobile, xs } = useDisplay();
// const { sm } = useDisplay();
// const isRail = ref(false);

interface MenuItem {
  text: string;
  icon: string;
  to?: string;
  subItems?: MenuItem[];
}

const bottomItems = computed<MenuItem[]>(() => [
  {
    text: t("settings"),
    value: "settings",
    // icon: "mid-account-group-outline",
    icon: "mdi-cog",
    to: "/settings",
  },
  {
    text: t("Ask for Help"),
    value: "help",
    // icon: "mid-account-group-outline",
    icon: "mdi-help-circle-outline",
    to: "/bugs",
  },
  // {
  //   text: t("Report a bug"),
  //   value: "bug",
  //   // icon: "mid-account-group-outline",
  //   icon: "mdi-bug",
  //   to: "/bugs",
  // },
  // { text: "Backups", icon: "mdi-cloud-upload" },
]);

const items = computed<MenuItem[]>(() => [
  {
    text: t("overview"),
    value: "overview",
    // icon: "mdi-monitor-dashboard",
    icon: "mdi-view-dashboard",
    to: "/dashboard/",
    subItems: [
      {
        text: "Overview",
        value: "overview",
        icon: "mdi-square",
        to: "/dashboard/overview",
      },
      {
        text: "Time Tables",
        value: "time_tables",
        icon: "mdi-clock",
        to: "/dashboard/time_tables",
      },
      {
        text: "Internet Usage",
        value: "internet_usage",
        icon: "mdi-link",
        to: "/dashboard/internet_usage",
      },
      // {
      //   text: "App Usage",
      //   value: "app_usage",
      //   icon: "mdi-application",
      //   to: "/dashboard/app_usage",
      // },
      {
        text: "Screenshots",
        value: "screenshots",
        icon: "mdi-image",
        to: "/dashboard/screenshots",
      },
      {
        text: "Key Loggers",
        value: "keyloggers",
        icon: "mdi-keyboard",
        to: "/dashboard/keyloggers",
      },
    ],
  },
  {
    text: t("proxy_config"),
    icon: "mdi-server-network",
    value: "proxy_config",
    to: "/proxy",
    subItems: [
      {
        text: "URL Lists",
        value: "url_list",
        icon: "mdi-link",
        to: "/proxy/urls",
      },
      {
        text: "Phrases",
        value: "phrases",
        icon: "mdi-file-word-box",
        to: "/proxy/phrases",
      },
      {
        text: "Redirects",
        value: "redirects",
        icon: "mdi-arrow-down-right",
        to: "/proxy/redirects",
      },
      // {
      //   text: "Categories",
      //   value: "categories",
      //   icon: "mdi-shape",
      //   to: "/proxy/categories",
      // },
      // {
      //   text: "Safe Search",
      //   value: "safesearch",
      //   icon: "mdi-magnify",
      //   to: "/proxy/safesearch",
      // },
      // {
      //   text: "Manage Time",
      //   value: "managetime",
      //   icon: "mdi-clock",
      //   to: "/proxy/times",
      // },
    ],
  },
  {
    text: "App Settings",
    value: "apps",
    icon: "mdi-application",
    to: "/apps",
  },
  // {
  //   text: t("apps"),
  //   value: "apps",
  //   icon: "mdi-gas-station",
  //   to: "/f/BanURLs",
  // },
  // {
  //   text: t("screenshots"),
  //   value: "screenshots",
  //   icon: "mdi-image-multiple",
  //   to: "/screenshots",
  // },
  {
    text: "Live Chat",
    value: "livechat",
    icon: "mdi-chat",
    to: "/chat",
  },
  {
    text: "Requests",
    value: "acknowledgements",
    icon: "mdi-email-newsletter",
    to: "/acknowledgements",
  },
  // {
  //   text: "Keyloggers",
  //   value: "keyloggers",
  //   icon: "mdi-keyboard",
  //   to: "/keyloggers",
  // },
  // {
  //   text: "Screenshots",
  //   value: "screenshots",
  //   icon: "mdi-image",
  //   to: "/screenshots",
  // },
  // {
  //   text: "Livestream",
  //   value: "live_stream",
  //   icon: "mdi-video",
  //   to: "/livestream",
  // },
  {
    text: t("users"),
    value: "users",
    // icon: "mid-account-group-outline",
    icon: "mdi-account-group",
    to: "/users",
  },
  // { text: "Backups", icon: "mdi-cloud-upload" },
]);
// const open = ["Users"];
// const admins = [
//   ["Management", "mdi-account-multiple-outline"],
//   ["Settings", "mdi-cog-outline"],
// ];
// const cruds = [
//   ["Create", "mdi-plus-outline"],
//   ["Read", "mdi-file-outline"],
//   ["Update", "mdi-update"],
//   ["Delete", "mdi-delete"],
// ];

import { ref, watchEffect } from "vue";
import { useTheme } from "vuetify";

const open = ref([t("proxy_config")]);

// const theme = useTheme();

// const bg = computed(() =>
//   theme.global.name.value === "light" ? bgLight : bgDark,
// );

const props = defineProps<{
  // isRail: boolean;
  showDrawer: boolean;
}>();

const isRail = ref(false);

watchEffect(() => {
  isRail.value = mobile.value && !xs.value;
});

const emit = defineEmits(["update:showDrawer"]);

// const toggleRail = () => {
//   isRail.value = !isRail.value;
// };

// const drawer = ref(true);

// const toggle = () => {
//   drawer.value = !drawer.value;
// };

// defineExpose({ toggle });
// const isDock = ref(false);

// const toggleDock = () => {
//   isDock.value = !isDock.value;
//   emit("update:showDrawer", true);
// };
</script>

<style>
.status_item {
  font-size: 13px;
  font-family: monospace;
  font-weight: bold;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.avatar-align {
  margin-left: -6px;
}
</style>

<!-- <script setup>
// import ToggleTheme from "@/components/buttons/ToggleTheme.vue";
// import { ref } from "vue";

// const theme = ref("theme");

// function onClick() {
//   theme.value = theme.value === "light" ? "customDarkTheme" : "light";
// }
</script> -->

<!-- <template>
  <v-app-bar class="px-3">
    <v-card> {{ $t("layout.title") }} </v-card>
    <v-spacer /> -->
<!-- <ToggleTheme :theme="theme" @toggle-theme="onClick" /> -->
<!-- </v-app-bar>
</template> -->

<!-- <route lang="yaml"> -->
<!-- meta: -->
<!--   layout: proxy -->
<!-- </route> -->
