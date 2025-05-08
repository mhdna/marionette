<template>
  <v-list-item
    class="mb-4 mt-4 pa-0 d-flex align-center"
    style="font-family: Lobster; font-size: 28px"
    nav
  >
    <template v-slot:prepend>
      <v-icon
        size="30"
        color="#a70000"
        icon="mdi-circle"
        class="mx-3 me-1 mt-1"
      />
    </template>
    <template v-slot:append>
      <div class="pt-1">
        <span>mar</span>
        <!-- <span style="color: #a70000">ı</span> -->
        <span>i</span>
        <!-- <span>ı</span> -->
        <span>onette</span>
      </div>
    </template>
  </v-list-item>
</template>
