<template>
  <div class="mx-4" style="height: 330px">
    <div style="font-size: 18px" class="text-lightgrey">
      Choose the mode in which Marionette will operate:
    </div>
    <div class="d-flex justify-center align-center">
      <v-card
        color="#003300"
        rounded="lg"
        border="md"
        link
        hover
        min-height="200"
        class="me-4 my-4 d-flex flex-column justify-center align-center flex-1-100 w-100"
      >
        <div class="text-h6">Local mode</div>
        <div>
          <v-icon icon="mdi-laptop" size="70" />
        </div>
        <div class="text-grey text-center" style="width: 60%">
          Setup on local computer without letting others use it.
        </div>
      </v-card>
      <v-card
        color="#003300"
        min-height="200"
        border="md"
        link
        hover
        rounded="lg"
        class="d-flex flex-column justify-center align-center flex-1-100 w-100"
      >
        <div class="text-h6">Server mode</div>
        <div>
          <v-icon icon="mdi-server" size="70" />
        </div>
        <div class="text-grey text-center" style="width: 60%">
          Setup on local computer without letting others use it.
        </div>
      </v-card>
    </div>
  </div>
</template>
