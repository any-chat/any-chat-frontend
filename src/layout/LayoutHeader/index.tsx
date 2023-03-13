import { Box } from "@suid/material";
import Logo from "./Logo";
import SideBarToggle from "./SideBarToggle";
import ThemeSwitcher from "./ThemeSwitcher";

export default function LayoutHeader() {
    return (
        <Box component="header" class="shadow-sm flex justify-between items-center space-x-5 px-4 h-60px" sx={{
            bgcolor: "background.default",
        }}>
            <Box class="flex items-center">
                <SideBarToggle />
                <Logo />
            </Box>
            <Box>
                <ThemeSwitcher />
            </Box>
        </Box>
    )
}