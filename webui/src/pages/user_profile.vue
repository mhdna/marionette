<template>
  <v-container fluid>
    <RoundedCard>
      <!-- <CardToolbar title="Most Visited Categories" /> -->
      <div class="px-8 py-4 pb-4 flex-md-grow-1">
        <div class="d-flex">
          <div class="me-8">
            <v-avatar size="150">
              <v-img src="/profile.jpg" />
            </v-avatar>
          </div>
          <div class="d-flex flex-column w-100">
            <div class="d-flex justify-space-between">
              <div class="d-flex align-center mt-2">
                <div class="text-h6 me-8">Mahdi Nayef</div>
                <div class="d-flex just">
                  <v-icon color="green" icon="mdi-circle" class="me-1" />
                  <div>Online</div>
                </div>
              </div>
              <div class="d-flex align-center">
                <div></div>
                <div class="d-flex flex-column">
                  <div class="d-flex mb-1">
                    <v-icon icon="mdi-pencil" class="me-1" />
                    <div>Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-grey">
              <div>Email: mahdi@gmail.com</div>
              <div>IP Address: 192.168.0.106</div>
            </div>
          </div>
        </div>
      </div>
      <v-divider thickness="2" class="mt-0 mb-8" />
      <ProfileChart />
      <!-- <BarChart /> -->
      <EHeatmap />
    </RoundedCard>
  </v-container>
</template>
