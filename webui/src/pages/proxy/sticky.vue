<template>
  <div class="layout-container">
    <!-- Main content card - takes up remaining space -->
    <v-card rounded="lg" class="main-card" flat density="compact">
      <v-card-title>Main Content</v-card-title>
      <v-card-text>
        <!-- Your main content goes here -->
        <p v-for="n in 20" :key="n">
          This is paragraph {{ n }} of the main content.
        </p>
      </v-card-text>
    </v-card>

    <!-- Sticky side card -->
    <div class="sticky-wrapper">
      <v-card rounded="lg" class="sticky-card" flat density="compact">
        <v-card-title>Sticky Side Card</v-card-title>
        <v-card-text>
          <!-- Your sticky card content goes here -->
          <p>This card will remain fixed while scrolling.</p>
          <p>It has its own scrollable content if needed.</p>
          <div v-for="n in 10" :key="n">Item {{ n }}</div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  position: relative;
  gap: 16px;
  padding: 16px;
  width: 100%;
}

.main-card {
  flex: 1 1 auto;
  min-width: 0; /* Prevents flex item from overflowing */
  width: calc(100% - 280px - 16px); /* Adjust for sticky card width + gap */
}

.sticky-wrapper {
  position: relative;
  width: 280px;
  flex: 0 0 280px; /* Don't grow or shrink */
}

.sticky-card {
  position: fixed;
  width: 280px;
  max-height: 80vh;
  overflow-y: auto;
  top: 16px; /* Adjust based on your layout */
}

/* Media query for responsive layout */
@media (max-width: 960px) {
  .layout-container {
    flex-direction: column;
  }

  .main-card {
    width: 100%;
    margin-bottom: 16px;
  }

  .sticky-wrapper {
    width: 100%;
    height: auto;
    flex: 0 0 auto;
  }

  .sticky-card {
    position: relative;
    width: 100%;
    max-height: none;
    top: 0;
  }
}
</style>
