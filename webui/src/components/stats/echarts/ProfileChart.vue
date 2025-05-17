<template>
  <v-chart
    id="profile-chart"
    class="chart"
    :theme="currentTheme"
    autoresize
    :option="option"
  />
</template>

<script lang="ts" setup>
import { use } from "echarts/core";
import { graphic } from "echarts";
import { CustomChart } from "echarts/charts";
import {
  TooltipComponent,
  TitleComponent,
  DataZoomComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { ComposeOption } from "echarts/core";
import type { CustomSeriesOption } from "echarts/charts";
import type {
  TooltipComponentOption,
  TitleComponentOption,
  DataZoomComponentOption,
  GridComponentOption,
} from "echarts/components";

use([
  TooltipComponent,
  TitleComponent,
  DataZoomComponent,
  GridComponent,
  CustomChart,
  CanvasRenderer,
]);

type EChartsOption = ComposeOption<
  | TooltipComponentOption
  | TitleComponentOption
  | DataZoomComponentOption
  | GridComponentOption
  | CustomSeriesOption
>;

import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);

var data = [];
var dataCount = 10;
var startTime = +new Date();
var categories = ["categoryA"];
var types = [
  { name: "JS Heap", color: "#7b9ce1" },
  { name: "Documents", color: "#bd6d6c" },
  { name: "Nodes", color: "#75d874" },
  { name: "Listeners", color: "#e0bc78" },
  { name: "GPU Memory", color: "#dc77dc" },
  { name: "GPU", color: "#72b362" },
];

// Generate mock data
categories.forEach(function (category, index) {
  var baseTime = startTime;
  for (var i = 0; i < dataCount; i++) {
    var typeItem = types[Math.round(Math.random() * (types.length - 1))];
    var duration = Math.round(Math.random() * 10000);
    data.push({
      name: typeItem.name,
      value: [index, baseTime, (baseTime += duration), duration],
      itemStyle: {
        normal: {
          color: typeItem.color,
        },
      },
    });
    baseTime += Math.round(Math.random() * 2000);
  }
});
function renderItem(params, api) {
  var categoryIndex = api.value(0);
  var start = api.coord([api.value(1), categoryIndex]);
  var end = api.coord([api.value(2), categoryIndex]);
  var height = api.size([0, 1])[1] * 0.6;
  var rectShape = graphic.clipRectByRect(
    {
      x: start[0],
      y: start[1] - height / 2,
      width: end[0] - start[0],
      height: height,
    },
    {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
    },
  );
  return (
    rectShape && {
      type: "rect",
      transition: ["shape"],
      shape: rectShape,
      style: api.style(),
    }
  );
}

const option = ref({
  backgroundColor: "transparent",
  tooltip: {
    formatter: function (params) {
      return params.marker + params.name + ": " + params.value[3] + " ms";
    },
    backgroundColor: "#282828CC",
    textStyle: {
      color: "#ffffff",
      // fontFamily: "monospace",
    },
  },
  // title: {
  //   text: "Profile",
  //   left: "center",
  // },
  dataZoom: [
    {
      type: "slider",
      filterMode: "weakFilter",
      showDataShadow: false,
      top: 135,
      right: 40,
      left: 80,
      labelFormatter: "",
    },
    {
      type: "inside",
      filterMode: "weakFilter",
    },
  ],
  grid: {
    height: 100,
    left: 80,
    top: 10,
    right: 40,
    bottom: 0,
  },
  xAxis: {
    min: startTime,
    scale: true,
    axisLabel: {
      formatter: function (val) {
        return Math.max(0, val - startTime) + " ms";
      },
    },
  },
  yAxis: {
    data: categories,
  },
  series: [
    {
      type: "custom",
      renderItem: renderItem,
      itemStyle: {
        opacity: 0.8,
      },
      encode: {
        x: [1, 2],
        y: 0,
      },
      data: data,
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 180px;
}
</style>
