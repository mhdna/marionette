<template>
  <v-chart class="chart" :theme="currentTheme" autoresize :option="option" />
</template>

<script lang="ts" setup>
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { ComposeOption } from "echarts/core";
import type { LineSeriesOption } from "echarts/charts";
import type {
  TitleComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
  ToolboxComponentOption,
  GridComponentOption,
} from "echarts/components";

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
]);

type EChartsOption = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
  | GridComponentOption
  | LineSeriesOption
>;

import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);

const option = ref({
  backgroundColor: "transparent",
  // animationDuration: 1000,
  // title: {
  //   text: "Stacked Area Chart",
  // },
  tooltip: {
    trigger: "axis",
    backgroundColor: "#282828CC",
    textStyle: {
      color: "#ffffff",
      // fontFamily: "monospace",
    },
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    // orient: "horizontal",
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
