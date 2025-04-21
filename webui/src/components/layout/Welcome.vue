<template>
  <div class="container">
    <p>
      The greatest person in the world is:
      <span class="spoiler-text">
        &nbsp;&nbsp;&nbsp;&#121;&#111;&#117;&nbsp;&nbsp;&nbsp;&#32;&#58;&#41;
        <!-- no answer visible here! ;) -->
      </span>
      <span class="panel" tabindex="0"></span>
      <!-- tabindex allows tab key to select panel to reveal also -->
    </p>
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/css?family=Lily+Script+One";

body {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#9ad1d4, #d6eced);
}

.container {
  box-sizing: border-box;
  width: 400px;
  height: 200px;
  border-radius: 20px;
  background-color: #f5f5dc;
  padding: 20px;
  text-align: left;
  perspective: 400px;
  /* gives the 3d effect */
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

p {
  position: absolute;
  font-family: "Lily Script One";
  font-size: 2em;
  color: #a0522d;
  text-shadow: 2px 2px 1px #f5deb3;
}

.panel {
  position: absolute;
  width: 150px;
  height: 50px;
  background: #a0522d;
  transition: transform 1s;
  transform-origin: 0% 50%;
  cursor: help;
  border-radius: 5px;
}

.spoiler-text {
  position: absolute;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.panel:active,
.panel:focus {
  transform: rotateY(-90deg);
}
</style>
