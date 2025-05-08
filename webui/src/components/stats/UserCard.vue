<template>
  <v-card
    class="wrapper-container mx-2 mb-4"
    elevation="4"
    min-width="380"
    max-width="800"
    height="170"
    :style="`border: 0px solid ${item.online ? '#007700' : '#777777'}; border-left: 6px solid ${item.online ? '#007700' : '#777777'}`"
    rounded="lg"
    density="compact"
  >
    <!-- color="surface-light" -->
    <div class="wrapper-content">
      <!-- First div with content -->
      <div class="content-div pt-3" :class="{ 'content-hide': isHovered }">
        <div class="d-flex">
          <div class="mx-2">
            <!--                   <v-tooltip -->
            <!--                     text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. -->
            <!-- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " -->
            <!--                     max-width="300" -->
            <!--                     location="end" -->
            <!--                   > -->
            <!--                     <template v-slot:activator="{ props }"> -->
            <UserInfoMenu>
              <v-avatar size="36">
                <!-- <v-badge color="success" dot> -->
                <v-img :src="item.prependAvatar" />
                <!-- </v-badge> -->
              </v-avatar>
            </UserInfoMenu>
            <!-- </template> -->
            <!-- </v-tooltip> -->
          </div>
          <div class="px-2 d-flex flex-column">
            <div class="d-flex justify-space-between">
              <!-- <div class="d-flex"> -->
              <div class="me-2 font-weight-bold">{{ item.title }}</div>
              <!-- <v-icon color="green" icon="mdi-circle" /> -->
              <div v-if="item.online" class="text-green font-weight-bold">
                Online
              </div>
              <div v-else class="font-weight-bold" style="color: #777777">
                Offline
              </div>
            </div>
            <div
              class="d-flex flex-column text-medium-emphasis justify-space-between mt-4"
            >
              <div>
                <div>Working On Project 1</div>
                <div class="me-2">1,300 requests</div>
                <div>2:10:30 Elapsed</div>
                <div>10:30 Unproductive</div>
              </div>

              <div>
                <div v-if="item.online" class="d-flex align-center mb-3">
                  <!-- TODO adding mb-3 fixed the image temporarily -->
                  Using: Firefox &nbsp;(
                  <v-img src="/apps/apps/org.mozilla.Firefox.svg" />)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second div with image that expands on hover -->
      <div
        class="image-div"
        v-if="item.online"
        :class="{ 'image-expanded': isHovered }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <v-img :src="item.image" alt="Placeholder Image" cover height="100%" />
        <!-- <div > -->
        <v-btn
          v-if="isHovered"
          variant="text"
          class="image-overlay text-red font-weight-bold"
        >
          <v-icon color="red" class="me-1" icon="mdi-circle" size="26" />
          Live Stream
        </v-btn>
        <!-- <v-card-title class="text-h4 text-white font-weight-bold"> -->
        <!--   Image Content -->
        <!-- </v-card-title> -->
        <!-- <v-card-text class="text-white"> -->
        <!--   This content appears when you hover over the image. Move your mouse -->
        <!--   away to return to the original view. -->
        <!-- </v-card-text> -->
        <!-- </div> -->
      </div>

      <!-- TODO fix these colors and put them into the theme -->
      <div
        v-else
        class="d-flex justify-center align-center image-div bg-on-surface-variant"
        style="background-color: #151515"
      >
        <!-- <v-img max-width="150" src="/scribble.svg" alt="No connection" cover /> -->
        <v-icon icon="mdi-wifi-strength-off" size="70" color="#666666" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isHovered = ref(false);

defineProps<{
  item: Object;
}>();
</script>

<style scoped>
.wrapper-container {
  position: relative;
  overflow: hidden;
}

.wrapper-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.content-div {
  position: relative;
  width: 60%;
  height: 100%;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* padding: 16px; */
  z-index: 1;
}

.image-div {
  position: absolute;
  right: 0;
  width: 40%;
  height: 100%;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  z-index: 0;
}

.content-hide {
  transform: translateX(-100%);
  opacity: 0;
}

.image-expanded {
  width: 100%;
  z-index: 2;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  /* backdrop-filter: blur(1px); */
  /* -webkit-backdrop-filter: blur(1px); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 32px; */
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
