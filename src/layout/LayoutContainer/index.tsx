import { Box } from "@suid/material";
import Main from './Main'
import SideBar from "./SideBar";

export default function LayoutContainer() {
    return (
        <Box
            class="flex flex-1"
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
            }}
        >
            <SideBar />
            <Main />
        </Box>
    )
}