import { Component, createMemo } from "solid-js";
import SideBar from "./components/SideBar";
import { ThemeProvider, createTheme } from "@suid/material/styles";
import LayoutContext, {
  createLayoutMutable,
  saveDarkMode,
} from "./contexts/LayoutContext";
import { createPalette } from "@suid/material/styles/createPalette";
import Routes from "./routes";
import SideBarControl from "./components/SideBarControl";
import ModeNight from "@suid/icons-material/ModeNight";
import ModeLight from "@suid/icons-material/LightMode";
import { Box } from "@suid/material";

const App: Component = () => {
  const context = createLayoutMutable();

  const theme = createTheme({
    palette: createMemo(() =>
      createPalette({
        mode: context.darkMode ? "dark" : "light",
      })
    ),
    transitions: () => ({
      create: (props = ["all"], options = {}) => {
        const {
          duration = 300,
          easing = "cubic-bezier(0.4, 0, 0.2, 1)",
          delay = 0,
        } = options;
        if (typeof props === "string") {
          props = [props];
        }
        return props
          .map(
            (animatedProp) =>
              `${animatedProp} ${duration}ms ${easing} ${delay}ms`
          )
          .join(",");
      },
      getAutoHeightDuration: (height: number) => {
        if (!height) return 0;
        const constant = height / 36;
        return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
      },
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    }),
  });

  return (
    <LayoutContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <section class="flex flex-col">
          <Box
            class="flex justify-start items-center space-x-5 px-4 h-16"
            component="header"
            sx={{
              bgcolor: "background.default",
            }}
          >
            <SideBarControl />
            {/* <Logo /> */}
            <Box
              class="flex items-center justify-between h-20"
              sx={{
                color: "text.primary",
              }}
            >
              <span class="text-2xl font-semibold">ChatGPT AI 助手</span>
            </Box>
            <Box
              sx={{ color: "text.primary" }}
              onClick={() => {
                context.darkMode = !context.darkMode;
                saveDarkMode(context.darkMode);
              }}
            >
              {theme.palette.mode === "dark" ? <ModeNight /> : <ModeLight />}
            </Box>
          </Box>
          <Box
            class="flex flex-1"
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            <SideBar />
            <main class="flex-1">
              <Routes />
            </main>
          </Box>
        </section>
      </ThemeProvider>
    </LayoutContext.Provider>
  );
};

export default App;
