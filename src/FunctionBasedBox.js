import React from 'react';
import Shape from './Shape';
import useHover from './hooks/useHover';

export default function FunctionBasedBox() {
  const [isHovered, enterElement, leaveElement] = useHover();

  return (
    <section
      class={`section column is-two-fifths box`}
      onMouseEnter={enterElement}
      onMouseLeave={leaveElement}
    >
      <Shape type="Function" shape="Box" isHovered={isHovered} />
    </section>
  );
}
