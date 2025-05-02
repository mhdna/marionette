<script setup lang="ts">
import axios from "axios";
// import { useTheme } from "vuetify";

// theme = ref(useTheme());
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

const series = ref<{ name: string; data: [number, number][] }[]>([]);
const loading = ref(true);
const options = ref({
  theme: {
    mode: currentTheme.value,
    palette: "palette7",
  },
  chart: {
    animations: {
      enabled: false,
    },
    id: "area-datetime",
    type: "area",
    height: 200,
    zoom: {
      autoScaleYaxis: true,
    },
  },
  grid: {
    borderColor: "#444444",
    strokeDashArray: 7,
    // show: false,
  },
  stroke: {
    width: [4, 4, 4],
    // curve: "straight",
    dashArray: [3, 3, 3],
  },
  fill: {
    opacity: 0.8,
    type: "pattern",
    pattern: {
      style: ["verticalLines", "horizontalLines"],
      width: 5,
      height: 6,
    },
  },
  markers: {
    size: 5,
    hover: {
      size: 9,
    },
  },
  dataLabels: {
    enabled: false,
  },
  annotations: {
    xaxis: [
      {
        x: new Date("19 Mar 2025").getTime(),
        borderColor: "#999",
        yAxisIndex: 0,
        label: {
          show: true,
          text: "Today",
          style: {
            color: "#fff",
            background: "#775DD0",
          },
        },
      },
    ],
  },
  markers: {
    size: 0,
    style: "hollow",
  },
  xaxis: {
    type: "datetime",
    // min: new Date(new Date().setDate(new Date().getDay())).getTime(), // using this will put it to the current month and mess things up (e.g. you're in April and you have data only about May and before, you'll be zoomed into April)
    // .setMonth(new Date().getMonth() - 1),
    tickAmount: 6,
  },
  tooltip: {
    x: {
      format: "dd MMM HH:mm",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
});
// const selection = "one_month";

onBeforeMount(() => {
  setTimeout(() => (loading.value = false), 500);
});

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:8045/requests");
    const data = response.data;

    series.value = Object.entries(data).map(([group, requests]) => ({
      name: group,
      data: Object.entries(requests as Record<string, number>).map(
        ([timestamp, count]) => [Number(timestamp) * 1000, count],
      ),
    }));
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchData);
// updateData(timeline) {
//   this.selection = timeline;

//   switch (timeline) {
//     case "one_month":
//       this.$refs.chart.zoomX(
//         TODO: like this?
//         new Date().setMonth(new Date().Month() - 1),
//         new Date().Month(),
//       );
//       break;
//     case "six_months":
//       this.$refs.chart.zoomX(
//         new Date("27 Sep 2012").getTime(),
//         new Date("27 Feb 2013").getTime(),
//       );
//       break;
//     case "one_year":
//       this.$refs.chart.zoomX(
//         new Date("27 Feb 2012").getTime(),
//         new Date("27 Feb 2013").getTime(),
//       );
//       break;
//     case "ytd":
//       this.$refs.chart.zoomX(
//         new Date("01 Jan 2013").getTime(),
//         new Date("27 Feb 2013").getTime(),
//       );
//       break;
//     case "all":
//       this.$refs.chart.zoomX(
//         new Date("23 Jan 2012").getTime(),
//         new Date("27 Feb 2013").getTime(),
//       );
//       break;
//     default:
//   }
// },
</script>

<template>
  <!-- <LoaderBox :loading="loading"> -->
  <!-- :type="type"> -->
  <!-- <div id="chart"> -->
  <!-- <div class="toolbar">
      <button
        id="one_month"
        @click="updateData('one_month')"
        :class="{ active: selection === 'one_month' }"
      >
        1M
      </button>

      <button
        id="six_months"
        @click="updateData('six_months')"
        :class="{ active: selection === 'six_months' }"
      >
        6M
      </button>

      <button
        id="one_year"
        @click="updateData('one_year')"
        :class="{ active: selection === 'one_year' }"
      >
        1Y
      </button>

      <button
        id="ytd"
        @click="updateData('ytd')"
        :class="{ active: selection === 'ytd' }"
      >
        YTD
      </button>

      <button
        id="all"
        @click="updateData('all')"
        :class="{ active: selection === 'all' }"
      >
        ALL
      </button>
    </div> -->
  <!-- <line-chart :data="series" /> -->

  <div id="chart-timeline">
    <apexchart
      type="area"
      height="200"
      ref="chart"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
  <!-- </div> -->
  <!-- </LoaderBox> -->
</template>
