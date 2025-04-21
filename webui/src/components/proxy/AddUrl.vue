<template>
  <v-sheet border rounded>
    <template v-slot:top>
      <v-toolbar flat>
        <v-btn
          class="me-2"
          prepend-icon="mdi-plus"
          rounded="lg"
          text="Add a URL"
          border
          @click="add"
        ></v-btn>
      </v-toolbar>
    </template>

    <v-dialog v-model="dialog" max-width="500">
      <v-card :title="`${isEditing ? 'Edit' : 'Add'} a URL`">
        <template v-slot:text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="record.url" label="URL"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="record.group" label="Group"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                v-model="record.type"
                :items="['Black', 'Gray', 'White']"
                label="Type"
              ></v-select>
            </v-col>
          </v-row>
        </template>

        <v-divider></v-divider>

        <v-card-actions class="bg-surface-light">
          <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>

          <v-spacer></v-spacer>

          <v-btn text="Save" @click="save"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script setup>
function add() {
  isEditing.value = false;
  record.value = DEFAULT_RECORD;
  dialog.value = true;
}
</script>
