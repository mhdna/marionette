<script setup>
import { CalendarHeatmap } from "vue3-calendar-heatmap";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";

const startDate = new Date(new Date().setDate(new Date().getDate() - 30)); // 30 days ago
const endDate = new Date(); // today

const heatmapData = [
  { date: "2024-12-01", count: 5 },
  { date: "2024-12-02", count: 2 },
  { date: "2024-12-03", count: 7 },
  // Add more data points as needed
];
</script>

<template>
  <CalendarHeatmap :start-date="startDate" dark-mode :end-date="endDate"
    :range-color="['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']" :values="heatmapData" />
</template>
