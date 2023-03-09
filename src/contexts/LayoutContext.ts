import { createContext, useContext } from "solid-js";
import { createMutable } from "solid-js/store";

function isSysThemeDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export const defaultOptions = {
  darkMode: getSavedDarkMode() ?? isSysThemeDark(),
  drawer: {
    visible: true,
    openState: false,
    permanent: true,
    width: 0,
    visibleWidth: 0,
  },
};

const LayoutContext = createContext(defaultOptions);

export function createLayoutMutable() {
  return createMutable(defaultOptions);
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export function saveDarkMode(value: boolean) {
  localStorage.setItem("darkMode", value ? "true" : "false");
}

export function getSavedDarkMode() {
  const value = localStorage.getItem("darkMode");
  if (value === "true") return true;
  if (value === "false") return false;
}

export default LayoutContext;
