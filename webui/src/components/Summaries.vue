<!-- TODO add dynamic numbers (See: https://www.7te.net/zp-ui/#/dynamicnumbers) -->
<template>
  <v-container max-width="1400" class="d-flex justify-space-between px-10">
    <v-card class="text-center mr-2" style="border-bottom: 6px solid #5c6bc0">
      <v-card-item class="d-flex">
        <div class="d-flex justify-space-between">
          <div class="text-no-wrap"># Successful Requests</div>
          <v-icon color="grey" class="me-3 cursor-grab" icon="mdi-drag" />
        </div>
        <div class="d-flex">
          <span class="text-h3 my-1">10,230</span>
          <span>req</span>
        </div>
      </v-card-item>
    </v-card>
    <v-card class="text-center mr-2" style="border-bottom: 6px solid #5c6bc0">
      <v-card-item>
        <div class="d-flex justify-space-between">
          <div class="text-no-wrap"># Of Requests Banned</div>
          <v-icon color="grey" class="me-3 cursor-grab" icon="mdi-drag" />
        </div>
        <div class="d-flex">
          <span class="text-h3 my-1">3,120</span>
          <span>req</span>
        </div>
      </v-card-item>
    </v-card>
    <v-card class="text-center mr-2" style="border-bottom: 6px solid #5c6bc0">
      <v-card-item>
        <div class="d-flex justify-space-between">
          <div class="text-no-wrap">Weekly Activity</div>
          <v-icon color="grey" class="me-3 cursor-grab" icon="mdi-drag" />
        </div>
        <div class="d-flex">
          <span class="text-h3 my-1">75</span>
          <span>%</span>
          <span class="d-flex align-center ga-2 text-green-darken-4">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-up">
              <v-icon size="16" />
            </v-avatar>
            +9%
          </span>
        </div>
      </v-card-item>
    </v-card>
    <v-card class="text-center mr-2" style="border-bottom: 6px solid #5c6bc0">
      <v-card-item>
        <div class="d-flex justify-space-between">
          <div class="text-no-wrap">Today's Activity</div>
          <v-icon color="grey" class="me-3 cursor-grab" icon="mdi-drag" />
        </div>
        <div class="d-flex">
          <span class="text-h3 my-1">23</span>
          <span>%</span>
          <span class="d-flex align-center ga-2 text-red-darken-4">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-down">
              <v-icon size="16" />
            </v-avatar>
            -13%
          </span>
        </div>
      </v-card-item>
    </v-card>
    <v-card class="text-center mr-2" style="border-bottom: 6px solid #5c6bc0">
      <v-card-item>
        <div class="d-flex justify-space-between">
          <div class="text-no-wrap">Projects</div>
          <v-icon color="grey" class="me-3 cursor-grab" icon="mdi-drag" />
        </div>
        <div class="d-flex">
          <span class="text-h3 my-1">2</span>
          <span class="d-flex align-center ga-2 text-red-darken-4">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-down">
              <v-icon size="16" />
            </v-avatar>
            -1
          </span>
        </div>
      </v-card-item>
    </v-card>
    <v-card class="text-center mr-2" style="border-bottom: 6px solid #5c6bc0">
      <v-card-item>
        <div class="d-flex justify-space-between">
          <div class="text-no-wrap">Productive Time</div>
          <v-icon color="grey" class="me-3 cursor-grab" icon="mdi-drag" />
        </div>
        <div class="d-flex">
          <span class="text-h3 my-1"> 131:142:11 </span>
          <span>hours</span>
          <span class="d-flex align-center ga-2 text-red-darken-4">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-down">
              <v-icon size="16" />
            </v-avatar>
            +1:40:02
          </span>
        </div>
      </v-card-item>
    </v-card>
  </v-container>
  <!-- <v-container class="d-flex justify-space-between"> -->
  <v-row class="mb-4 mt-1">
    <ActiveUsersListHorizontal />
  </v-row>
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
