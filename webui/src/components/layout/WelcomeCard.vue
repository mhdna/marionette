<template>
  <div class="d-flex flex-column justify-space-between" style="height: 330px">
    <div>
      <div
        class="d-flex flex-column text-h2 text-center justify-center text mb-12"
        style="font-family: Lobster; position: relative"
      >
        <div class="me-8 mb-0 pb-0">
          <v-icon
            size="38"
            icon="mdi-circle"
            class="fa text-danger-glow blink"
          />
        </div>
        <div>
          <span>mar</span>
          <span class="text-red">ı</span>
          <span>onette</span>
        </div>
      </div>
      <div class="text-center">
        Welcome to marionette, your ultimate solution for protecting your
        children or your employees at house.
      </div>
      <div class="text-center">
        marionette, your ultimate solution for protecting your children or your
        employees at house.
      </div>
      <div class="text-center">
        Welcome to solution for protecting your children or your employees at
        house.
      </div>
    </div>
    <div class="d-flex justify-center">
      <div class="me-8">
        <ChangeLanguage />
      </div>
      <div>
        <ChangeTheme />
      </div>
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
