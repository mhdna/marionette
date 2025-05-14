import "intro.js/introjs.css";
import "./introJs.css";
import introJs from "intro.js";

export default {
  install: (app) => {
    app.config.globalProperties.$startIntro = function (
      steps,
      onComplete = () => {},
      options = null
    ) {
      let introInstance = introJs();

      introInstance.setOptions({
        steps: steps.filter((x) => x.element !== undefined),
        exitOnOverlayClick: false,
        disableInteraction: true,
        hidePrev: true,
        skipLabel: "Skip",
        ...options,
      });

      new Promise((resolve) => {
        introInstance.oncomplete(resolve).onexit(resolve).start();
      }).then(onComplete);

      return introInstance;
    };
  },
};
