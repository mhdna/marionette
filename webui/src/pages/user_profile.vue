<template>
  <v-container max-width="1400px">
    <!-- <CardToolbar title="Most Visited Categories" /> -->
    <RoundedCard>
      <div
        class="d-flex justify-center align-center text-h6 pt-1 pb-2 bg-surface-light"
        style="height: 35px"
      >
        User Profile Summary
      </div>
      <div class="px-4 pt-4">
        <div class="px-8 pt-2 pb-4 flex-md-grow-1">
          <div class="d-flex">
            <div class="me-8">
              <v-avatar size="150">
                <v-img src="/profile.jpg" />
              </v-avatar>
            </div>
            <div class="d-flex flex-column w-100">
              <div class="d-flex justify-space-between">
                <div class="d-flex align-center w-100 h-100">
                  <div class="me-8 d-flex flex-column">
                    <div class="d-flex justify-space-between align-center">
                      <div class="text-h6 me-4">Mahdi Nayef (User)</div>
                      <div class="d-flex just">
                        <v-icon color="green" icon="mdi-circle" class="me-1" />
                        <div>Online</div>
                      </div>
                    </div>
                    <div class="text-grey">
                      <div>Email: mahdi@gmail.com</div>
                      <div>IP Address: 192.168.0.106</div>
                      <div>Group: parents</div>
                    </div>
                    <div class="text-grey">
                      <!-- <v-btn -->
                      <!--   icon="mdi-video" -->
                      <!--   variant="text" -->
                      <!--   @click="chatWithUser" -->
                      <!-- /> -->
                      <v-btn
                        icon="mdi-chat"
                        variant="text"
                        @click="chatWithUser"
                      />
                      <v-btn
                        icon="mdi-pencil"
                        variant="text"
                        @click="chatWithUser"
                      />
                      <v-btn
                        icon="mdi-cog"
                        variant="text"
                        @click="chatWithUser"
                      />
                    </div>
                  </div>
                </div>
                <!-- <div class="d-flex align-center me-4"> -->
                <!--   <div class="d-flex flex-column"> -->
                <!--     <div class="d-flex mb-1"> -->
                <!--       <v-icon icon="mdi-pencil" class="me-2" /> -->
                <!--       <div>Edit</div> -->
                <!--     </div> -->
                <!--     <div class="d-flex mb-1"> -->
                <!--       <v-icon icon="mdi-cog" class="me-2" /> -->
                <!--       <div>Options</div> -->
                <!--     </div> -->
                <!--   </div> -->
                <!-- </div> -->
                <div>
                  <MonitorFrame
                    imgSrc="http://localhost:8045/images/25-01-23_14_07_13.png"
                  />
                </div>
                <!-- <div class="w-100 h-100"> -->
                <!--   <v-img -->
                <!--     cover -->
                <!--     class="me-4" -->
                <!--     height="200px" -->
                <!--     width="350px" -->
                <!--     rounded -->
                <!--     src="http://localhost:8045/images/25-01-23_14_07_13.png" -->
                <!--   /> -->
                <!-- </div> -->

                <!-- <div -->
                <!--   class="d-flex justify-center align-center pt-4" -->
                <!--   style="width: 400px" -->
                <!-- > -->
                <!--   <div -->
                <!--     class="d-flex flex-column justify-left align-center me-4" -->
                <!--     style="width: 300px" -->
                <!--   > -->
                <!--     <v-switch -->
                <!--       v-model="notificationsEnabled" -->
                <!--       color="purple" -->
                <!--       label="Enable notifications" -->
                <!--       density="compact" -->
                <!--       hide-details -->
                <!--     ></v-switch> -->
                <!--     <v-switch -->
                <!--       v-model="monitoringEnabled" -->
                <!--       color="purple" -->
                <!--       label="Enable Monitoring" -->
                <!--       density="compact" -->
                <!--       hide-details -->
                <!--     ></v-switch> -->
                <!--   </div> -->
                <!--   <div class="d-flex flex-column justify-left align-center"> -->
                <!--     <v-switch -->
                <!--       v-model="requestsEnabled" -->
                <!--       color="purple" -->
                <!--       label="Enable Requests" -->
                <!--       density="compact" -->
                <!--       hide-details -->
                <!--     ></v-switch> -->
                <!--     <v-switch -->
                <!--       v-model="requestsEnabled" -->
                <!--       color="purple" -->
                <!--       label="Enable Requests" -->
                <!--       density="compact" -->
                <!--       hide-details -->
                <!--     ></v-switch> -->
                <!--   </div> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
        <v-divider thickness="3" class="mt-0 mb-2" />
        <div class="me-0 mb-2 mt-4 d-flex flex-column">
          <div class="pb-4 mx-6 font-weight-bold text-medium-emphasis">
            Past Week Activity
          </div>
          <BarChart />
        </div>
        <div class="me-0 mb-2 mt-8 d-flex flex-column">
          <div class="pb-2 mx-6 font-weight-bold text-medium-emphasis">
            Activity Profiler
          </div>
          <ProfileChart />
        </div>
        <!-- <EHeatmap /> -->
        <div class="d-flex mt-8">
          <div class="d-flex flex-column w-100">
            <div class="pb-2 mx-6 font-weight-bold text-medium-emphasis">
              Most Visited Websites
            </div>
            <MostVisitedWebsites class="w-100" />
          </div>
          <div class="d-flex flex-column w-50">
            <div class="pb-2 mx-2 font-weight-bold text-medium-emphasis">
              Most Used Apps
            </div>
            <div class="me-0 mb-4">
              <AppsList class="w-100" />
            </div>
            <div class="pb-2 mx-2 font-weight-bold text-medium-emphasis">
              Most Occuring Window Titles
            </div>
            <div class="me-0">
              <AppsList class="w-100" />
            </div>
          </div>
          <!-- <div class="d-flex flex-column w-50"> -->
          <!-- </div> -->
        </div>
      </div>
    </RoundedCard>
  </v-container>
</template>
