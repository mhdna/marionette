<template>
  <div id="chart">
    <apexchart
      :options="options"
      :series="series"
      type="heatmap"
      height="450"
    />
  </div>
</template>

<script lang="ts">
function generateData(count, { min, max }) {
  let data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      x: `Day ${i + 1}`,
      y: Math.floor(Math.random() * (max - min + 1)) + min,
    });
  }
  return data;
}

export default {
  data() {
    return {
      series: [
        {
          name: "Metric1",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric2",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric3",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric4",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric5",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric6",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric7",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric8",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric9",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
      options: {
        theme: {
          mode: "dark",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#008FFB"],
      },
    };
  },
};
</script>
