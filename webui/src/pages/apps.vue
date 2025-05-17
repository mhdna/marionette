<template>
  <v-container fluid>
    <v-card rounded="lg" class="w-100 mb-4">
      <div
        class="d-flex align-center justify-space-between pt-2 px-4 pb-2 mb-1 font-weight-bold bg-surface-light"
      >
        Categorize Apps
        <v-spacer />
        <v-btn
          class="px-2"
          prepend-icon="mdi-plus"
          variant="text"
          text="Add App"
          border
        ></v-btn>
        <!-- @click="toggleCategoriesManagerDialog" -->
      </div>
      <div class="d-flex px-4 flex-column">
        <v-sheet>
          <v-slide-group show-arrows>
            <v-slide-group-item
              v-for="(category, index) in categories"
              :key="index"
              v-slot="{ isSelected, toggle }"
            >
              <v-btn
                :color="isSelected ? 'primary' : undefined"
                class="ma-2"
                rounded
                @click="toggle"
              >
                {{ category }}
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
      <div class="d-flex flex-wrap justify-center">
        <v-card
          rounded
          border
          class="flex-grow-1 ma-1 mx-2 me-0 px-6 py-2 d-flex justify-space-between align-center"
          hover
          link
          min-width="180"
          v-for="app in generateRandomApps()"
        >
          <div>
            <div class="text-h6">
              {{ app.name }}
            </div>
            <div class="text-grey text-body-2">
              <div v-if="app.stock">Productive</div>
              <div v-else>Unproductive</div>
            </div>
          </div>
          <v-img :src="`/apps/apps/${app.icon}`" max-width="36"></v-img>
        </v-card>
      </div>

      <!-- <v-card-actions> -->
      <!--   <v-btn text="Clear" variant="plain" @click="dialog = false"></v-btn> -->

      <!--   <v-spacer></v-spacer> -->

      <!--   <v-btn text="Add Phrase(s)" @click="save"></v-btn> -->
      <!-- </v-card-actions> -->
    </v-card>
    <v-card rounded="lg" class="w-100">
      <div
        class="d-flex align-center justify-space-between pt-2 px-4 pb-2 mb-1 font-weight-bold bg-surface-light"
      >
        Uncategorized
        <v-spacer />
        <!-- <v-btn -->
        <!--   class="px-2" -->
        <!--   prepend-icon="mdi-plus" -->
        <!--   variant="text" -->
        <!--   text="Add App" -->
        <!--   border -->
        <!-- ></v-btn> -->
        <!-- @click="toggleCategoriesManagerDialog" -->
      </div>
      <div class="d-flex flex-wrap justify-center">
        <v-card
          rounded
          border
          class="flex-grow-1 ma-1 mx-2 me-0 px-6 py-2 d-flex justify-space-between align-center"
          hover
          link
          min-width="180"
          v-for="app in generateRandomApps()"
        >
          <div>
            <div class="text-h6">
              {{ app.name }}
            </div>
            <!-- <div class="text-grey text-body-2"> -->
            <!--   <div v-if="app.stock">Productive</div> -->
            <!--   <div v-else>Unproductive</div> -->
            <!-- </div> -->
          </div>
          <!-- <v-img :src="`/apps/apps/${app.icon}`" max-width="36"></v-img> -->
        </v-card>
      </div>

      <!-- <v-card-actions> -->
      <!--   <v-btn text="Clear" variant="plain" @click="dialog = false"></v-btn> -->

      <!--   <v-spacer></v-spacer> -->

      <!--   <v-btn text="Add Phrase(s)" @click="save"></v-btn> -->
      <!-- </v-card-actions> -->
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
const categories = ref([
  "Internet",
  "Chat",
  "Programming",
  "Gaming",
  "Productivity",
  "Multimedia",
  "Graphics",
  "Education",
  "Office",
  "System",
  "Security",
  "Utilities",
  "Communication",
  "Social",
  "Finance",
  "Science",
  "Health",
  "News",
  "Shopping",
  "Travel",
  "Photography",
  "Books",
  "Lifestyle",
  "Entertainment",
  "Customization",
  "Kids",
]);

const apps = [
  {
    icon: "org.mozilla.Firefox.svg",
    name: "Firefox",
    group: 699.99,
    user: "Ali",
    stock: true,
  },
  {
    icon: "telegram-desktop-bin.svg",
    name: "Telegram",
    group: 799.99,
    user: "Mahdi",
    stock: false,
  },
  {
    icon: "com.google.Chrome.svg",
    name: "Chrome",
    group: 649.99,
    user: "Mahdi",
    stock: true,
  },
  {
    icon: "utilities-x-terminal.svg",
    name: "Terminal",
    group: 1499.99,
    user: "Ali",
    stock: true,
  },
  {
    icon: "vscode.svg",
    name: "VScode",
    group: 299.99,
    user: "Ali",
    stock: false,
  },
];

const generateRandomApps = () => {
  const randomApps = [];
  for (let i = 0; i < 40; i++) {
    randomApps.push(apps[Math.floor(Math.random() * apps.length)]);
  }
  return randomApps;
};

console.log(generateRandomApps());
</script>
