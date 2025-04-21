/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { routes } from "vue-router/auto-routes";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

console.clear();

// 3. Create a scrollBehavior function. This handles the scrollbar position
// as you navigate between views. I've used this same function on every
// project, it should just be built in to Vue-Router at this point.
// function scrollBehavior(to, from, savedPosition) {
//   // Check that path is different, so this doesn't scroll to top every time
//   // a query parameter is changed
//   if (to.path !== from.path) {
//     if (
//       // If this is a push/pop state (forward/back), use the saved position
//       savedPosition ||
//       // Don't change screen position when closing/opening a modal
//       to.meta?.savePosition ||
//       to.params?.savePosition
//     ) {
//       return savedPosition;
//     }

//     // Promise/resolve is useful when lazy-loading routes
//     return new Promise((resolve) => {
//       // Otherwise always scroll to the top of the page
//       resolve({ left: 0, top: 0 });
//     });
//   }
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
  // scrollBehavior,
});

// // 5. Run NProgress every time you navigate
// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   NProgress.set(0.1);
//   next();
// });

// // This timeout makes the progress bar animation less jarring
// // on fast loads, but you can just run NProgress.done()
// // if you want the most immediate clearing of the animation.
// router.afterEach(() => {
//   setTimeout(() => NProgress.done(), 500);
// });

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
