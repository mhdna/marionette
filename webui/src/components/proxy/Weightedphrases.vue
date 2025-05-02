<template>
  <!-- TODO this isn't complete, you have to define the record in script and you should add to save button the save function -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card :title="`${isEditing ? 'Edit' : 'Add'} a Phrase`">
      <template v-slot:text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Phrase"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Group"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-select
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

        <v-btn text="Save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-row>
    <v-card>
      <v-card title="Weighted Phrases List"></v-card>
      <div class="text-center">
        <v-chip v-for="n in 40" class="ma-2" color="green">Phrase +20</v-chip>
        <v-chip v-for="n in 40" class="ma-2" color="red">Phrase -20</v-chip>
      </div>
    </v-card>
  </v-row>
</template>

<script lang="ts" setup>
import { shallowRef } from "vue";

const dialog = shallowRef(false);
const isEditing = shallowRef(false);
</script>
