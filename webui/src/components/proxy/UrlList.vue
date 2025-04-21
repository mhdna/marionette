<template>
  <!-- <v-text-field :rules="rules"></v-text-field> -->
  <!-- <v-container> -->
  <!--   <v-row no-gutters> -->
  <!--     <v-col class="mx-2 my-2" v-for="n in 2" :key="n" cols="4" sm="1" lg="5"> -->
  <UrlTable />
  <!--     </v-col> -->
  <!--   </v-row> -->
  <!-- </v-container> -->
</template>

<script setup>
const rules = [
  (value) => !!value || "Required.",
  (value) => (value || "").length <= 20 || "Max 20 characters",
  (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
];
</script>
