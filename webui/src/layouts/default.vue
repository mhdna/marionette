<!-- <script lang="ts" setup>
// import Sidebar from "@/components/layout/Sidebar";
import { ref } from "vue";

// // import Footer from "@/components/layout/Footer.vue";
// import ChangeLocale from "@/components/buttons/ChangeLocale.vue";
// import LoadingOverlay from "@/components/layout/LoadingOverlay.vue";

// import Dialog from "@/components/Dialog.vue";

// const loading = ref(false);

// onMounted(() =>
//   setTimeout(() => {
//     loading.value = false;
//   }, 500),
// );
</script> -->

<script lang="ts" setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

const showUsersDrawer = ref(false);

function toggleUsersDrawer() {
  showUsersDrawer.value = !showUsersDrawer.value;
}

const { mobile } = useDisplay();

// const isRail = ref(false);
const showNavigationDrawer = ref(!mobile.value); // required for initial state to depend on mobile or not

const toggleNavigationDrawer = () => {
  if (mobile.value) {
    isRail.value = false;
    showNavigationDrawer.value = !showNavigationDrawer.value;
  } else {
    isRail.value = !isRail.value;
  }
};

const loading = ref(true);

onMounted(() =>
  setTimeout(() => {
    loading.value = false;
  }, 1500),
);

// const menus = [
//   { icon: "list_alt", name: "イベント一覧", path: "/", color: "green" },
//   {
//     icon: "search",
//     name: "イベント検索",
//     path: "/search",
//     color: "indigo",
//   },
//   {
//     icon: "account_circle",
//     name: "マイページ",
//     path: "/mypage",
//     color: "red",
//   },
// ];
// const direction = ref("top");
// const fab = ref(false);
// const fling = ref(false);
// const hover = ref(false);
// const top = ref(false);
// const right = ref(true);
// const bottom = ref(true);
// const left = ref(false);
// const transition = ref("slide-y-reverse-transition");
// const show = ref(true);

// import { useRouter } from "vue-router";
// import { useI18n } from "vue-i18n";
// const { t } = useI18n();

// const barTitle_key = useRouter().currentRoute.value.meta.barTitle;
// const barTitle = t(barTitle_key);

interface Tab {
  text: string;
  to: string;
}

const tabs: Tab[] = [
  { text: "Overview", to: "/dashboard" },
  { text: "Internet Usage", to: "/dashboard/internet_usage" },
  { text: "App Usage", to: "/dashboard/app_usage" },
  { text: "Screenshots", to: "/dashboard/screenshots" },
  { text: "Key Loggers", to: "/dashboard/keyloggers" },
  { text: "URL Lists", to: "/proxy/urls" },
  { text: "Phrase Lists", to: "/proxy/phrases" },
  { text: "Redirects", to: "/proxy/redirects" },
];
</script>

<template>
  <!-- <v-layout class="rounded rounded-md"> -->
  <v-theme-provider>
    <!-- <v-responsive class="border rounded"> -->
    <v-app>
      <div id="navbar-wrapper" style="position: relative"></div>
      <!-- <v-fab -->
      <!--   key="app" -->
      <!--   absolute -->
      <!--   app -->
      <!--   color="#86a557" -->
      <!--   icon="mdi-magnify" -->
      <!--   location="bottom right" -->
      <!-- /> -->
      <NavDrawer
        :isRail="isRail"
        :showDrawer="showNavigationDrawer"
        @update:showDrawer="showNavigationDrawer = $event"
      />
      <!-- <NavDrawer -->
      <!--   :showDrawer="showNavigationDrawer" -->
      <!--   @update:showDrawer="showNavigationDrawer = $event" -->
      <!-- /> -->
      <AppBar
        @toggleNavigationDrawer="toggleNavigationDrawer"
        @toggleUsersDrawer="toggleUsersDrawer"
        :tabs="tabs"
      />
      <UsersListDrawer
        :showDrawer="showUsersDrawer"
        @update:showDrawer="showUsersDrawer = $event"
      />
      <!-- <AppBar -->
      <!--   @toggleNavigationDrawer="toggleNavigationDrawer" -->
      <!--   @toggleUsersDrawer="toggleUsersDrawer" -->
      <!--   title="marionette" -->
      <!-- /> -->
      <!-- class="d-flex align-center justify-center" -->
      <!-- <v-main style="min-height: 300px"> -->
      <v-main class="mb-4">
        <!-- <SetupGuide /> -->
        <!-- <LoadingOverlay :loading="loading" /> -->
        <!-- <h1>Dashboard</h1> -->
        <router-view />
      </v-main>
      <!-- <div id="navi"> -->
      <!--   <v-speed-dial -->
      <!--     v-model="fab" -->
      <!--     :top="top" -->
      <!--     :bottom="bottom" -->
      <!--     :right="right" -->
      <!--     :left="left" -->
      <!--     :direction="direction" -->
      <!--     :open-on-hover="hover" -->
      <!--     :transition="transition" -->
      <!--   > -->
      <!--     <v-btn slot="activator" v-model="fab" color="blue darken-2" dark fab> -->
      <!--       <v-icon v-if="fab">close</v-icon> -->
      <!--       <v-icon v-else>menu</v-icon> -->
      <!--     </v-btn> -->

      <!--     <div v-for="menu of menus" :key="menu.icon"> -->
      <!--       <v-tooltip left value="true" show="show"> -->
      <!--         <v-btn -->
      <!--           slot="activator" -->
      <!--           color="primary" -->
      <!--           dark -->
      <!--           fab -->
      <!--           small -->
      <!--           :color="menu.color" -->
      <!--           @click="gotoPage(menu.path)" -->
      <!--         > -->
      <!--           <v-icon>{{ menu.icon }}</v-icon> -->
      <!--         </v-btn> -->
      <!--         <span>{{ menu.name }}</span> -->
      <!--       </v-tooltip> -->
      <!--     </div> -->
      <!--   </v-speed-dial> -->
      <!-- </div> -->
      <Footer />
    </v-app>

    <!-- </v-layout> -->
    <!--</v-responsive> -->
  </v-theme-provider>
</template>

<style>
/* Must be global, NOT scoped */
#nprogress .bar {
  background: #5c6bc0 !important; /* color */
  height: 5px !important; /* height */
}
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  position: absolute !important; /* not fixed */
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #ff5722;
  z-index: 9999;
}
</style>
<!-- <style> -->
<!-- #navi .v-speed-dial { -->
<!--   position: absolute; -->
<!-- } -->

<!-- #navi .v-btn--floating { -->
<!--   position: relative; -->
<!-- } -->
<!-- </style> -->
