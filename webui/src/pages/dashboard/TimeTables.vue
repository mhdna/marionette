<template>
  <FilterBar />
  <v-row class="mt-2 mx-2">
    <v-col :md="12">
      <!-- <v-card rounded class="d-flex justify-space-between" height="690"> -->
      <v-card rounded>
        <v-toolbar class="px-4" height="54">
          <h2 class="text-h6">Categories</h2>
          <v-spacer />
        </v-toolbar>
        <EPieChart />
        <!-- <PolarArea /> -->
        <!-- <PieChart /> -->
        <!-- <PieChart /> -->
        <!-- <CategoriesBar /> -->
      </v-card>
    </v-col>
    <v-col :md="4">
      <v-card height="690">
        <v-toolbar class="px-4" height="54">
          <h2 class="text-h6">Most Used Apps</h2>
          <v-spacer />
          <v-text-field
            v-model="search"
            class="mt-6"
            max-width="400"
            label="Search App"
            menu-icon=""
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            auto-select-first
            item-props
            border
          ></v-text-field>
        </v-toolbar>

        <!-- <CategoriesBar /> -->
        <AppsList />
        <!-- <CategoriesBar /> -->
      </v-card>
    </v-col>
    <v-col :md="4">
      <v-card height="690">
        <v-toolbar class="px-4" height="54">
          <h2 class="text-h6">Most Used Apps</h2>
          <v-spacer />
          <v-text-field
            v-model="search"
            class="mt-6"
            max-width="400"
            label="Search App"
            menu-icon=""
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            auto-select-first
            item-props
            border
          ></v-text-field>
        </v-toolbar>

        <!-- <CategoriesBar /> -->
        <AppsList />
        <!-- <CategoriesBar /> -->
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <EHeatmap />
  </v-row>

  <!-- <v-row class="mb-4"> -->
  <!--   <v-col> -->
  <!--     <v-card class="mx-5"> -->
  <!--       <v-toolbar class="px-4" height="54"> -->
  <!--         <h2 class="text-h6">Usage Time Per User</h2> -->
  <!--         <v-spacer /> -->
  <!--       </v-toolbar> -->
  <!-- <PolarArea /> -->

  <!-- <DateTimeChart /> -->
  <!-- <DateTimeChart /> -->
  <!-- <DateTimeChart /> -->
  <!-- <UsersUsageTimeChart /> -->
  <!-- <UsersUsageTimeChart /> -->
  <!-- <UsersUsageTimeChart /> -->
  <!-- <UsersUsageTimeChart /> -->
  <!--     </v-card> -->
  <!--   </v-col> -->
  <!-- </v-row> -->

  <!-- <v-row> -->
  <!--   <v-col> -->
  <!--     <v-card flat prepend-icon="mdi-web" title="Top Sites"> -->
  <!--       <PolarArea /> -->
  <!--     </v-card> -->
  <!--   </v-col> -->
  <!--   <v-col> -->
  <!--     <v-card flat prepend-icon="mdi-application-outline" title="Top Apps"> -->
  <!--       <PolarArea /> -->
  <!--     </v-card> -->
  <!--   </v-col> -->
  <!-- </v-row> -->
  <!-- <v-card> -->
  <!-- <PieChart /> -->
  <!-- </v-card> -->
  <!-- <v-card> -->
  <!-- <BarChart /> -->
  <!-- </v-card> -->
  <!-- <v-card class="mx-4 mt-4 mb-4"> -->
  <!--   <v-toolbar class="px-4" height="54"> -->
  <!--     <h2 class="text-h6">Usage Time Per User</h2> -->
  <!--     <v-spacer /> -->
  <!--   </v-toolbar> -->

  <!-- <Heatmap /> -->
  <!-- <Heatmap /> -->
  <!-- <Heatmap /> -->
  <!-- </v-card> -->
  <!-- <FilterBar /> -->
  <!-- <Loader /> -->
  <!-- <Bar /> -->
  <!-- </v-window-item> -->
</template>
