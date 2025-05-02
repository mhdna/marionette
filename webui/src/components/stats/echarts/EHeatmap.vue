<template>
  <v-chart class="chart" :theme="currentTheme" autoresize :option="option" />
</template>

<script lang="ts" setup>
// import { ref, provide } from "vue";
import { use } from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import { time } from "echarts";
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  CalendarComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
// import VChart, { THEME_KEY } from "vue-echarts";

use([
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  CalendarComponent,
  HeatmapChart,
  CanvasRenderer,
]);

import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);

function getVirtualData(year) {
  const date = +time.parse(year + "-01-01");
  const end = +time.parse(+year + 1 + "-01-01");
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let t = date; t < end; t += dayTime) {
    data.push([
      time.format(t, "{yyyy}-{MM}-{dd}", false),
      Math.floor(Math.random() * 10000),
    ]);
  }
  return data;
}
const option = ref({
  backgroundColor: "transparent",
  // title: {
  //   top: 30,
  //   left: "center",
  //   text: "Daily Step Count",
  // },
  tooltip: {},
  visualMap: {
    min: 0,
    max: 10000,
    type: "piecewise",
    orient: "horizontal",
    left: "center",
    bottom: 0,
  },
  calendar: {
    top: 30,
    left: 20,
    right: 20,
    cellSize: ["auto", 13],
    range: "2016",
    itemStyle: {
      borderWidth: 0.5,
    },
    yearLabel: { show: false },
  },
  // calendar: [
  //   {
  //     top: 14,
  //     left: 20,
  //     right: 10,
  //     cellSize: ["auto", 13],
  //     range: "2016",
  //     itemStyle: {
  //       borderWidth: 0.5,
  //     },
  //     yearLabel: { show: false },
  //   },
  //   {
  //     top: 0,
  //     left: 20,
  //     right: 10,
  //     cellSize: ["auto", 13],
  //     range: "2016",
  //     itemStyle: {
  //       borderWidth: 0.5,
  //     },
  //     yearLabel: { show: false },
  //   },
  // ],
  series: {
    type: "heatmap",
    coordinateSystem: "calendar",
    data: getVirtualData("2016"),
  },
});
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
