<template>
  <div class="text-center">
    <v-menu v-model="menu">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon="mdi-translate"></v-btn>
        <!-- v-tooltip:bottom="'Change Language'" -->
      </template>

      <v-card>
        <v-divider></v-divider>

        <!-- TODO :item="items" similar to the notifications pop-up -->
        <v-list density="compact">
          <!-- prepend-avatar="/flags/uk.svg" -->
          <v-list-item
            class="text-left"
            title="English"
            @click="changeLocale('en')"
          >
            <!-- <v-icon>mdi-alphabet-latin</v-icon> -->
          </v-list-item>
          <!-- prepend-avatar="/flags/lb.svg" -->
          <v-list-item
            title="Arabic (العربية)"
            class="text-left"
            @click="changeLocale('ar')"
          >
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script setup>
import { useLocale } from "vuetify";

const { current } = useLocale();
const locale = "en";

function changeLocale(locale) {
  current.value = locale;
}
import { ref } from "vue";

const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);
</script>

<style scoped>
/* -------------- CSS --------------- */
img {
  width: 32px;
  height: 32px;
  transition: all 0.5s;
  margin: auto 3px;
  user-select: none;
}

img:hover {
  cursor: pointer;
  opacity: 1;
}

.fr_lang,
.en_lang {
  display: none;
  transition: display 0.5s;
}

/* Language */
.active-lang {
  display: flex !important;
  transition: display 0.5s;
}

.active-flag {
  transition: all 0.5s;
  opacity: 1 !important;
}

/* ------------------ Useless ------------------ */
/* Don't copy/past this. It's just a cosmetic. */

* {
  margin: 0;
  padding: 0;
}
</style>
