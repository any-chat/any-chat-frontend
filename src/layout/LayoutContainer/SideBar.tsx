import { Box } from "@suid/material";
import { Suspense } from "solid-js";
import SessionList from "../../components/SessionList";
import { useLayoutContext } from "../../contexts/LayoutContext";

export default function SideBar() {
    const layoutContext = useLayoutContext();

    return (
        <Box 
            component="nav" 
            class={`h-full ${layoutContext.drawer.visible ? "w-64" : "w-19.5"}`} 
            sx={{
            bgcolor: "background.default",
            color: "text.primary",
            p: layoutContext.drawer.visible ? "10px" : "7px",
            height: 'calc(100vh - 60px)',
            overflow: 'scroll'
        }}>
            <Suspense>
                <SessionList />
            </Suspense>
        </Box>
    )
}