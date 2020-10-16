import React from 'react';
import Shape from './Shape';
import useHover from './hooks/useHover';

export default function FunctionBasedCircle() {
  const [isHovered, enterElement, leaveElement] = useHover();

  return (
    <section
      class={`section column is-two-fifths circle box`}
      onMouseEnter={enterElement}
      onMouseLeave={leaveElement}
    >
      <Shape type="Function" shape="Circle" isHovered={isHovered} />
    </section>
  );
}
