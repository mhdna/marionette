<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="250"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";

dayjs.extend(quarterOfYear);

export default {
  data() {
    return {
      series: [
        {
          name: "Ali",
          data: [30, 44, 55, 60, 41, 67, 22, 43, 66, 44, 22],
        },
        {
          name: "Fatima",
          data: [13, 23, 20, 30, 60, 8, 13, 27, 80, 90, 88, 2],
        },
        {
          name: "Hasan",
          data: [11, 17, 15, 15, 21, 60, 32, 14, 38, 82, 88],
        },
        {
          name: "Hussein",
          data: [21, 7, 25, 13, 22, 88, 90, 8],
        },
      ],
      chartOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "last", // 'all', 'last'
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
        theme: {
          mode: "dark", // theme.value
        },
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        breakpoint: 480,
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT",
            "01/07/2011 GMT",
            "01/08/2011 GMT",
            "01/09/2011 GMT",
            "01/10/2011 GMT",
            "01/11/2011 GMT",
            "01/12/2011 GMT",
          ],
        },
        // legend: {
        //   position: "right",
        //   offsetY: 40,
        // },
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
        fill: {
          opacity: 1,
        },
      },
    };
  },
};
</script>
