import { Box, IconButton } from "@suid/material";
import SendIcon from '@suid/icons-material/Send';

export default function MessagerInput() {
    return (
        <Box class="absolute left-0 bottom-0 w-full box-border py-32px">
            <Box class="bg-[#fcc] flex items-center" sx={{
                width: '60%',
                margin: '0 auto',
                p: '12px',
                background: '#eff4fb',
                borderRadius: '6px'
            }}>
                <textarea placeholder="说点什么..." tabindex="0" rows="1" class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 outline-none" style="max-height: 200px; height: 24px; overflow-y: hidden;"></textarea>
                <IconButton>
                    <SendIcon />
                </IconButton>
            </Box>
        </Box>
    )
}