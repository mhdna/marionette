<template>
  <v-menu
    :close-on-content-click="false"
    v-model="menu"
    open-on-hover
    location="bottom"
  >
    <template v-slot:activator="{ props }">
      <div v-bind="props">
        <slot />
      </div>
    </template>
    <v-card min-width="300">
      <v-list>
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
            <v-btn icon="mdi-video" variant="text" @click="chatWithUser" />
            <v-btn icon="mdi-chat" variant="text" @click="chatWithUser" />
          </template>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact">
        <v-list-item>
          <v-switch
            v-model="notificationsEnabled"
            color="purple"
            label="Enable notifications"
            hide-details
          ></v-switch>
        </v-list-item>
        <v-list-item>
          <v-switch
            v-model="monitoringEnabled"
            color="purple"
            label="Enable Monitoring"
            hide-details
          ></v-switch>
        </v-list-item>
        <v-list-item>
          <v-switch
            v-model="requestsEnabled"
            color="purple"
            label="Enable Requests"
            hide-details
          ></v-switch>
        </v-list-item>
      </v-list>

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
          color="primary"
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
