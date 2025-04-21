<template>
  <v-card flat>
    <!-- <v-card-title class="d-flex align-center pe-2"> -->
    <!-- <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;  -->
    <!-- Most used apps -->

    <!--   <v-spacer></v-spacer> -->

    <!--   <v-text-field -->
    <!--     v-model="search" -->
    <!--     density="compact" -->
    <!--     label="Search" -->
    <!--     prepend-inner-icon="mdi-magnify" -->
    <!--     variant="solo-filled" -->
    <!--     flat -->
    <!--     hide-details -->
    <!--     single-line -->
    <!--   ></v-text-field> -->
    <!-- </v-card-title> -->

    <v-divider></v-divider>
    <v-data-table
      density="compact"
      v-model:search="search"
      :filter-keys="['name']"
      :items="items"
      items-per-page="14"
    >
      <template v-slot:header.stock>
        <div class="text-end">Stock</div>
      </template>

      <template v-slot:item.icon="{ item }">
        <v-img :src="`/apps/apps/${item.icon}`" height="35"></v-img>
      </template>

      <!--     color="orange-darken-2" -->
      <!--     density="compact" -->
      <!--     size="small" -->
      <!--     readonly -->
      <!-- </template> -->

      <template v-slot:item.stock="{ item }">
        <div class="text-end">
          <v-chip
            :color="item.stock ? 'green' : 'red'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

const search = ref("");
const items = [
  {
    icon: "org.mozilla.Firefox.svg",
    name: "Firefox",
    group: 699.99,
    user: "Ali",
    stock: true,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
  {
    icon: "com.google.Chrome.svg",
    name: "Chrome",
    group: 649.99,
    user: "Mahdi",
    stock: true,
  },
  {
    icon: "utilities-x-terminal.svg",
    name: "Terminal",
    group: 1499.99,
    user: "Ali",
    stock: true,
  },
  {
    icon: "utilities-x-terminal.svg",
    name: "Terminal",
    group: 1499.99,
    user: "Ali",
    stock: true,
  },
  {
    icon: "vscode.svg",
    name: "VScode",
    group: 299.99,
    user: "Ali",
    stock: false,
  },
  {
    icon: "com.google.Chrome.svg",
    name: "Chrome",
    group: 649.99,
    user: "Mahdi",
    stock: true,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
];
</script>
