<template>
  <v-empty-state
    headline="Whoops, 404"
    title="Page not found"
    text="The page you were looking for does not exist"
  >
    <template v-slot:headline>
      <div class="d-flex flex-column justify-center align-center">
        <SadDot size="120" class="mb-4" />
        <!-- foce ltr so that the face is not flipped -->
        <div>Whoops, 404</div>
      </div>
    </template>
    <!-- <v-img src="/logo.png" width="400"> </v-img> -->
  </v-empty-state>
</template>

<!-- <route> -->
<!-- meta: -->
<!--   layout: 404 -->
<!-- </route> -->
