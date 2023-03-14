import { useSearchParams } from "@solidjs/router";
import { Avatar, Box } from "@suid/material";
import SVG from "../components/SVG";
import { useLayoutContext } from "../contexts/LayoutContext";

export default () => {
  const [sp] = useSearchParams();


  return <Box>
    <UserChat />
    <AssistantChat />
    <UserChat />
  </Box>;
};


function UserChat() {
  return (
    <Box class="user w-full" sx={{background: 'background.default'}}>
      <Box sx={{margin: '0 80px', boxSizing:'border-box', p: '16px', minHeight: '100px'}} class="flex space-x-4">
        <Avatar alt="aa" />
        <p>你好</p>
      </Box>
    </Box>
  )
}

function AssistantChat() {
  const LayoutContext = useLayoutContext()
  return (
    <Box class="assistant w-full" sx={{background: LayoutContext.darkMode ? '#383845' : '#eff4fb'}}>
      <Box sx={{margin: '0 80px', boxSizing:'border-box', p: '16px', minHeight: '100px'}} class="flex space-x-4">
        <SVG icon="logo" width="40px" height="40px" />
        <p>你好你好你好你好你好你好</p>
      </Box>
    </Box>
  )
}