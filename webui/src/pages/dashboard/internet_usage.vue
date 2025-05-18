<template>
  <v-container fluid max-width="1400">
    <RoundedCard class="me-0 me-2 mb-2">
      <div>
        <CardToolbar title="Requests Rate" />
        <div class="px-4">
          <ELineChart2 />
          <LoadingTable />
        </div>
      </div>
    </RoundedCard>
  </v-container>
</template>
