<template>
  <!-- <v-row> -->
  <!-- <v-col v-for="n in 4" cols="5" md="3"> -->
  <!--   <v-card> -->
  <!--     <template v-slot:title>Total Ads Blocked</template> -->

  <!--     <template v-slot:subtitle>28 </template> -->

  <!--     <template v-slot:text> -->
  <!--       Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, -->
  <!--       ratione debitis quis est labore voluptatibus! -->
  <!--     </template> -->
  <!--   </v-card> -->

  <!-- <div class="text-center text-caption">Using Slots Only</div> -->
  <!-- </v-col> -->
  <!-- </v-row> -->
  <!-- <v-container class="px-8 py-2 text-center"> -->
  <!--   <v-row v-for="stat in stats" class="my-4"> -->
  <!--     <div> -->
  <!--       {{ stat.title }} -->
  <!--     </div> -->
  <!--     <v-row justify="end"> -->
  <!--       <v-chip class="text-#819f54-darken-3 font-weight-bold">{{ -->
  <!--         stat.value -->
  <!--       }}</v-chip> -->
  <!--     </v-row> -->

  <v-container class="mx-auto py-0 my-0" height="250" :border="false">
    <v-card-subtitle class="text-subtitle-1">
      <v-icon icon="mdi-web" />
      Requests</v-card-subtitle
    >
    <v-divider />
    <v-list-item title="Total Requests" link>
      <template v-slot:append>
        <v-badge content="1600" inline></v-badge>
      </template>
    </v-list-item>
    <v-list-item title="Accepted Requests" link>
      <template v-slot:append>
        <v-badge color="#819f54" content="1600" inline></v-badge>
      </template>
    </v-list-item>
    <v-list-item title="Rejected Requests" link>
      <template v-slot:append>
        <v-badge color="#770000" content="1600" inline></v-badge>
      </template>
    </v-list-item>
    <v-card-subtitle class="text-subtitle-1">
      <v-icon icon="mdi-clock" /> Time</v-card-subtitle
    >
    <v-divider />
    <v-list-item title="Screen Time" link>
      <template v-slot:append>
        <v-badge color="#819f54" content="1600 hours" inline></v-badge>
      </template>
    </v-list-item>
    <v-list-item title="Internet Time" link>
      <template v-slot:append>
        <v-badge color="#770000" content="1600" inline></v-badge>
      </template>
    </v-list-item>
  </v-container>
  <!-- <v-progress-linear -->
  <!--   :location="null" -->
  <!--   bg-color="#92aed9" -->
  <!--   buffer-color="#6a3e0b" -->
  <!--   buffer-opacity="1" -->
  <!--   buffer-value="3" -->
  <!--   color="#12512a" -->
  <!--   height="12" -->
  <!--   max="9" -->
  <!--   min="0" -->
  <!--   rounded -->
  <!--   model-value="2" -->
  <!-- ></v-progress-linear> -->
  <!-- </v-row> -->
  <!-- </v-container> -->
</template>

<script setup>
const review = "30%";

const stats = [
  { title: "Average screen time", value: "2 hours" },
  { title: "Average Internet time", value: "1 hour" },
  { title: "Average Requests accepted", value: "14000" },
  { title: "Average Requests rejected", value: "200" },
];
</script>
