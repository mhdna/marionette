<template>
  <div class="pa-4 text-center">
    <v-btn
      :disabled="dialog"
      prepend-icon="mdi-refresh"
      text="Start loading"
      @click="dialog = true"
      >Reload Proxy</v-btn
    >

    <v-dialog v-model="dialog" max-width="320" persistent>
      <v-list class="py-2" color="primary" elevation="12" rounded="lg">
        <v-list-item title="Reloading Proxy">
          <template v-slot:prepend>
            <div class="pe-4">
              <v-icon color="primary" size="x-large"></v-icon>
            </div>
          </template>

          <template v-slot:append>
            <v-progress-circular
              color="primary"
              indeterminate="disable-shrink"
              size="16"
              width="2"
            ></v-progress-circular>
          </template>
        </v-list-item>
      </v-list>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },

  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 1000);
    },
  },
};
</script>
