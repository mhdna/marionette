/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VTimePicker } from "vuetify/labs/VTimePicker";
import { VDateInput } from "vuetify/labs/VDateInput";
import { VIconBtn } from "vuetify/labs/VIconBtn";
import { useI18n } from "vue-i18n";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import i18n from "@/plugins/locale";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// export default createVuetify({
//   theme: {
//     defaultTheme: 'dark',
//   },
// })

const dark = {
  dark: true,
  colors: {
    background: "#000000",
    surface: "#000000",
    "surface-bright": "#FFFFFF",
    "surface-light": "#333333",
    "surface-variant": "#424242",
    "on-surface-variant": "#EEEEEE",
    bar: "#ff9800",
    primary: "#48A9A6",
    "primary-darken-1": "#1F5592",
    secondary: "#48A9A6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "border-color": "#000000",
    "border-opacity": 0.12,
    "high-emphasis-opacity": 0.87,
    "medium-emphasis-opacity": 0.6,
    "disabled-opacity": 0.38,
    "idle-opacity": 0.04,
    "hover-opacity": 0.04,
    "focus-opacity": 0.12,
    "selected-opacity": 0.08,
    "activated-opacity": 0.12,
    "pressed-opacity": 0.12,
    "dragged-opacity": 0.08,
    "theme-kbd": "#212529",
    "theme-on-kbd": "#FFFFFF",
    "theme-code": "#F5F5F5",
    "theme-on-code": "#000000",
  },
};

export default createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  theme: {
    defaultTheme: "dark",
    // themes: {
    //   dark,
    // },
  },
  components: {
    VTimePicker,
    VDateInput,
    VIconBtn,
  },
});
