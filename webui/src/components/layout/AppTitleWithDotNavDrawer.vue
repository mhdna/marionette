<template>
  <div
    class="d-flex justify-center text mb-8 mt-4"
    style="font-family: Lobster; font-size: 33px; position: relative"
  >
    <div
      style="
        position: absolute;
        top: -12px;
        left: 46%;
        transform: translateX(-50%);
      "
    >
      <!-- <v-icon size="20" icon="mdi-circle" class="fa text-danger-glow blink" /> -->
      <div class="circle"></div>
      <!-- <div class="moon-cont"></div> -->
    </div>
    <div>
      <span>mar</span>
      <span style="color: #a00">ı</span>
      <span>onette</span>
    </div>
  </div>
</template>

<style scoped>
/* .text { */
/*   padding: -20; */
/*   margin: -10; */
/* } */

/* .text-danger-glow { */
/*   color: #c00; */
/*   text-shadow: */
/*     0 0 20px #a00, */
/*     0 0 30px #a00, */
/*     0 0 40px #a00, */
/*     0 0 50px #a00, */
/*     0 0 60px #a00, */
/*     0 0 70px #a00, */
/*     0 0 80px #a00, */
/*     0 0 90px #a00, */
/*     0 0 100px #a00; */
/* } */

/* .blink { */
/*   animation: blinker 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate; */
/* } */
/* @keyframes blinker { */
/*   from { */
/*     opacity: 1; */
/*   } */
/*   to { */
/*     opacity: 0; */
/*   } */
/* } */

.circle {
  /* position: absolute; */
  background: #c00;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-shadow:
    0px 2px 40px 4px #c00,
    -2px -2px 100px 1px #c00;
  /* animation-name: rotate; */
  /* animation-duration: 3s; */
  /* animation-iteration-count: infinite; */
}

/* @keyframes rotate { */
/*   0% { */
/*     transform: rotate(0deg); */
/*   } */
/*   100% { */
/*     transform: rotate(360deg); */
/*   } */
/* } */

/* .circle:hover { */
/*   animation-name: colors; */
/*   animation-duration: 30s; */
/* } */
</style>
