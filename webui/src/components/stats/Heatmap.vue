<template>
  <!-- <LoaderBox :loading="loading"> -->
  <div id="chart">
    <apexchart
      :options="options"
      :series="series"
      type="heatmap"
      height="300"
    />
  </div>
  <!-- </LoaderBox> -->
</template>

<script setup lang="ts">
// import axios from "axios";
// import LoaderBox from "@/components/layout/LoaderBox.vue";

function generateData(
  count: number,
  { min, max }: { min: number; max: number },
) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      x: `Day ${i + 1}`,
      y: Math.floor(Math.random() * (max - min + 1)) + min,
    });
  }
  return data;
}

import { useTheme } from "vuetify";
import { onBeforeMount, onMounted, computed } from "vue";

const theme = useTheme();
const currentTheme = computed(() =>
  theme.global.current.value?.dark ? "dark" : "light",
);

watch(
  () => theme.global.current.value.dark,
  () => {
    updateOptions();
  },
);

const updateOptions = () => {
  options.value = {
    ...options.value,
    theme: { mode: currentTheme.value },
  };
};

const loading = ref(true);

type DataPoint = {
  x: string;
  y: number;
};

type SeriesItem = {
  name: string;
  data: DataPoint[];
};

const series = ref<SeriesItem[]>([
  {
    name: "Jan",
    data: generateData(30, {
      min: -30,
      max: 55,
    }),
  },
  {
    name: "Feb",
    data: generateData(30, {
      min: -30,
      max: 55,
    }),
  },
  {
    name: "Mar",
    data: generateData(30, {
      min: -30,
      max: 55,
    }),
  },
  {
    name: "Apr",
    data: generateData(30, {
      min: -30,
      max: 55,
    }),
  },
  {
    name: "May",
    data: generateData(30, {
      min: -30,
      max: 55,
    }),
  },
  {
    name: "Jun",
    data: generateData(30, {
      min: -30,
      max: 55,
    }),
  },
]);
// const chart = ref({
//   height: 350,
//   type: "heatmap",
// });

const options = ref({
  theme: {
    mode: currentTheme.value,
    palette: "palette8",
  },
  heatmap: {
    shadeIntensity: 0.5,
    radius: 0,
    useFillColorAsStroke: true,
    // colorScale: {
    //   ranges: [
    //     {
    //       from: -30,
    //       to: 5,
    //       name: "low",
    //       color: "#00A100",
    //     },
    //     {
    //       from: 6,
    //       to: 20,
    //       name: "medium",
    //       color: "#00A100",
    //     },
    //     {
    //       from: 21,
    //       to: 45,
    //       name: "high",
    //       color: "#00A100",
    //     },
    //     {
    //       from: 46,
    //       to: 55,
    //       name: "extreme",
    //       color: "#00A100",
    //     },
    //   ],
    // },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    width: 2,
  },
  // title: {
  //   text: "HeatMap Chart with Color Range",
  // },
});

onBeforeMount(() => {
  setTimeout(() => (loading.value = false), 500);
});

// const fetchData = async () => {
//   try {
//     const response = await axios.get("http://localhost:8045/requests");
//     const data = response.data;

//     series.value = Object.entries(data).map(([group, requests]) => ({
//       name: group,
//       data: Object.entries(requests as Record<string, number>).map(
//         ([timestamp, count]) => [Number(timestamp) * 1000, count],
//       ),
//     }));
//   } catch (error) {
//     console.log(error);
//   }
// };

// onMounted(fetchData);
</script>
