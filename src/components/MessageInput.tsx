import { Box, IconButton } from "@suid/material";
import SendIcon from '@suid/icons-material/Send';
import { createSignal, JSX, onCleanup } from 'solid-js';
import { useLayoutContext } from "../contexts/LayoutContext";

export default function MessagerInput() {
  const LayoutContext = useLayoutContext()
  
    return (
        <Box class="absolute left-0 bottom-0 w-full box-border py-32px" >
            <Box class="flex items-center m-0-auto" sx={{
                width: '60%',
                maxWidth: '640px',
                p: '12px',
                background: LayoutContext.darkMode ? '#383845' : '#eff4fb',
                borderRadius: '6px',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            }}>
                <AutoResizableTextarea name="my-textarea" placeholder="说点什么..." />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </Box>
        </Box>
    )
}


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
