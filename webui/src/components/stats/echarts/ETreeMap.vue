<template>
  <v-chart class="chart" :theme="currentTheme" autoresize :option="option" />
</template>

<script lang="ts" setup>
import { use } from "echarts/core";
import { TreemapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import type { ComposeOption } from "echarts/core";
import type { TreemapSeriesOption } from "echarts/charts";

use([TreemapChart, CanvasRenderer]);

type EChartsOption = ComposeOption<TreemapSeriesOption>;

import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);

const option = ref({
  backgroundColor: "transparent",
  series: [
    {
      type: "treemap",
      data: [
        {
          name: "nodeA",
          value: 10,
          children: [
            {
              name: "Comms",
              value: 4,
            },
            {
              name: "Chat",
              value: 6,
            },
            {
              name: "Internet",
              value: 20,
              color: "yellow",
            },
          ],
        },
        // {
        //   name: "nodeB",
        //   value: 20,
        //   children: [
        //     {
        //       name: "nodeBa",
        //       value: 20,
        //       children: [
        //         {
        //           name: "Internet",
        //           value: 20,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 450px;
}
</style>
