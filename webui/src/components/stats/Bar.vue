<script setup>
import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

const chartData = {
  labels: ["January", "February", "March"],
  datasets: [
    { data: [40, 20, 12], backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"] },
  ],
};
const chartOptions = {
  responsive: true,
};
</script>
<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
