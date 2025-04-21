<template>
  <v-card border rounded>
    <template v-slot:text>
      <v-row>
        <v-text-field
          v-model="search"
          label="Search URLs"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        >
        </v-text-field>
        <v-btn
          class="me-2"
          prepend-icon="mdi-plus"
          rounded="lg"
          text="Add a URL"
          border
          @click="add"
        ></v-btn>
      </v-row>
    </template>

    <!-- <v-row> -->
    <!--   <v-col v-for="n in 3" :key="n" :lg="4" :sm="12" :md="12"> -->
    <v-card flat>
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-video-input-component"></v-icon> &nbsp; 🏴 Black List
      </v-card-title>

      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :hide-default-footer="urls.length < 11"
        :items="urls"
      >
        <template v-slot:item.url="{ value }">
          <v-chip
            :text="value"
            border="thin opacity-25"
            prepend-icon="mdi-link"
            label
          >
            <template v-slot:prepend>
              <v-icon color="medium-emphasis"></v-icon>
            </template>
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <div class="d-flex ga-2 justify-end">
            <v-icon
              color="medium-emphasis"
              icon="mdi-pencil"
              size="small"
              @click="edit(item.id)"
            ></v-icon>

            <v-icon
              color="medium-emphasis"
              icon="mdi-delete"
              size="small"
              @click="remove(item.id)"
            ></v-icon>
          </div>
        </template>

        <template v-slot:no-data>
          <v-btn
            prepend-icon="mdi-backup-restore"
            rounded="lg"
            text="Reset data"
            variant="text"
            border
            @click="reset"
          ></v-btn>
        </template>
      </v-data-table>
    </v-card>
    <!--   </v-col> -->
    <!-- </v-row> -->
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
  </v-card>
</template>
<script setup>
import { onMounted, ref, shallowRef } from "vue";
import { useDate } from "vuetify";

const adapter = useDate();

const DEFAULT_RECORD = {
  url: "",
  group: "",
};

const urls = ref([]);
const record = ref(DEFAULT_RECORD);
const dialog = shallowRef(false);
const isEditing = shallowRef(false);

const headers = [
  { title: "URL", key: "url", align: "start" },
  { title: "group", key: "group" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
];

onMounted(() => {
  reset();
});

function add() {
  isEditing.value = false;
  record.value = DEFAULT_RECORD;
  dialog.value = true;
}

function edit(id) {
  isEditing.value = true;

  const found = urls.value.find((book) => book.id === id);

  record.value = {
    id: found.id,
    url: found.url,
    group: found.group,
  };

  dialog.value = true;
}

function remove(id) {
  const index = urls.value.findIndex((book) => book.id === id);
  urls.value.splice(index, 1);
}

function save() {
  if (isEditing.value) {
    const index = urls.value.findIndex((book) => book.id === record.value.id);
    urls.value[index] = record.value;
  } else {
    record.value.id = urls.value.length + 1;
    urls.value.push(record.value);
  }

  dialog.value = false;
}

function reset() {
  dialog.value = false;
  record.value = DEFAULT_RECORD;
  urls.value = [
    {
      id: 1,
      url: "To Kill a Mockingbird",
      group: "Harper Lee",
    },
    {
      id: 2,
      url: "1984",
      group: "George Orwell",
    },
    {
      id: 3,
      url: "The Great Gatsby",
      group: "F. Scott Fitzgerald",
    },
    {
      id: 4,
      url: "Sapiens",
      group: "Yuval Noah Harari",
    },
    {
      id: 5,
      url: "Dune",
      group: "Frank Herbert",
    },

    {
      id: 6,
      url: "Dune",
      group: "Frank Herbert",
    },
    {
      id: 7,
      url: "Dune",
      group: "Frank Herbert",
    },
    {
      id: 8,
      url: "Dune",
      group: "Frank Herbert",
    },
    {
      id: 9,
      url: "Dune",
      group: "Frank Herbert",
    },
    {
      id: 10,
      url: "Dune",
      group: "Frank Herbert",
    },
    {
      id: 11,
      url: "Dune",
      group: "Frank Herbert",
    },
    {
      id: 12,
      url: "Dune",
      group: "Frank Herbert",
    },
    {
      id: 13,
      url: "Dune",
      group: "Frank Herbert",
    },
  ];
}
</script>
