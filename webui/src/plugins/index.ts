/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import pinia from "../stores";
import router from "../router";
// import VueApexCharts from "vue3-apexcharts";
import i18n from "@/plugins/locale";
// import VueChartkick from "vue-chartkick";
// import "chartkick/chart.js";

import ECharts from "vue-echarts";
import { use } from "echarts/core";

// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

// use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);
// import uPlot from "uplot";
// import UplotVue from "uplot-vue";
// import "uplot/dist/uPlot.min.css";
import Vue3Tour from "vue3-tour";
import "vue3-tour/dist/vue3-tour.css";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app.component("v-chart", ECharts);
  // .use(VueChartkick)
  // .use(VueApexCharts)
  app.use(i18n).use(vuetify).use(router).use(pinia).use(Vue3Tour);
  // .use(UplotVue)
  // app.config.globalProperties.$t = i18n.global.t;
}

import apex_arabic from "@/locales/apex_arabic.json";
import apex_english from "@/locales/apex_english.json";

// declare global {
//   interface Window {
//     Apex: any;
//   }
// }

// window.Apex.chart = {
//   locales: [apex_arabic, apex_english],
//   defaultLocale: "en",
//   background: "transparent",
//   fontFamily: "Roboto, Baloo Bhaijaan 2",
//   // chart: {
//   //   animations: {
//   //     enabled: false,
//   //     // speed: 800,
//   //     // animateGradually: {
//   //     //   enabled: true,
//   //     //   delay: 150,
//   //     // },
//   //   },
//   // },
//   toolbar: {
//     show: false,
//   },
//   // zoom: {
//   //   enabled: false,
//   // },
//   // labels: {
//   //   style: {
//   //     fontFamily: "Monospace",
//   //   },
//   // },
// };
