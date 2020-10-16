import { useState } from 'react';

// Returns hovered (boolean representing hovered status and a ref add to the respective component
function useHover() {
  const [hovered, setHovered] = useState(false);

  function enterElement() {
    setHovered(true);
  }

  function leaveElement() {
    setHovered(false);
  }

  return [hovered, enterElement, leaveElement];
}

export default useHover;
