import { Component, createSignal, JSX } from 'solid-js';

interface SVGProps {
  icon: string;
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
}

const SVG: Component<SVGProps> = (props) => {
  const [svgHTML, setSvgHTML] = createSignal('');

  fetch(`/src/assets/svg/${props.icon}.svg`) // replace with the path to your SVG directory
    .then(response => response.text())
    .then(text => setSvgHTML(text));

  return (
    <div
      class={`icon ${props.className}`}
      style={{
        'width': props.width || '24px',
        'height': props.height || '24px',
      }}
      innerHTML={svgHTML()}
    />
  );
};

export default SVG;
