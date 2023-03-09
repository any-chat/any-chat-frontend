import { Box, Button, IconButton } from "@suid/material";
import { Accessor, JSX } from "solid-js";
import { useLayoutContext } from "../contexts/LayoutContext";

export default function MenuButton(_: JSX.ButtonHTMLAttributes<HTMLElement>) {
  const context = useLayoutContext();

  /** 监听 ctrl + n 键 */
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "v") {
      context.darkMode = !context.darkMode;
    }
  });

  return (
    <IconButton
      class="w-10 h-10 flex justify-center items-center transition-all transform-gpu"
      onClick={() => (context.drawer.visible = !context.drawer.visible)}
    >
      <div class="w-4 h-4 flex flex-col space-y-1.25">
        <Box
          class={`w-4 h-0.5 transition-all transform-gpu ${
            context.drawer.visible ? "" : "!w-5 rotate-43"
          }`}
          style={{ "transform-origin": "0 100% 0" }}
          sx={{
            bgcolor: "text.primary",
          }}
        ></Box>
        <Box
          class={`w-4 h-0.5 transition-all transform-gpu ${
            context.drawer.visible ? "" : "scale-0 opacity-0"
          }`}
          sx={{
            bgcolor: "text.primary",
          }}
        ></Box>
        <Box
          class={`w-4 h-0.5 transition-all transform-gpu ${
            context.drawer.visible ? "" : "!w-5 -rotate-43"
          }`}
          style={{
            "transform-origin": "0 0% 0",
          }}
          sx={{
            bgcolor: "text.primary",
          }}
        ></Box>
      </div>
    </IconButton>
  );
}
