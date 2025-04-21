<template>
  <div id="chart">
    <apexchart
      :options="options"
      :series="series"
      type="treemap"
      height="450"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAppStore } from "@/stores/app";

// const appStore = useAppStore();
// const theme = ref(appStore.theme);

const series = ref([
  {
    data: [
      {
        x: "New Delhi",
        y: 218,
      },
      {
        x: "Kolkata",
        y: 149,
      },
      {
        x: "Mumbai",
        y: 184,
      },
      {
        x: "Ahmedabad",
        y: 55,
      },
      {
        x: "Bangaluru",
        y: 84,
      },
      {
        x: "Pune",
        y: 31,
      },
      {
        x: "Chennai",
        y: 70,
      },
      {
        x: "Jaipur",
        y: 30,
      },
      {
        x: "Surat",
        y: 44,
      },
      {
        x: "Hyderabad",
        y: 68,
      },
      {
        x: "Lucknow",
        y: 28,
      },
      {
        x: "Indore",
        y: 19,
      },
      {
        x: "Kanpur",
        y: 29,
      },
    ],
  },
]);

const options = computed(() => ({
  theme: {
    mode: "dark", // theme.value
  },
  legend: {
    show: false,
  },
  chart: {
    height: 350,
    type: "treemap",
  },
  title: {
    text: "Distibuted Treemap (different color for each cell)",
    align: "center",
  },
  colors: [
    "#3B93A5",
    "#F7B844",
    "#ADD8C7",
    "#EC3C65",
    "#CDD7B6",
    "#C1F666",
    "#D43F97",
    "#1E5D8C",
    "#421243",
    "#7F94B0",
    "#EF6537",
    "#C0ADDB",
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false,
    },
  },
}));
</script>
