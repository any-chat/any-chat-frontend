import { Box, IconButton } from "@suid/material";
import { useLayoutContext } from "../../contexts/LayoutContext";

export default function SideBarToggle() {
  const context = useLayoutContext();

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
