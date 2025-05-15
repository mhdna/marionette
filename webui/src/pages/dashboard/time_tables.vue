<template>
  <FilterBar />
  <v-container fluid>
    <!-- <div class="d-flex mb-4" style="max-height: 600px"> -->
    <!--   <RoundedCard class="me-0"> -->
    <!--     <div> -->
    <!--       <CardToolbar title="Time Spent on computers Past Week" /> -->
    <!--       <BarChart /> -->
    <!--     </div> -->
    <!--   </RoundedCard> -->
    <!-- </div> -->
    <div class="d-flex" style="max-height: 600px">
      <RoundedCard class="me-0">
        <div>
          <CardToolbar title="Time Spent on computers Past Week" />
          <div class="px-2">
            <EHeatmap />
            <EHeatmap />
            <EHeatmap />
          </div>
        </div>
        <v-pagination
          rounded
          density="compact"
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </RoundedCard>
    </div>
    <div class="d-flex mt-4">
      <RoundedCard class="me-2">
        <div>
          <CardToolbar title="Most Active Users" />
          <UsersList />
        </div>
      </RoundedCard>
      <RoundedCard>
        <div>
          <CardToolbar title="Most Productive Users" />
          <UsersList />
        </div>
      </RoundedCard>
    </div>
    <div class="d-flex mt-4">
      <RoundedCard class="me-0 me-2">
        <div>
          <CardToolbar title="Most Used Apps" />
          <AppsList />
        </div>
      </RoundedCard>
      <RoundedCard class="me-0 me-2">
        <div>
          <CardToolbar title="Most Occuring Window Titles" />
          <AppsList />
        </div>
      </RoundedCard>
      <RoundedCard class="me-0">
        <div>
          <CardToolbar title="Categorically" />
          <ETreeMap />
        </div>
      </RoundedCard>
    </div>
  </v-container>
</template>
