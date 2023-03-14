import { Box } from '@suid/material'
import { Show } from 'solid-js'
import SVG from '../../components/SVG'
import { useLayoutContext } from '../../contexts/LayoutContext'
export default function Logo() {
  const LayoutContext = useLayoutContext()

    return (
        <Box class="relative w-160px h-60px overflow-hidden ml-18px">
            <Show when={!LayoutContext.darkMode} fallback={() => (
                <SVG className="absolute top-[-40px] left-[-50px]" icon="inline-logo-dark" width="240px" height="140px" />
            )}>
                <SVG className="absolute top-[-40px] left-[-50px]" icon="inline-logo" width="240px" height="140px" />
            </Show>
        </Box>
    )
}