<template>
  <v-row no-gutters class="mt-2">
    <v-col :md="12" cols="12 " :sm="12" class="pa-1">
      <v-card class="mx-4" rounded>
        <v-toolbar class="px-4" height="54">
          <h2 class="text-h6">{{ $t("cards.requests") }}</h2>
        </v-toolbar>
        <DateTimeChart />
        <DateTimeChart />
      </v-card>
      <LoadingTable />
    </v-col>
  </v-row>
</template>
