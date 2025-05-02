<template>
  <v-row no-gutters class="mt-2">
    <v-col :md="12" cols="12 " :sm="12" class="pa-1">
      <v-card class="mx-4" rounded>
        <v-toolbar class="px-4" height="54">
          <h2 class="text-h6">{{ $t("cards.requests") }}</h2>
        </v-toolbar>
        <!-- <BarChart /> -->

        <!-- <DateTimeChart /> -->
        <!-- <EAreaChart /> -->
        <!-- <ELineChart /> -->
        <v-card-text>
          <ELineChart2 />
        </v-card-text>
        <!-- <BarChart /> -->
        <!-- <Heatmap /> -->
        <!-- <DateTimeChart /> -->
        <!-- <line-chart -->
        <!--   :data="[ -->
        <!--     { -->
        <!--       name: 'Workout', -->
        <!--       data: { -->
        <!--         '2025-01-01 00:00:00 -0800': 3, -->
        <!--         '2025-01-02 00:00:00 -0800': 4, -->
        <!--       }, -->
        <!--     }, -->
        <!--     { -->
        <!--       name: 'Call parents', -->
        <!--       data: { -->
        <!--         '2025-01-01 00:00:00 -0800': 5, -->
        <!--         '2025-01-02 00:00:00 -0800': 3, -->
        <!--       }, -->
        <!--     }, -->
        <!--   ]" -->
        <!-- /> -->
      </v-card>

      <!-- <v-card rounded class="d-flex justify-space-between" height="690"> -->
    </v-col>
  </v-row>
  <LoadingTable />

  <v-row>
    <v-col :md="5">
      <v-card rounded class="mx-4" max-height="300">
        <v-toolbar class="px-4" height="54">
          <h2 class="text-h6">Categories</h2>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
          <v-row>
            <EPieChart />
          </v-row>
          <v-row>
            <EPieChart />
          </v-row>
        </v-card-text>
        <!-- <PolarArea /> -->
        <!-- <PieChart /> -->
        <!-- <PieChart /> -->
        <!-- <CategoriesBar /> -->
      </v-card>
    </v-col>
  </v-row>
</template>
