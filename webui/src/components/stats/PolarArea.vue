<template>
  <!-- <LoaderBox :loading="loading"> -->
  <div id="chart">
    <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
  <!-- </LoaderBox> -->
</template>

<script setup lang="ts">
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

// const loading = ref(true);
// onBeforeMount(() => {
//   setTimeout(() => (loading.value = false), 1000);
// });

const series = ref([14, 23, 21, 17, 15, 10, 12, 17, 21]);

const chartOptions = ref({
  theme: {
    mode: currentTheme.value,
    palette: "palette8",
  },
  chart: {
    type: "pie",
  },
  stroke: {
    colors: ["#444444"],
  },
  fill: {
    opacity: 0.8,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  // responsive: [
  //   {
  //     breakpoint: 480,
  //     options: {
  //       chart: {
  //         width: 200,
  //       },
  //       legend: {
  //         position: "bottom",
  //       },
  //     },
  //   },
  // ],
});

const updateChartOptions = () => {
  chartOptions.value = {
    ...chartOptions.value,
    theme: { mode: currentTheme.value },
  };
};
</script>
