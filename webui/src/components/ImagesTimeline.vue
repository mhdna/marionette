<!-- INFO: aspect-ration or something like that for image containerization -->
<template>
  <v-container fluid max-width="1300">
    <v-slide-group :show-arrows="false" v-model="model" class="my-4">
      <v-slide-group-item v-for="(image, index) in images" :key="index">
        <v-card rounded="lg" class="me-4 py-1" width="250" hover link>
          <div class="text-center font-weight-bold">
            <div>Firefox</div>
            <div></div>
          </div>
          <v-img
            :src="image.imgSrc"
            @click.stop="dialogBox(image)"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <div class="d-flex justify-space-between align-center mx-2 mt-1">
            <div>07:00 - 07:10</div>
            <div class="d-flex align-center justify-space-between">
              <div>
                <v-icon icon="mdi-image" />
                x6
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <v-progress-linear
              color="green-darken-3"
              model-value="60"
              class="mb-1"
            ></v-progress-linear>
            <div>60% of 9 minutes</div>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-container>

  <!-- TODO dialog here -->
  <ImageDialog :image="images" :dialog="dialog" :maxWidth="popupMaxWidth" />
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
    lgCols: {
      type: Number,
      default: 2,
    },
    mdCols: {
      type: Number,
      default: 4,
    },
    smCols: {
      type: Number,
      default: 12,
    },
    xsCols: {
      type: Number,
      default: 12,
    },
  },
  data() {
    return {
      model: null,
      popupMaxWidth: 1100,
      dialog: false,
      imgSrc: "",
      image_id: "",
      show: true,
    };
  },
  methods: {
    dialogBox(image) {
      this.dialog = true;
      this.image_id = image.id;
      this.imgSrc = image.imgSrc;
    },
  },
};
</script>
