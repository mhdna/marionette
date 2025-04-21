<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const series = ref([
  {
    name: "Marine Sprite",
    data: [44, 55, 41, 37, 22, 43, 21],
  },
  {
    name: "Striking Calf",
    data: [53, 32, 33, 52, 13, 43, 32],
  },
  {
    name: "Tank Picture",
    data: [12, 17, 11, 9, 15, 11, 20],
  },
]);

import { computed } from "vue";
// import { onBeforeMount, computed } from "vue";
// import LoaderBox from "@/components/layout/LoaderBox.vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);

watch(
  () => theme.global.current.value.dark,
  (newVal) => {
    console.log(newVal);
    updateChartOptions();
  },
);
const updateChartOptions = () => {
  chartOptions.value = {
    ...chartOptions.value,
    theme: { mode: currentTheme.value },
  };
};

const chartOptions = ref({
  theme: {
    mode: currentTheme.value,
    palette: "palette7",
  },
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        total: {
          enabled: true,
          offsetX: 0,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  stroke: {
    width: 1,
    colors: ["#fff"],
  },
  // title: {
  //   text: "Fiction Books Sales",
  // },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
  yaxis: {
    title: {
      text: undefined,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
  },
});
</script>
