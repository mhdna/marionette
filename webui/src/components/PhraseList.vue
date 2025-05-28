<template>
  <div class="d-flex flex-wrap justify-center align-center w-100">
    <div class="text-center my-1 mx-3 text-h6">{{ props.title }}</div>
    <div
      :style="{
        width: '100%',
        height: '55vh',
      }"
      class="d-flex overflow-y-auto justify-space-between"
    >
      <!-- backgroundColor: currentTheme === 'dark' ? '#28332F' : '#A4E5C9', -->
      <!-- borderRadius: '8px', -->

      <!-- <div -->
      <!--   style=" -->
      <!--     writing-mode: vertical-rl; -->
      <!--     transform: rotate(180deg); -->
      <!--     border-radius: 8px; -->
      <!--   " -->
      <!--   class="text-center my-4 mx-3 text-h6" -->
      <!-- > -->
      <!--   White Phrase List -->
      <!-- </div> -->
      <!-- border: 1px solid; -->
      <!-- style="background-color: lightgray" -->
      <div class="d-flex align-center flex-column justify-center">
        <v-icon size="28" color="surface-variant" icon="mdi-chevron-up" />
        <v-icon size="28" color="surface-variant" icon="mdi-chevron-down" />
      </div>
      <VueDraggable
        class="text-center pa-1 rounded overflow-auto d-flex flex-wrap"
        v-model="list"
        animation="150"
        ghostClass="ghost"
        group="people"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="phrase in props.phrases"
          :key="phrase.id"
          style="border: 1px solid; border-radius: 18px"
          class="draggable-cursor overflow-x-auto me-1 mb-1 px-2 flex-grow-1"
          :style="`background-color: ${phrase.color}; width: 90px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    text-overflow: ellipsis;
`"
        >
          {{ phrase.name }}
        </div>
        <!-- <v-chip -->
        <!--   v-for="phrase in list1" -->
        <!--   :key="phrase.id" -->
        <!--   variant="flat" -->
        <!--   :color="phrase.color" -->
        <!--   class="draggable-cursor ma-1" -->
        <!-- > -->
        <!--   {{ phrase.name }} -->
        <!-- </v-chip> -->
      </VueDraggable>

      <!-- <v-pagination -->
      <!--   rounded -->
      <!--   density="compact" -->
      <!--   v-model="page" -->
      <!--   :length="pageCount" -->
      <!-- ></v-pagination> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";

const props = defineProps<{
  title: string;
  phrases: string[];
}>();

const list = ref(props.phrases);

function onUpdate() {
  console.log("update");
}
function onAdd() {
  console.log("add");
}
function remove() {
  console.log("remove");
}
</script>
