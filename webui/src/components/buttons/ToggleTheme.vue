<template>
  <!-- TODO auto theme and list chosen -->
  <v-btn v-tooltip:bottom="'Toggle Theme'" @click="toggleTheme" icon>
    <!-- <v-icon :style="{ -->
    <!--   color: theme.global.current.value.dark ? 'darkblue' : 'yellow', -->
    <!-- }"> -->
    <v-icon icon="mdi-theme-light-dark">
      <!-- {{ -->
      <!--   theme.global.current.value.dark -->
      <!--     ? "mdi-weather-night" -->
      <!--     : "mdi-white-balance-sunny" -->
      <!-- }} -->
    </v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
