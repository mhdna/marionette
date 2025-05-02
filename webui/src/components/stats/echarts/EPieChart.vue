<template>
  <v-chart class="chart" :theme="currentTheme" autoresize :option="option" />
</template>

<script lang="ts" setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);

const option = ref({
  backgroundColor: "transparent",
  title: {
    // text: "Traffic Sources",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    backgroundColor: "#282828CC",
    textStyle: {
      color: "#ffffff",
      // fontFamily: "monospace",
    },
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  // legend: {
  //   orient: "vertical",
  //   left: "left",
  //   data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  // },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "80%",
      // center: ["30%", "40%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 250px;
}
</style>
