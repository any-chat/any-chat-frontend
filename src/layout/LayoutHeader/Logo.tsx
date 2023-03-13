import { Box } from '@suid/material'
import SVG from '../../components/SVG'
export default function Logo() {
    return (
        <Box class="relative w-160px h-60px overflow-hidden ml-18px">
            <SVG className="absolute top-[-40px] left-[-50px]" icon="inline-logo" width="240px" height="140px" />
        </Box>
    )
}