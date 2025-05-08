<template>
  <div
    class="d-flex text-center ml-16 flex-column justify-center text"
    style="font-family: Lobster; font-size: 101px; position: relative"
  >
    <div
      style="
        position: absolute;
        top: -47px;
        left: 47%;
        transform: translateX(-50%);
      "
    >
      <v-icon size="40" icon="mdi-circle" class="fa text-danger-glow blink" />
    </div>
    <div>
      <span>mar</span>
      <span class="text-red">ı</span>
      <span>onette</span>
    </div>
  </div>
</template>

<style scoped>
.text {
  padding: -10;
  margin: -20;
}

.text-danger-glow {
  color: #f00;
  text-shadow:
    0 0 20px #a00,
    0 0 30px #a00,
    0 0 40px #a00,
    0 0 50px #a00,
    0 0 60px #a00,
    0 0 70px #a00,
    0 0 80px #a00;
}

.blink {
  animation: blinker 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
}
@keyframes blinker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
