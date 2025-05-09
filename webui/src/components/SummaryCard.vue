<template>
  <v-card
    class="d-flex flex-column justify-center me-2 position-relative"
    :min-width="minWidth"
  >
    <!-- style="border-bottom: 6px solid #5c6bc0" -->
    <div
      class="d-flex position-absolute top-0 left-0 right-0 bg-surface-light align-center px-1"
      style="height: 16px; background-color: grey"
    >
      <v-icon class="cursor-surface" icon="mdi-drag-horizontal" />
      <!-- <v-spacer /> -->
      <!-- <v-icon class="cursor-surface" icon="mdi-close" /> -->
    </div>
    <div
      class="text-center bg-surface pt-1 mt-3 mb-1"
      style="height: 15px; background-color: grey"
    >
      {{ title }}
    </div>
    <v-card-item class="d-flex justify-center">
      <!-- <div class="d-flex justify-center"> -->
      <!-- <div class="text-no-wrap"># Of Successful Requests</div> -->
      <!-- <v-icon color="grey" class="me-3 cursor-grab" icon="mdi-drag" /> -->
      <!-- </div> -->
      <div class="d-flex">
        <span class="text-h3 my-1">{{ count }}</span>
        <span>{{ unit }}</span>
        <span v-if="changeRate" class="d-flex justify-center">
          <span
            v-if="changeRateIsNegative"
            class="d-flex align-center ga-2 text-red-darken-4"
          >
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-down">
              <v-icon size="16" />
            </v-avatar>
            {{ changeRate }}{{ changeRateUnit }}
          </span>
          <span v-else class="d-flex align-center ga-2 text-green-darken-4">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-up">
              <v-icon size="16" />
            </v-avatar>
            {{ changeRate }}{{ changeRateUnit }}
          </span>
        </span>
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    minWidth: number;
    title: string;
    count: number;
    unit: string;
    changeRate?: string;
    changeRateIsNegative?: boolean;
    changeRateUnit?: string;
  }>(),
  {
    changeRateIsNegative: false,
    unit: "",
    changeRate: 0,
  },
);
</script>
