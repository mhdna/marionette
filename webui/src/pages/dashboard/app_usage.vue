<template>
  <v-row>
    <v-col>
      <v-card class="mx-4 mt-4">
        <v-toolbar class="px-4" height="54">
          <h2 class="text-h6">Usage Time Per User</h2>
          <v-spacer />
        </v-toolbar>

        <UsersUsageTimeChart />
      </v-card>
    </v-col>
  </v-row>

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
  <v-card class="mx-4 mt-4">
    <v-toolbar class="px-4" height="54">
      <h2 class="text-h6">Usage Time Per User</h2>
      <v-spacer />
    </v-toolbar>

    <Heatmap />
  </v-card>
  <!-- <FilterBar /> -->
  <!-- <Loader /> -->
  <!-- <Bar /> -->
  <!-- </v-window-item> -->
  <v-row>
    <v-col :md="4">
      <v-card
        rounded
        class="mx-4 mb-4 d-flex flex-column justify-space-between"
        height="660"
      >
        <v-toolbar class="px-4" height="54">
          <h2 class="text-h6">Categories</h2>
          <v-spacer />
        </v-toolbar>

        <!-- <CategoriesBar /> -->
        <PolarArea />
        <PolarArea />
        <!-- <CategoriesBar /> -->
      </v-card>
    </v-col>
    <v-col :md="5">
      <v-card height="660">
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
</template>
