<template>
  <!-- <TabBar :tabs="tabs" /> -->

  <router-view />
</template>

<script setup lang="ts">
interface Tab {
  text: string;
  to: string;
}

const tabs: Tab[] = [
  { text: "URLs", to: "/proxy/urls" },
  { text: "Phrases", to: "/proxy/phrases" },
  { text: "Redirects", to: "/proxy/redirects" },
  // { text: "Search Enforcement", to: "/proxy/safesearch" },
];
</script>
