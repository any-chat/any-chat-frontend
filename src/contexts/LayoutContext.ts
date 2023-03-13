import { createContext, useContext } from "solid-js";
import { createMutable } from "solid-js/store";

const defaultOptions = {
  darkMode: getSavedDarkMode() ?? isSysThemeDark(),
  drawer: {
    visible: true,
    openState: false,
    permanent: true,
    width: 0,
    visibleWidth: 0
  }
};

const LayoutContext = createContext(defaultOptions);

export function createLayoutMutable() {
    return createMutable(defaultOptions)
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export function getSavedDarkMode() {
  const isDarkMode = window.localStorage.getItem("darkMode");
  if (isDarkMode === "true") return true;
  if (isDarkMode === "false") return false;
}

export function saveDarkMode(value: boolean) {
  localStorage.setItem("darkMode", value ? "true" : "false");
}

export function isSysThemeDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default LayoutContext;
