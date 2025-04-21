<!-- INFO: aspect-ration or something like that for image containerization -->
<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(image, index) in paginatedImages"
        :key="index"
        :md="mdCols"
        :sm="smCols"
        :cols="xsCols"
        :lg="lgCols"
      >
        <v-card>
          <v-img
            rounded="lg"
            :src="image.imgSrc"
            @click.stop="dialogBox(image)"
            class="grey lighten-2 cursor-pointer"
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
        </v-card>
      </v-col>
      <!-- TODO dialog here -->
      <ImageDialog :image="images" :dialog="dialog" :maxWidth="popupMaxWidth" />
    </v-row>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      :total-visible="5"
      rounded="circle"
      @input="changePage"
    ></v-pagination>
  </v-container>
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
      popupMaxWidth: 1100,
      dialog: false,
      imgSrc: "",
      image_id: "",
      show: true,
      currentPage: 1,
      pageSize: 50, // Number of images per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.images.length / this.pageSize);
    },
    paginatedImages() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.images.slice(start, start + this.pageSize);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    dialogBox(image) {
      this.dialog = true;
      this.image_id = image.id;
      this.imgSrc = image.imgSrc;
    },
  },
};
</script>
