<template>
  <v-card> {{ $t("layout.title") }} </v-card>
  <v-sheet color="#2e2c2c" elevation="3" rounded="lg">
    <v-tabs
      v-model="tab"
      :items="tabs"
      align-tabs="center"
      color="white"
      height="60"
      slider-color="#f78166"
    >
      <template v-slot:tab="{ item }">
        <v-tab
          :prepend-icon="item.icon"
          :text="item.text"
          :value="item.value"
          class="text-none"
        ></v-tab>
      </template>

      <template v-slot:item="{ item }">
        <v-tabs-window-item :value="item.value" class="pa-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
          at placeat totam, magni doloremque veniam neque porro libero rerum
          unde voluptatem!
        </v-tabs-window-item>
      </template>
    </v-tabs>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    tab: "tab-1",
    tabs: [
      {
        icon: "mdi-book-open-page-variant",
        text: "Readme",
        value: "tab-1",
      },
      {
        icon: "mdi-handshake-outline",
        text: "Code of Conduct",
        value: "tab-2",
      },
      {
        icon: "mdi-license",
        text: "MIT License",
        value: "tab-3",
      },
      {
        icon: "mdi-shield-lock-outline",
        text: "Security",
        value: "tab-4",
      },
    ],
  }),
};
</script>
