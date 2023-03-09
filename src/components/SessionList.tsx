import { For, Show } from "solid-js";
import AddCommentIcon from "@suid/icons-material/AddComment";
import Close from "@suid/icons-material/Close";
import {
  Divider,
  Grow,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Box,
  IconButton,
} from "@suid/material";
import { useLayoutContext } from "../contexts/LayoutContext";
import {
  createNewSession,
  deleteSession,
  getAllSessions,
} from "../hooks/sessions";

export default function SessionList() {
  const layoutContext = useLayoutContext();
  const sessions = getAllSessions();

  console.log(sessions());

  /** 监听 ctrl + n 键 */
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "n") {
      console.log("触发 - 新建会话");
    }
  });

  return (
    // menu
    <nav class="flex-1 overflow-y-auto overflow-x-hidden">
      {/* menu */}
      <List
        class="flex flex-col space-y-1"
        sx={{
          fontSize: layoutContext.drawer.visible ? "1rem" : "10px",
        }}
      >
        <ListItem disablePadding class="w-full mb-2">
          <ListItemButton
            onClick={createNewSession}
            alignItems="center"
            class="flex justify-between"
          >
            <Box
              component={Stack}
              justifyContent="center"
              alignItems="center"
              direction={layoutContext.drawer.visible ? "row" : "column"}
              spacing={layoutContext.drawer.visible ? 1 : 0.5}
            >
              <div class="flex justify-center items-center">
                <AddCommentIcon
                  sx={{
                    fontSize: "24px",
                  }}
                />
              </div>
              <span>
                {layoutContext.drawer.visible ? "创建新会话" : "新会话"}
              </span>
            </Box>
          </ListItemButton>
        </ListItem>
        <Divider />
        <For each={sessions()}>
          {(session, idx) => (
            <Grow appear in={true} {...{ timeout: idx() * 100 }}>
              <ListItem
                disablePadding
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteSession(session.id)}
                  >
                    <Close
                      sx={{
                        fontSize: "12px",
                      }}
                    />
                  </IconButton>
                }
              >
                <ListItemButton
                  disableGutters={!layoutContext.drawer.visible}
                  sx={{
                    justifyContent: layoutContext.drawer.visible
                      ? "space-between"
                      : "center",
                    alignItems: "center",
                    fontSize: layoutContext.drawer.visible ? "1rem" : "12px",
                  }}
                  selected={idx() === 2}
                >
                  {layoutContext.drawer.visible && "会话"}
                  {sessions().length - idx()}
                  <Show when={layoutContext.drawer.visible}>
                    <span class="text-[10px] text-gray-400">三天前</span>
                  </Show>
                </ListItemButton>
              </ListItem>
            </Grow>
          )}
        </For>
      </List>
    </nav>
  );
}
