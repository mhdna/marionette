<template>
  <!-- credits: https://123d.one/ -->
  <!-- reference image: https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/434145862_1525236504709079_7382111903985771779_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2QFPiGhbhLvHhPWzHXgUrvECr80KDdr3V96lj5mLEnvISC_8F3S0idGQs-ss1E2yD-T8zDWsNXzM-BbUOIlnZuLY&_nc_ohc=0Q0S0gC_XgwQ7kNvwEUXANr&_nc_gid=o-otsZGedbfjCWjiJLhybw&edm=AJqaXLUBAAAA&ccb=7-5&ig_cache_key=MzMyODU2NTkyNzg0NTc3NzAxMw%3D%3D.3-ccb7-5&oh=00_AYGcx1PiWDmOcTtmP0to9oQ7rVKfQ3Gy5yiqMEkF2AwH2w&oe=67F7480F&_nc_sid=7b930e -->
  <v-row>
    <v-card flat width="200">
      <v-card-item class="py-5 px-6">
        <div class="opacity-60 text-no-wrap">Revenue (May)</div>
        <div class="text-h4 my-1">$ 16,898</div>
        <div class="d-flex align-center ga-2 text-green">
          <v-avatar variant="tonal" size="24" icon="mdi-arrow-up">
            <v-icon size="16" />
          </v-avatar>
          +44%
        </div>
      </v-card-item>
      <v-sparkline
        class="mt-n4 pb-4"
        color="green"
        auto-draw
        :model-value="values1"
        :padding="0"
        :line-width="3"
        smooth
      />
    </v-card>
    <v-card flat width="200">
      <v-card-item class="py-5 px-6">
        <div class="opacity-60 text-no-wrap">Memory available</div>
        <div class="text-h4 my-1">738,1 MB</div>
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
        auto-draw
        :model-value="values3"
        :padding="0"
        :line-width="3"
        smooth
      />

      <v-table density="compact" class="mx-5 mb-2">
        <tbody>
          <tr>
            <td class="px-1 opacity-80">App</td>
            <td class="px-1 text-right">2,65 GB</td>
          </tr>
          <tr>
            <td class="px-1 opacity-80">System</td>
            <td class="px-1 text-right">1,80 GB</td>
          </tr>
          <tr>
            <td class="px-1 opacity-80">Cache</td>
            <td class="px-1 text-right">0,56 GB</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <v-card flat width="430">
      <v-card-item>
        <v-card-title>Vuetify Inc. (VTFY)</v-card-title>
        <template #append>
          <v-chip-group :model-value="'day'" color="primary">
            <v-chip size="small" class="mr-1" value="week" label>Week</v-chip>
            <v-chip size="small" class="mr-0" value="day" label>Day</v-chip>
          </v-chip-group>
        </template>
      </v-card-item>
      <div class="mt-3 mb-6 px-6 d-flex ga-3" style="font-size: 0.75rem">
        <div
          class="d-flex flex-column justify-space-between opacity-60 pb-1 ml-n1 my-gridlines"
        >
          <span>28</span>
          <span>26</span>
          <span>24</span>
          <span>22</span>
          <span>20</span>
        </div>
        <div class="flex-1-0" style="height: 200px">
          <v-sparkline
            style="
              margin-bottom: -70px;
              transform: translateY(48px);
              opacity: 0.6;
            "
            color="grey"
            auto-draw
            :model-value="values4_2"
            :line-width="2"
            height="70"
            smooth
          />
          <v-sparkline
            class="mb-n12 mt-12"
            color="blue"
            auto-draw
            :model-value="values4_1"
            :line-width="2"
            height="70"
            smooth
          />
          <v-sparkline
            color="#aaa"
            class="opacity-50"
            auto-draw
            :model-value="values4_3"
            :line-width="2"
            type="bar"
          />
          <v-divider class="mb-1" opacity=".3" thickness="2" />
          <div class="d-flex justify-space-between opacity-60">
            <span>10:00</span>
            <span>12:00</span>
            <span>14:00</span>
            <span>16:00</span>
            <span>18:00</span>
          </div>
        </div>
      </div>
      <v-divider class="mx-6" />
      <v-row class="py-5 px-6 mb-n1">
        <v-col>
          <div class="opacity-60 text-no-wrap">This month</div>
          <div class="text-h5 mb-1">$ 36,026.89</div>
          <div class="d-flex align-center ga-2 text-green">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-up">
              <v-icon size="16" />
            </v-avatar>
            + $ 1,670.72
          </div>
        </v-col>
        <v-col>
          <div class="opacity-60 text-no-wrap">Today</div>
          <div class="text-h5 mb-1">$ 1,260.16</div>
          <div class="d-flex align-center ga-2 text-red">
            <v-avatar variant="tonal" size="24" icon="mdi-arrow-down">
              <v-icon size="16" />
            </v-avatar>
            - $ 154.03
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-card flat width="200" class="py-5 px-6">
      <v-row dense align="center">
        <v-col>
          <div class="opacity-60 mb-n1 text-no-wrap">S&amp;P 500</div>
          <div class="text-h5">4,204</div>
        </v-col>
        <v-col>
          <v-sparkline
            color="blue"
            auto-draw
            :model-value="values2_1"
            :line-width="8"
            smooth
          />
        </v-col>
      </v-row>
      <v-row dense align="center">
        <v-col>
          <div class="opacity-60 mb-n1 text-no-wrap">Gold</div>
          <div class="text-h5">1,906</div>
        </v-col>
        <v-col>
          <v-sparkline
            color="red"
            auto-draw
            :model-value="values2_2"
            :line-width="8"
            smooth
          />
        </v-col>
      </v-row>
      <v-row dense align="center">
        <v-col>
          <div class="opacity-60 mb-n1 text-no-wrap">Crude Oil</div>
          <div class="text-h5">66.63</div>
        </v-col>
        <v-col>
          <v-sparkline
            color="green"
            auto-draw
            :model-value="values2_3"
            :line-width="8"
            smooth
          />
        </v-col>
      </v-row>
    </v-card>
  </v-row>

  <!-- <v-app style="background: #1a1a1c"> -->
  <!--   <v-container class="d-flex ga-6 justify-center mt-12"> -->
  <!--     <div class="d-flex flex-column ga-6"></div> -->
  <!--     <div class="d-flex flex-column ga-6"></div> -->
  <!--     <div></div> -->
  <!--   </v-container> -->
  <!-- </v-app> -->
</template>

<script setup>
function toNumbers(text) {
  return text.split("").map(Number);
}

const values1 = toNumbers("0012211233223433445455332357767789");
const values2_1 = toNumbers("67645454345");
const values2_2 = toNumbers("89766265543");
const values2_3 = toNumbers("01224537869");
const values3 = toNumbers("9872533242565642655446644453312210");
const values4_1 = toNumbers(
  "3455432234544320134787678987877877865656777667887998766",
);
const values4_2 = toNumbers(
  "8887776577765653210124234443111113221201122112212322311",
);
const values4_3 = toNumbers(
  "1323242465326787523534897865645397576549785357232124231243112131221242341242512322314",
);
</script>

<style scoped>
@import "https://fonts.bunny.net/css?family=sora:100,200,300,400,500,600,700,800,900";

.v-application {
  &,
  [class*="-subtitle-1"],
  [class*="-subtitle-2"],
  [class*="-body-1"],
  [class*="-body-2"],
  [class*="-button"],
  [class*="-caption"],
  [class*="-overline"],
  [class*="-h1"],
  [class*="-h2"],
  [class*="-h3"],
  [class*="-h4"],
  [class*="-h5"],
  [class*="-h6"] {
    font-family: "Sora", sans-serif;
  }
}

path {
  filter: drop-shadow(
    0px 3px 3px oklch(from currentColor l c h / calc(alpha / 1.5))
  );
}

.my-gridlines > span {
  position: relative;
  &:not(:last-child):after {
    content: "";
    display: block;
    position: absolute;
    top: 7px;
    left: 30px;
    width: 355px;
    border-bottom: 2px dashed rgba(var(--v-theme-on-surface), 0.1);
  }
}
</style>
