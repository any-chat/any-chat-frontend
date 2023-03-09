import { Box } from "@suid/material";
import { Suspense } from "solid-js";
import { useLayoutContext } from "../contexts/LayoutContext";
import SessionList from "./SessionList";

export default function SideBar() {
  const layoutContext = useLayoutContext();

  return (
    <Box
      component="nav"
      class={`h-full ${layoutContext.drawer.visible ? "w-54" : "w-17.5"}`}
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        pl: layoutContext.drawer.visible ? "10px" : "7px",
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <SessionList />
      </Suspense>
    </Box>
  );
}
