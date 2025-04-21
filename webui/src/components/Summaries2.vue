<template>
  <v-row no-gutters>
    <v-col :md="3" cols="12 " :sm="12" class="pa-1">
      <!-- <v-card title="Weekly Activity"> -->
      <!--   <v-card-text> -->
      <!--     <v-row> -->
      <!--       <h2 class="text-h4 my-1 mx-1">75%</h2> -->
      <!--     </v-row> -->
      <!--     <v-row> -->
      <!--       <h2 class="text-h6 my-1 mx-1 text-green"> -->
      <!--         <v-icon icon="mdi-menu-up" /> -->
      <!--         9% -->
      <!--       </h2> -->
      <!--     </v-row> -->
      <!--   </v-card-text> -->
      <!-- </v-card> -->
      <v-card flat>
        <v-card-item class="py-5 px-6">
          <div class="opacity-60 text-no-wrap">Weekly Activity</div>
          <div class="text-h4 my-1">76%</div>
          <div class="d-flex align-center ga-2 text-green">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-up">
              <v-icon size="16" />
            </v-avatar>
            +9%
          </div>
        </v-card-item>
        <v-sparkline
          fill
          class="mt-n4 pb-4"
          color="green"
          auto-draw
          height="30"
          :model-value="values1"
          :padding="0"
          :line-width="3"
          smooth
        />
      </v-card>
      <!-- <v-card title="Weekly Activity"> -->
      <!--   <v-card-text> -->
      <!--     <v-row> -->
      <!--       <h2 class="text-h4 my-1 mx-1">75%</h2> -->
      <!--     </v-row> -->
      <!--     <v-row> -->
      <!--       <h2 class="text-h6 my-1 mx-1 text-green"> -->
      <!--         <v-icon icon="mdi-menu-up" /> -->
      <!--         9% -->
      <!--       </h2> -->
      <!--     </v-row> -->
      <!--   </v-card-text> -->
      <!-- </v-card> -->
    </v-col>
    <v-col :md="3" cols="12 " :sm="12" class="pa-1">
      <v-card flat>
        <v-card-item class="py-5 px-6">
          <div class="opacity-60 text-no-wrap">Today's Activity</div>
          <div class="text-h4 my-1">23%</div>
          <div class="d-flex align-center ga-2 text-red">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-down">
              <v-icon size="16" />
            </v-avatar>
            -13%
          </div>
        </v-card-item>
        <v-sparkline
          class="mt-n3 pb-3"
          color="red"
          fill
          auto-draw
          height="30"
          :model-value="values3"
          :padding="0"
          :line-width="3"
          smooth
        />
      </v-card>
    </v-col>
    <v-col :md="3" cols="12 " :sm="12" class="pa-1">
      <v-card flat>
        <v-card-item class="py-5 px-6">
          <div class="opacity-60 text-no-wrap">Worked This Week</div>
          <div class="text-h4 my-1">131:142:11</div>
          <div class="d-flex align-center ga-2 text-green">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-up">
              <v-icon size="16" />
            </v-avatar>
            +1:40:02
          </div>
        </v-card-item>
        <v-sparkline
          fill
          class="mt-n3 pb-3"
          color="green"
          height="30"
          auto-draw
          :model-value="values2"
          :padding="0"
          :line-width="3"
          smooth
        />
      </v-card>
    </v-col>
    <v-col :md="3" cols="12 " :sm="12" class="pa-1">
      <v-card flat>
        <v-card-item class="py-5 px-6">
          <div class="opacity-60 text-no-wrap">Projects Worked</div>
          <div class="text-h4 my-1">2</div>
          <div class="d-flex align-center ga-2 text-cyan">
            <v-avatar variant="tonal" size="24" icon="mdi-minus">
              <v-icon size="16" />
            </v-avatar>
          </div>
        </v-card-item>
        <v-sparkline
          class="mt-n3 pb-3"
          color="cyan"
          fill
          height="30"
          auto-draw
          :model-value="values2"
          :padding="0"
          :line-width="3"
          smooth
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
function toNumbers(text) {
  return text.split("").map(Number);
}

const values1 = toNumbers("0012211233223433445455332357767789");
const values2 = toNumbers("0019211236223433445485332359767729");
const values3 = toNumbers("9872533242565642655446644453312210");
</script>
