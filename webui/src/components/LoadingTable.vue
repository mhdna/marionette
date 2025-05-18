<!-- TODO: Setup search, see server-side stuff -->
<!-- BUG: if table has not be fetched yet, length would be zero, and the page will break -->
<template>
  <!-- <RoundedCard class="me-0 me-2"> -->
  <div>
    <!-- <CardToolbar title="Requests Rate" /> -->
    <div class="px-2">
      <v-data-table-server
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        density="compact"
        :items="serverItems"
        :items-length="totalItems"
        :loading="loading"
        :search="search"
        @update:options="loadItems"
      >
        <template v-slot:item.entry_group="{ value }">
          <v-chip
            :color="getGroupColor(value)"
            :text="value"
            size="x-medium"
          ></v-chip>
        </template>

        <!-- <template v-slot:thead>
        <tr>
          <td>
            <v-text-field
              v-model="calories"
              class="ma-2"
              density="compact"
              placeholder="Minimum calories"
              type="number"
              hide-details
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              class="ma-2"
              density="compact"
              placeholder="Minimum calories"
              type="number"
              hide-details
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              class="ma-2"
              density="compact"
              placeholder="Minimum calories"
              type="number"
              hide-details
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              class="ma-2"
              density="compact"
              placeholder="Minimum calories"
              type="number"
              hide-details
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              class="ma-2"
              density="compact"
              placeholder="Minimum calories"
              type="number"
              hide-details
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              class="ma-2"
              density="compact"
              placeholder="Minimum calories"
              type="number"
              hide-details
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="url"
              class="ma-2"
              width="750"
              density="compact"
              placeholder="Search url..."
              hide-details
            ></v-text-field>
          </td>
        </tr>
      </template> -->
        <!-- <template v-slot:item="{ item }"> -->
        <!--   <tr class="text-no-wrap"> -->
        <!--     <td> -->
        <!--       <v-avatar size="32"> -->
        <!--         <v-img :src="item.user.image" /> -->
        <!--       </v-avatar> -->
        <!--     </td> -->
        <!--     <td>{{ item.time }}</td> -->
        <!--     <td>{{ item.ip }}</td> -->
        <!--     <td :class="`bg-${getColor(item.http_status)}`"> -->
        <!--       {{ item.http_status }} -->
        <!--     </td> -->
        <!--     <td :class="`bg-${getColor(item.http_status)}`"> -->
        <!--       {{ item.http_method }} -->
        <!--     </td> -->
        <!--     <td :class="`bg-${getGroupColor(item.entry_group)}`"> -->
        <!--       {{ item.entry_group }} -->
        <!--     </td> -->
        <!--     <td>{{ item.url }}</td> -->
        <!--   </tr> -->
        <!-- </template> -->

        <template v-slot:item.http_status="{ value }">
          <v-chip
            :color="getColor(value)"
            :text="value"
            size="x-medium"
          ></v-chip>
        </template>
        <template v-slot:item.url="{ value }">
          <div
            style="white-space: nowrap; max-width: 750px"
            class="overflow-x-auto"
          >
            {{ value }}
          </div>
        </template>
        <template v-slot:item.user="{ value }">
          <v-avatar size="32">
            <v-img :src="value.image" />
          </v-avatar>
        </template>
      </v-data-table-server>
    </div>
  </div>
  <!-- </RoundedCard> -->
</template>

<script setup lang="ts">
import axios from "axios";

import { useI18n } from "vue-i18n";
import { ref, computed, onMounted, watch } from "vue";
const { t } = useI18n();

const search = ref("");

const itemsPerPage = 15;
const headers = computed(() => [
  // {
  //   title: "User",
  //   key: "user",
  //   align: "start" as "start" | "end" | "center" | undefined, // FIXME this is super verbose
  // },
  {
    title: "Date",
    key: "date",
    align: "center" as "start" | "end" | "center" | undefined, // FIXME this is super verbose
  },
  {
    title: t("table.time"),
    key: "time",
    align: "center" as "start" | "end" | "center" | undefined, // FIXME this is super verbose
  },
  {
    title: t("table.ip"),
    key: "ip",
    align: "center" as "start" | "end" | "center" | undefined,
  },
  {
    title: t("table.status"),
    key: "http_status",
    align: "start" as "start" | "end" | "center" | undefined,
  },
  {
    title: t("table.method"),
    key: "http_method",
    align: "start" as "start" | "end" | "center" | undefined,
  },
  // TODO: only enable it if multiple groups are selected
  {
    title: t("table.group"),
    key: "entry_group",
    align: "start" as "start" | "end" | "center" | undefined,
  },
  {
    title: t("table.url"),
    key: "url",
    align: "start" as "start" | "end" | "center" | undefined,
  },
]);

function getColor(status: string): string {
  const n: number = +status;
  if (100 <= n && n <= 199) return "blue";
  else if (200 <= n && n <= 299) return "green";
  else if (300 <= n && n < 399) return "orange";
  else if (400 <= n && n < 599) return "red";
  return "white";
}

function getGroupColor(group: string): string {
  if (group === "group1") return "cyan";
  else if (group === "group2") return "lime";
  return "white";
}

const serverItems = ref([]);
const loading = ref(true);

// function onClick() {
//   loading.value = true;
//   setTimeout(() => {
//     loading.value = false;
//   }, 2000);
// }

const generateRandomUser = () => {
  const names = ["Mahdi", "Ali", "Mohamad"];
  const images = [
    "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    "https://cdn.vuetifyjs.com/images/lists/5.jpg",
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return {
    name: randomName,
    image: randomImage,
  };
};

const url = ref("");

const totalItems = ref(0);
const loadItems = async ({
  page,
  itemsPerPage,
}: {
  page: number;
  itemsPerPage: number;
}) => {
  loading.value = true;
  try {
    const res = await axios.get(`http://localhost:8045/entries`);
    const data = res.data;
    serverItems.value = data.items
      .slice((page - 1) * itemsPerPage, page * itemsPerPage)
      .map((item) => ({
        ...item,
        user: generateRandomUser(),
      }));
    totalItems.value = data.total;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  loading.value = false;
};

watch(url, () => {
  search.value = String(Date.now());
});

onMounted(() => loadItems({ page: 1, itemsPerPage }));
</script>
