<!-- TODO add dynamic numbers (See: https://www.7te.net/zp-ui/#/dynamicnumbers) -->
<template>
  <v-container
    class="d-flex overflow-x-scroll justify-start"
    max-width="94%"
    id="summaries-card"
  >
    <SummaryCard
      min-width="203"
      title="# Of Successful Requests"
      count="10,230"
      unit="req"
    />

    <SummaryCard
      min-width="180"
      title="# Of Requests Banned"
      count="3,120"
      unit="req"
    />

    <SummaryCard
      min-width="150"
      title="Weekly Activity"
      count="75"
      unit="%"
      change-rate="9"
      change-rate-unit="%"
    />
    <SummaryCard
      min-width="154"
      title="Today's Activity"
      count="23"
      unit="%"
      change-rate="-9"
      changeRateIsNegative="true"
      change-rate-unit="%"
    />
    <SummaryCard
      min-width="126"
      title="Projects"
      count="2"
      unit="%"
      change-rate="-10"
      changeRateIsNegative="true"
    />
    <SummaryCard
      min-width="425"
      title="Productive Time"
      count="131:142:43"
      unit="hours"
      change-rate="131:142:43"
    />
    <!-- -->
    <!-- -->
    <!-- req -->

    <!-- style="border-bottom: 6px solid #5c6bc0" -->
  </v-container>

  <!-- <v-container class="d-flex justify-space-between"> -->

  <div class="mt-4">
    <ActiveUsersListHorizontal />
  </div>

  <!-- </v-container> -->
</template>

<script setup>
function toNumbers(text) {
  return text.split("").map(Number);
}

const values1 = toNumbers("0012211233223433445455332357767789");
const values2 = toNumbers("0019211236223433445485332359767729");
const values3 = toNumbers("9872533242565642655446644453312210");
</script>
