<!-- TODO you have to fix if request failed on entries and other api calls -->
<template>
  <div>
    <!-- <FilterBar class="position-fixed w-100" style="z-index: 1000" /> -->

    <!-- <UsersListDrawer -->
    <!--   :showDrawer="showUsersDrawer" -->
    <!--   @update:showDrawer="showUsersDrawer = $event" -->
    <!-- /> -->
    <!-- <v-tabs -->
    <!--   density="compact" -->
    <!--   v-model="tab" -->
    <!--   align-tabs="start" -->
    <!--   color="cyan-darken-4" -->
    <!-- > -->
    <!--   <v-tab -->
    <!--     v-for="tab in tabs" -->
    <!--     :key="tab.id" -->
    <!--     @click="activeTab = tab.id" -->
    <!--     class="ma-2" -->
    <!--   > -->
    <!--     {{ tab.label }} -->
    <!--   </v-tab> -->
    <!-- </v-tabs> -->
    <!-- :prepend-icon="tab.icon" -->
    <!-- <v-row no-gutters> -->
    <!--   <v-btn -->
    <!--     slim -->
    <!--     variant="tonal" -->
    <!--     v-for="tab in tabs" -->
    <!--     :key="tab.id" -->
    <!--     class="mx-2" -->
    <!--     @click="activeTab = tab.id" -->
    <!--     :color="activeTab === tab.id ? 'cyan' : 'default'" -->
    <!--   > -->
    <!-- :style="activeTab == tab.id ? 'color: black' : 'color: white'" -->
    <!--   {{ tab.label }} -->
    <!-- </v-btn> -->

    <!-- <FilterButtons /> -->
    <!-- <FilterButtons2 /> -->
    <!-- <AppTitleWithDot /> -->
    <!-- <v-divider thickness="2" /> -->
    <!-- <FilterButtons v-if="!smAndDown" /> -->
    <!-- </v-row> -->

    <!-- <v-window v-model="activeTab"> -->
    <!-- <v-window-item :transition="false" :value="1"> -->
    <!-- <SparkLines /> -->

    <!-- <FilterBar /> -->
    <v-container max-width="1400px">
      <div class="mb-2">
        <Summaries />
      </div>

      <!-- <div class="mb-2"> -->
      <!--   <ActiveUsersListHorizontal /> -->
      <!-- </div> -->
      <!-- <v-card class="mx-4 mb-4" rounded> -->
      <!--   <v-toolbar class="px-4" height="54"> -->
      <!--     <h2 class="text-h6">Screenshots Timeline</h2> -->
      <!--     <v-spacer /> -->
      <!--     <v-btn>Recent</v-btn> -->
      <!--     <v-btn>Latest Per User</v-btn> -->
      <!--   </v-toolbar> -->
      <!--   <v-card-text> -->
      <!--     <Carousel /> -->
      <!--   </v-card-text> -->
      <!-- </v-card> -->

      <!-- <v-window-item :transition="false" :value="2"> -->
      <!-- <v-lazy> -->
      <!-- <v-container class="pa-0"> -->
      <!-- <Bar2 /> -->
      <!-- <v-row> -->
      <!-- <v-col :md="4" :sm="12" class="pa-1"> -->
      <!--   <h2 class="text-h6 my-1 mx-1 text-center">Summary</h2> -->
      <!-- <SummaryCards /> -->

      <!-- </v-col> -->
      <!-- <v-col :md="2" :sm="12"> -->
      <!--   <ActiveUsersList :cardheight="300" /> -->
      <!-- </v-col> -->
      <!-- <v-col :md="8" :sm="12"> -->
      <!-- <v-card class="mx-100" :title="$t('cards.screenshots')"> -->
      <!-- <screenshots />  -->
      <!-- </v-card> -->
      <!-- </v-col> -->
      <!-- <LinesChart /> -->
      <!-- <v-col :lg="8" :sm="12"> -->
      <!-- <AppsList :height="520" /> -->
      <!-- </v-col> -->
      <!-- <v-col cols="12" :lg="4" :sm="12"> -->
      <!-- <v-card max-width="400" title="Used categories"> -->
      <!--   <PolarArea /> -->
      <!-- </v-card> -->
      <!-- </v-col> -->
      <!-- </v-row> -->

      <!-- <v-row> -->
      <!-- <VueCarousel /> -->
      <!-- </v-row> -->

      <!-- </v-card> -->
      <!-- <v-card :title="$t('cards.heatmap')" :subtitle="$t('cards.heatmap_subtitle')"> -->
      <!-- <HeatmapEchart /> -->
      <!-- </v-card> -->
      <!-- <GalleryDialog /> -->
      <!-- <v-card class="mx-100" title="آخر الطلبات المرفوضة"> -->
      <!-- <HeatmapOld /> -->
      <!-- </v-card> -->
      <!-- <v-card -->
      <!--   class="mx-100" -->
      <!--   :title="$t('cards.requests_table')" -->
      <!--   :subtitle="$t('cards.requests_table_subtitle')" -->
      <!-- > -->
      <!-- </v-card> -->
      <!-- <Treemap /> -->
      <!-- <v-row> -->
      <!-- <v-col cols="12" :md="6" :sm="12"> -->
      <!--   <PolarArea /> -->
      <!-- </v-col> -->
      <!-- </v-row> -->
      <!-- </v-container> -->
      <!-- </v-lazy> -->
      <!-- </v-window-item> -->

      <!-- <v-window-item :transition="false" :value="3"> -->
      <!-- <v-lazy> -->
      <!-- <v-row> -->
      <!-- <GalleryView /> -->
      <!--   </v-row> -->
      <!-- </v-lazy> -->
      <!-- </v-window-item> -->
      <!-- </v-window> -->
      <div class="d-flex mb-2">
        <div class="d-flex flex-column flex-grow-1 me-2" style="min-width: 0">
          <div class="d-flex flex-column w-100 mb-2">
            <RoundedCard class="me-0">
              <div>
                <CardToolbar title="Time Spent on computers Past Week">
                  <!-- <DropdownGroupsMenu /> -->
                </CardToolbar>
                <BarChart />
              </div>
            </RoundedCard>
          </div>
          <RoundedCard class="me-2" height="730">
            <CardToolbar title="Most Visited Websites"> </CardToolbar>
            <MostVisitedWebsites />
          </RoundedCard>
        </div>
        <div>
          <div class="d-flex flex-column">
            <RoundedCard class="me-2 mb-2">
              <div>
                <CardToolbar title="Most Productive Users">
                  <!-- <DropdownGroupsMenu /> -->
                </CardToolbar>
                <UsersList />
              </div>
            </RoundedCard>
            <RoundedCard class="me-0">
              <div>
                <CardToolbar title="Most Active Users">
                  <!-- <DropdownGroupsMenu /> -->
                </CardToolbar>
                <UsersList />
              </div>
            </RoundedCard>
          </div>
          <!-- <div class="d-flex mt-4"> -->
          <!--   <RoundedCard class="me-2"> -->
          <!--     <div> -->
          <!--       <CardToolbar title="Most Active Users" /> -->
          <!--       <UsersList /> -->
          <!--     </div> -->
          <!--   </RoundedCard> -->
          <!--   <RoundedCard> -->
          <!--     <div> -->
          <!--       <CardToolbar title="Most Productive Users" /> -->
          <!--       <UsersList /> -->
          <!--     </div> -->
          <!--   </RoundedCard> -->
          <!-- </div> -->
          <!-- <div class="d-flex mb-4"> -->
          <!-- <RoundedCard> -->
          <!--   <CardToolbar title="Most Banned Categories" /> -->
          <!--   <div class="px-4 flex-md-grow-1"> -->
          <!--     <EPieChart /> -->
          <!--     <WebsitesList /> -->
          <!--   </div> -->
          <!-- </RoundedCard> -->
          <!-- </div> -->
          <div class="d-flex mt-2">
            <RoundedCard class="me-0 me-2">
              <div>
                <CardToolbar title="Most Used Apps" />
                <AppsList />
              </div>
            </RoundedCard>
            <RoundedCard>
              <div>
                <CardToolbar title="Most Occuring Window Titles" />
                <AppsList />
              </div>
            </RoundedCard>
            <!-- <RoundedCard> -->
            <!--   <div> -->
            <!--     <CardToolbar title="Apps Used Categories" /> -->
            <!--     <CategoriesList /> -->

            <!--   </div> -->
            <!-- </RoundedCard> -->
          </div>
        </div>
      </div>
      <!-- <RoundedCard class="me-0 me-2 mb-2"> -->
      <!--   <div> -->
      <!--     <CardToolbar title="Requests Rate" /> -->
      <!--     <div class="px-4"> -->
      <!--       <ELineChart2 /> -->
      <!--       <LoadingTable /> -->
      <!--     </div> -->
      <!--   </div> -->
      <!-- </RoundedCard> -->
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

// const showUsersDrawer = ref(true);

// function toggleUsersDrawer() {
//   showUsersDrawer.value = !showUsersDrawer.value;
// }

const { smAndDown } = useDisplay();
const tabs = [
  {
    id: 1,
    label: "Internet Usage",
    icon: "mdi-web",
  },
  {
    id: 2,
    label: "App Usage",
    icon: "mdi-clock",
  },
  {
    id: 3,
    label: "Screenshots",
    icon: "mdi-google",
  },
];

const activeTab = ref(1);
</script>
