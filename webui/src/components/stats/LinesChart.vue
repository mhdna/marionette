<template>
  <div id="chart">
    <apexchart
      type="area"
      height="250"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Mohamad",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 32, 88],
        },
        {
          name: "Sarah",
          data: [12, 21, 35, 49, 51, 62, 51, 81, 18, 188],
        },
        {
          name: "Ali",
          data: [21, 7, 25, 13, 22, 88, 90, 8, 150, 58],
        },
        {
          name: "Zahra",
          data: [11, 17, 15, 15, 21, 60, 32, 14, 38, 82, 88, 200],
        },
      ],
      chartOptions: {
        theme: {
          mode: "dark",
        },
        chart: {
          height: 350,
          type: "area",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        // title: {
        //   text: "Product Trends by Month",
        //   align: "left",
        // },
        grid: {
          // row: {
          //   colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          //   opacity: 0.5,
          // },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
      },
    };
  },
};
</script>
