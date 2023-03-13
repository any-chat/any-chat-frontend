import { Box, IconButton } from "@suid/material";
import { useLayoutContext } from "../../contexts/LayoutContext";
import ModeNight from "@suid/icons-material/ModeNight";
import ModeLight from "@suid/icons-material/LightMode";
import {
    saveDarkMode,
} from "../../contexts/LayoutContext";

export default function ThemeSwitcher() {
    const context = useLayoutContext();
    return (
        <IconButton
            sx={{ color: "text.primary" }}
            onClick={() => {
                context.darkMode = !context.darkMode;
                saveDarkMode(context.darkMode);
            }}
        >
            {context.darkMode ? <ModeNight /> : <ModeLight />}
        </IconButton>
    )
}