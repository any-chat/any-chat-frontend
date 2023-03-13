import { createMemo } from "solid-js";
import { createTheme, type Theme } from "@suid/material";
import { createPalette } from "@suid/material/styles/createPalette";
import { type ThemeTransitionsType } from "@suid/material/styles/createTransitions";

/** init the suid theme */
function init(context): Theme {
  const theme: Theme = createTheme({
    palette: createMemo(() =>
      createPalette({
        mode: context.darkMode ? "dark" : "light",
      })
    ),
    transitions,
  });
  return theme;
}

/** transition conf */
function transitions(): ThemeTransitionsType {
  return {
    create: (props = ["all"], options = {}) => {
      const {
        duration = 300,
        easing = "cubic-bezier(0.4, 0, 0.2, 1)",
        delay = 0,
      } = options;
      if (typeof props === "string") {
        props = [props];
      }
      return props
        .map(
          (animatedProp) => `${animatedProp} ${duration}ms ${easing} ${delay}ms`
        )
        .join(",");
    },
    getAutoHeightDuration: (height: number) => {
      if (!height) return 0;
      const constant = height / 36;
      return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  };
}

export default {
  init,
};
