import { Box, IconButton } from "@suid/material";
import SendIcon from '@suid/icons-material/Send';

export default function MessagerInput() {
    return (
        <Box class="absolute left-0 bottom-0 w-full box-border py-32px">
            <Box class="bg-[#fcc] flex items-center" sx={{
                width: '60%',
                margin: '0 auto',
                p: '12px',
                pb: '0px',
                background: '#eff4fb',
                borderRadius: '6px'
            }}>
                <AutoResizableTextarea name="my-textarea" placeholder="Type something here..." />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

import { createSignal, JSX, onCleanup } from 'solid-js';

interface AutoResizableTextareaProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const AutoResizableTextarea = (props: AutoResizableTextareaProps) => {
  const [value, setValue] = createSignal('');

  function handleInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  }

  onCleanup(() => {
    const textarea = document.querySelector(`textarea[name="${props.name}"]`)!;
    textarea.removeEventListener('input', handleInput);
  });

  return <textarea class="m-0 resize-none w-full border-0 bg-transparent outline-none" style="max-height: 100px; overflow-y: scroll;" {...props} value={value()} onInput={handleInput} />;
};
