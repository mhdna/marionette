<template>
  <v-footer app class="text-small text-center d-flex flex-column">
    <!-- <div> -->
    <!--   <v-btn -->
    <!--     v-for="icon in icons" -->
    <!--     :key="icon" -->
    <!--     :icon="icon" -->
    <!--     class="mx-4" -->
    <!--     variant="text" -->
    <!--   ></v-btn> -->
    <!-- </div> -->

    <!-- <div class="pt-0"> -->
    <!--   {{ $t("layout.footer_description") }} -->
    <!-- </div> -->

    <!-- <v-divider></v-divider> -->

    <div>
      {{ new Date().getFullYear() }} — <strong>{{ $t("layout.title") }}</strong>
    </div>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
