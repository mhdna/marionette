<template>
  <v-menu :close-on-content-click="false" v-model="menu" location="bottom">
    <template v-slot:activator="{ props }">
      <div v-bind="props">
        <slot />
      </div>
    </template>
    <v-card min-width="370">
      <v-list bg-color="surface-light">
        <v-list-item title="Mahdi Nayef">
          <!-- prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg" -->
          <template v-slot:subtitle>
            <div class="d-flex flex-column">
              <div>Group 2</div>
              <div>192.168.0.107</div>
            </div>
          </template>
          <template v-slot:prepend>
            <v-icon icon="mdi-circle" color="green" />
          </template>
          <template v-slot:append>
            <div class="d-flex align-center justify-center">
              <v-btn icon="mdi-video" variant="text" @click="chatWithUser" />
              <v-btn icon="mdi-chat" variant="text" @click="chatWithUser" />
              <v-btn
                icon="mdi-chart-bar"
                variant="text"
                @click="chatWithUser"
                to="/user_profile"
              />
              <!-- <v-btn class="pt-1 pb-4" variant="text">View<br />Profile</v-btn> -->
            </div>
          </template>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <div
        class="mx-6 d-flex flex-column align-center justify-center align-switches-center"
      >
        <v-switch
          v-model="notificationsEnabled"
          color="purple"
          label="Enable notifications"
          density="compact"
          hide-details
        ></v-switch>
        <v-switch
          v-model="monitoringEnabled"
          color="purple"
          label="Enable Monitoring"
          density="compact"
          hide-details
        ></v-switch>
        <v-switch
          v-model="requestsEnabled"
          color="purple"
          label="Enable Requests"
          density="compact"
          hide-details
        ></v-switch>
      </div>

      <v-card-actions>
        <v-btn variant="text" text="Close" @click="resetUserSettings" />
        <v-spacer />
        <v-btn
          variant="text"
          disabled
          text="Reset"
          @click="resetUserSettings"
        />
        <v-btn
          color="#ee0000"
          variant="text"
          text="Save"
          @click="saveUserSettings"
        />
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref(false);
const notificationsEnabled = ref(false);
const monitoringEnabled = ref(true);
const requestsEnabled = ref(true);

function resetUserSettings() {
  menu.value = false;
}

function saveUserSettings() {
  menu.value = false;
}

// const { color } = defineProps<{
//   user_id: string;
// }>();
</script>

<style>
.align-switches-center .v-switch {
  min-width: 190px;
}
</style>
