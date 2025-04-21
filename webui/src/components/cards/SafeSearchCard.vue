<template>
  <v-card
    flat
    prepend-icon="mdi-magnify"
    title="Force Safe search"
    class="py-2 px-8"
  >
    <v-row>
      <v-card rounded class="mx-auto">
        <v-card-text>
          <v-icon icon="mdi-information" />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.</v-card-text
        >
      </v-card>
    </v-row>
    <v-row
      v-for="(app, index) in apps"
      :key="index"
      density="compact"
      class="align-center pa-0 ma-0"
    >
      <v-switch
        base-color="red"
        color="green"
        true-icon="mdi-check-bold"
        false-icon="mdi-close"
        :model-value="true"
        :label="app.name"
      />
      <!-- class="pt-5" -->
      <!-- <v-spacer /> -->
      <!-- <v-img :src="app.icon" :max-width="50" /> -->
      <!-- <v-row> -->
    </v-row>
  </v-card>
  <!-- <v-card -->
  <!--   v-for="(app, index) in apps" -->
  <!--   :key="index" -->
  <!--   class="d-flex" -->
  <!--   max-width="260" -->
  <!-- > -->
  <!--   <v-img :src="`/apps/` + app.icon" aspect-ratio="1" :width="80" /> -->
  <!--   <v-switch :label="app.name" /> -->
  <!-- </v-card> -->

  <!-- <v-navigation-drawer -->
  <!--   absolute -->
  <!--   class="position-fixed" -->
  <!--   width="100" -->
  <!--   color="purple-darken-4" -->
  <!--   permanent -->
  <!-- > -->
  <!--   <v-list> -->
  <!--     <!-- <v-list-item title="Navigation drawer"></v-list-item> -->
  <!--     <v-list-item prepend-icon="mdi-account-group-outline"> </v-list-item> -->
  <!--   </v-list> -->
  <!--   <v-list> -->
  <!--     <v-list-item title="group1" value="group1"></v-list-item> -->
  <!--     <v-list-item title="group2" value="group2"></v-list-item> -->
  <!--   </v-list> -->
  <!-- </v-navigation-drawer> -->
  <!-- <TextArea /> -->
  <!-- <Cards /> -->
</template>

<script lang="ts" setup>
import google from "super-tiny-icons/images/svg/google.svg";
import duckduckgo from "super-tiny-icons/images/svg/duckduckgo.svg";
import ecosia from "super-tiny-icons/images/svg/ecosia.svg";
import bing from "super-tiny-icons/images/svg/bing.svg";
import youtube from "super-tiny-icons/images/svg/youtube.svg";
import brave from "super-tiny-icons/images/svg/brave.svg";
import baidu from "super-tiny-icons/images/svg/baidu.svg";
import yahoo from "super-tiny-icons/images/svg/yahoo.svg";

const apps = [
  { name: "Google", icon: google },
  { name: "DuckDuckGo", icon: duckduckgo },
  { name: "Youtube", icon: youtube },
  { name: "Yandex", icon: "yandex.svg" },
  { name: "Bing", icon: bing },
  { name: "Yahoo", icon: yahoo },
  // { name: "DuckDuckGo", icon: "duckduckgo.svg" },
  { name: "Startpage", icon: "" },
  // { name: "Youtube", icon: "youtube.svg" },
  // { name: "Yandex", icon: "yandex.svg" },
  { name: "Qwant", icon: "" },
  { name: "Brave", icon: brave },
  { name: "Ecosia", icon: ecosia },
  { name: "Baidu", icon: baidu },
  { name: "Ask.com", icon: "" },
  { name: "Swisscows", icon: "" },
];
</script>

<!-- <route lang="yaml"> -->
<!-- meta: -->
<!--   layout: proxy -->
<!-- </route> -->
