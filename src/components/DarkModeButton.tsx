import { createSignal } from "solid-js";
import ModeNight from "@suid/icons-material/ModeNight";
import ModeLight from "@suid/icons-material/LightMode";
import { Button } from "@suid/material";
import { useTheme } from "@suid/material/styles";
import { saveDarkMode, useLayoutContext } from "../contexts/LayoutContext";
export default function SideBar() {
  const theme = useTheme();
  const layoutContext = useLayoutContext();
  /** 夜间模式开关 */
  const [darkMode, setDarkMode] = createSignal(false);

  /** 监听 ctrl + m 键 */
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "m") setDarkMode(!darkMode());
  });

  return (
    <Button
      onClick={() => {
        layoutContext.darkMode = !layoutContext.darkMode;
        saveDarkMode(layoutContext.darkMode);
      }}
    >
      {theme.palette.mode === "dark" ? <ModeNight /> : <ModeLight />}
    </Button>
  );
}
