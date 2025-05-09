<!-- <template> -->
<!--   <div -->
<!--     class="d-flex justify-center align-center font-weight-bold" -->
<!--     style="font-size: 15px" -->
<!--   > -->
<!--     <div -->
<!--       class="d-flex align-center" -->
<!--       style="border-bottom: 2px solid green; border-radius: 1px" -->
<!--     > -->
<!--       <div class="me-2 d-flex align-center"> -->
<!--         <v-icon icon="mdi-brain" size="small"> </v-icon>CPU -->
<!--       </div> -->
<!--       <div>12%</div> -->
<!--     </div> -->
<!--     <div class="mx-2"></div> -->
<!--     <div -->
<!--       class="d-flex align-center" -->
<!--       style="border-bottom: 2px solid green; border-radius: 1px" -->
<!--     > -->
<!--       <div class="me-2 d-flex align-center"> -->
<!--         <v-icon icon="mdi-memory" size="small"> </v-icon>MEM -->
<!--       </div> -->
<!--       12% -->
<!--     </div> -->
<!--   </div> -->
<!-- </template> -->

<template>
  <div class="mt-1 mx-2" style="font-size: 15px; font-family: monospace">
    <div class="d-flex justify-center align-center pt-1">
      <div style="color: #00ff00" class="d-flex align-center pe-2">
        <!-- <v-icon icon="mdi-brain" size="small" class="me-1"> </v-icon> -->
        <div class="mx-1">CPU</div>
        21%
      </div>
      <v-sparkline
        auto-draw
        :model-value="values1"
        :padding="3"
        :line-width="3"
        color="#00ff00"
        height="25"
      />
    </div>

    <div class="d-flex justify-center align-center pb-1">
      <div style="color: #ff0" class="d-flex align-center pe-2">
        <!-- <v-icon icon="mdi-brain" size="small" class="me-1"> </v-icon> -->
        <div class="mx-1">MEM</div>
        14%
      </div>
      <v-sparkline
        auto-draw
        :model-value="values2"
        :padding="3"
        :line-width="3"
        color="#ffff00"
        height="25"
      />
    </div>
    <!-- <div class="d-flex justify-center align-center pb-1"> -->
    <!--   <div style="color: #f00" class="d-flex align-center pe-2"> -->
    <!--     <div class="mx-1">BDW</div> -->
    <!--     338 -->
    <!--   </div> -->
    <!--   <v-sparkline -->
    <!--     auto-draw -->
    <!--     :model-value="values2" -->
    <!--     :padding="3" -->
    <!--     :line-width="3" -->
    <!--     color="#f00" -->
    <!--     height="25" -->
    <!--   /> -->
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Initial values
function toNumbers(text) {
  return text.split("").map(Number);
}

// Create reactive references for both value sets
const values1 = ref(toNumbers("0012211233223433445455332357767789"));
const values2 = ref(toNumbers("8212211233273443552855333757766624"));

// Generic function to update values with different patterns
const createValueUpdater = (pattern) => {
  return (currentValues) => {
    const newValues = [...currentValues];
    newValues.shift();

    const lastValue = newValues[newValues.length - 1];
    let newValue;

    switch (pattern) {
      case "gradual":
        // Original pattern: gradual changes of +/-2
        const change = Math.floor(Math.random() * 5) - 2;
        newValue = Math.max(0, Math.min(9, lastValue + change));
        break;

      case "wave":
        // Follows a sine wave pattern with some randomness
        const time = Date.now() / 1000;
        newValue = Math.floor(4.5 + 4 * Math.sin(time) + Math.random() - 0.5);
        newValue = Math.max(0, Math.min(9, newValue));
        break;

      case "zigzag":
        // Alternates between trending up and down
        const direction = Math.random() > 0.5 ? 1 : -1;
        newValue = Math.max(0, Math.min(9, lastValue + direction));
        break;

      default:
        newValue = Math.floor(Math.random() * 10);
    }

    newValues.push(newValue);
    return newValues;
  };
};

// Create specific updaters
const updateValues1 = createValueUpdater("gradual");
const updateValues2 = createValueUpdater("wave");

// Set up the intervals
let intervalId1 = null;
let intervalId2 = null;

onMounted(() => {
  // Update values every 1 second
  intervalId1 = setInterval(() => {
    values1.value = updateValues1(values1.value);
  }, 2000);

  // Update values2 every 800ms (slightly different timing)
  intervalId2 = setInterval(() => {
    values2.value = updateValues2(values2.value);
  }, 2000);
});

// Clean up the intervals when component is unmounted
onBeforeUnmount(() => {
  if (intervalId1 !== null) clearInterval(intervalId1);
  if (intervalId2 !== null) clearInterval(intervalId2);
});
</script>

<!-- <style> -->
<!-- @import "https://fonts.bunny.net/css?family=sora:100,200,300,400,500,600,700,800,900"; -->

<!-- .v-application { -->
<!--   &, -->
<!--   [class*="-h3"] { -->
<!--     font-family: "Sora", sans-serif; -->
<!--   } -->
<!-- } -->
<!-- </style> -->
