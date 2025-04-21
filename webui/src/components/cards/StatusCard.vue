<template>
  <div>
    <div class="status_item text-center">
      <v-icon color="green-darken-2" icon="mdi-circle" size="large"> </v-icon>
      <span class="text-body-1 font-weight-bold">Active</span>
    </div>
    <div class="status_item">
      <v-icon icon="mdi-laptop" size="large"> </v-icon>
      Connected Devices: 18
    </div>
    <div style="display: flex">
      <div class="status_item">
        CPU: 12%
        <v-icon icon="mdi-brain" size="large"> </v-icon>
      </div>
      <div class="status_item">
        MEM: 17%
        <v-icon icon="mdi-memory" size="large"> </v-icon>
      </div>
    </div>
  </div>
</template>
