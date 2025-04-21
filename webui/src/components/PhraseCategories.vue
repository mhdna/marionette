<!-- Bans // Unified hosts = (adware + malware) // social // porn // gambling // -->

<template>
  <v-row>
    <v-col :sm="12" :md="4">
      <v-card>
        <template v-slot:title>
          <span class="font-weight-black">Predefined URL lists</span>
        </template>
        <CategoriesCard
          title="Predefined URLs"
          :categories="bannedUrlCategories"
        />
      </v-card>
      <v-card>
        <template v-slot:title>
          <span class="font-weight-black">User-defined Categories</span>
        </template>
        <CategoriesCard
          title="User-defined URLs"
          :categories="bannedUrlCategories"
        />
      </v-card>
    </v-col>
    <v-col :sm="12" :md="4">
      <v-card>
        <template v-slot:title>
          <span class="font-weight-black">Predefined Phrase lists</span>
        </template>
        <CategoriesCard
          title="Predefined Phrases List"
          :categories="bannedPhrasesCategories"
        />
      </v-card>
    </v-col>
    <!-- <v-navigation-drawer -->
    <!--   absolute -->
    <!--   class="position-fixed" -->
    <!--   width="100" -->
    <!--   color="purple-darken-4" -->
    <!--   permanent -->
    <!-- > -->
    <!--   <v-list> -->
    <!--     <!-- <v-list-item title="Navigation drawer"></v-list-item> -->
    <!--     <v-list-item prepend-icon="mdi-account-group-outline"> </v-list-item> -->
    <!--   </v-list> -->
    <!--   <v-list> -->
    <!--     <v-list-item title="group1" value="group1"></v-list-item> -->
    <!--     <v-list-item title="group2" value="group2"></v-list-item> -->
    <!--   </v-list> -->
    <!-- </v-navigation-drawer> -->
    <!-- <TextArea /> -->
  </v-row>
</template>

<script lang="ts" setup>
const bannedUrlCategories = [
  "Adware + malware",
  "Social",
  "Pornogoraphy",
  "Gambling",
];
const bannedPhrasesCategories = [
  "weapons",
  "warezhacking",
  "violence",
  "proxies",
  "pornography",
  "personals",
  "nudism",
  "intolerance",
  "illegaldrugs",
  "gore",
  "goodphrases",
  "games",
  "gambling",
  "drugadvocacy",
  "chat",
  "badwords",
];
</script>

<!-- <route lang="yaml"> -->
<!--   meta: -->
<!--   layout: proxy -->
<!-- </route> -->
