import { Box } from '@suid/material'
import MessagerInput from '../../components/MessageInput'
import Routes from '../../routes'
export default function LayoutMain() {

    return (
        <Box component="main" class="flex-1 relative" sx={{
            background: "background.primary",
            color: "color.primary",
            height: 'calc(100vh - 60px)',
            overflow: 'scroll'
        }}>
            <Routes />
            <MessagerInput />
        </Box>
    )
}