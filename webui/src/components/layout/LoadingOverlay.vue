<template>
  <v-overlay
    :model-value="props.loading"
    class="align-center justify-center"
    transition="slide-y-transition"
  >
    <!-- :rotate="360" -->
    <v-img src="/logo.png" :width="300" alt="logo" />
    <!-- <v-progress-circular :size="200" :width="15" color="teal" indeterminate> -->
    <!-- </v-progress-circular> -->

    <!-- <div class="container"> -->
    <!--   <div :class="{ loaded: isLoaded }"> -->
    <!--     <span><span>m</span></span -->
    <!--     ><span><span>ar</span></span -->
    <!--     ><span><span>io</span></span -->
    <!--     ><span -->
    <!--       ><span>ne</span><span>t</span><span>t<span>e</span></span></span -->
    <!--     > -->
    <!--   </div> -->
    <!-- </div> -->
    <!-- <v-progress-circular -->
    <!--   color="primary" -->
    <!--   size="64" -->
    <!--   indeterminate -->
    <!-- ></v-progress-circular> -->
  </v-overlay>
  <!-- <slot v-else></slot> -->
</template>

<script setup lang="ts">
// watch(loading, (val) => {
//   val &&
//     setTimeout(() => {
//       loading = false;
//     }, 3000);
// });
import { ref, onBeforeUnmount, onMounted, nextTick } from "vue";

const value = ref(0);

let interval = -1;
onMounted(() => {
  interval = setInterval(() => {
    if (value.value === 100) {
      return (value.value = 0);
    }
    value.value += 30;
  }, 500);
});
onBeforeUnmount(() => {
  clearInterval(interval);
});

const isLoaded = ref(false);

onMounted(() => {
  // Ensure Vue has rendered everything before applying transitions
  nextTick(() => {
    setTimeout(() => {
      isLoaded.value = true;
    }, 50);
  });
});

const props = withDefaults(
  defineProps<{
    loading: boolean;
  }>(),
  {
    loading: false,
  },
);
</script>

<style scoped>
/* .v-overlay.v-overlay--active { */
/*   /* opacity: 0.7; */
/*   background-color: #222222; */
/* } */

.container {
  color: black;
  border-radius: 60rem;
  /*   align-items: center; */
  background: #3692ff;
  box-sizing: border-box;
  opacity: 1 !important ;
  /*   color: #001e51; */
  /*   cursor: pointer; */
  /*   display: flex; */
  /*   flex-direction: column; */
  font-family: "Lobster", sans-serif;
  /*   justify-content: center; */
  /*   margin: 0; */
  /* min-height: 100vh; */
  /*   padding: 100px; */
}

div {
  font-size: 4vw;
  line-height: 1;
}

div > span {
  display: inline-block;
  overflow: hidden;
  transition-duration: 0.2s;
  transition-property: transform;
}

div > span span {
  display: inline-block;
  transition-duration: 0.5s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

div > span:nth-child(odd) {
  transform: translateY(50%);
}

div > span:nth-child(odd) span {
  transform: translateY(-100%);
}

div > span:nth-child(even) {
  transform: translateY(-50%);
}

div > span:nth-child(even) span {
  transform: translateY(100%);
}

div.loaded > span {
  transform: translateY(0);
}

div.loaded > span span {
  transform: translateY(0);
}
/* .v-progress-circular { */
/*   margin: 1rem; */
/* } */
</style>
