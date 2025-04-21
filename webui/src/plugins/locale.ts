// src/plugins/i18n.js
import { createI18n } from "vue-i18n";
import { en, ar } from "vuetify/locale";
import arabic from "@/locales/arabic";
import english from "@/locales/english";

const messages = {
  en: {
    $vuetify: en,
    ...english,
  },
  ar: {
    $vuetify: ar,
    ...arabic,
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "ar",
  messages: messages,
});

export default i18n;
