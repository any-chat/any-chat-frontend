import { Box } from "@suid/material";
import { For, Show } from "solid-js";
import SVG from "../components/SVG";
import { useLayoutContext } from "../contexts/LayoutContext";

export default () => {
  const LayoutContext = useLayoutContext()

  return (
    <Box>
      <Show when={!LayoutContext.darkMode} fallback={() => (
        <SVG className="m-0-auto" width="420px" height="420px" icon="bto-logo-dark"></SVG>
      )}>
        <SVG className="m-0-auto" width="420px" height="420px" icon="bto-logo"></SVG>
      </Show>
      <Box class="flex w-70% px-64px justify-center space-x-4">
        <For each={[1, 1, 1]}>
          {(_, idx) =>
            <Box sx={{
              background: LayoutContext.darkMode ? '#383845' : '#eff4fb'
            }} class="w-220px text-center bg-[#f5f5f5] p-16px rounded-lg">
              <h2 class="text-18px font-500 mb-12px">鲁迅语录</h2>
              <p class="text-16px leading-22px">但倘若一定要问我青年应当向怎样的目标，那么，我只可以说出我为别人设计的话，就是：一要生存，二要温饱，三要发展。有敢来阻碍这三事者，无论是谁，我们都反抗他，扑灭他</p>
            </Box>
          }
        </For>
      </Box>
    </Box>
  );
};
