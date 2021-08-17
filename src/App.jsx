import React from "react";
import useHover from "./useHover";

const App = () => {
  const [ref, isHovered, event] = useHover();
  const [ref2, isHovered2, event2] = useHover();

  return (
    <>
      <button>Button</button>
      <button>Button</button>
      <button>Button</button>
      <button ref={ref2}>
        {isHovered2
          ? "Hovered ! at " + [event2.pageX, event2.pageY].join(",")
          : "Hover me !"}
        Button
      </button>
      <div ref={ref}>
        {isHovered
          ? "Hovered ! at " + [event.pageX, event.pageY].join(",")
          : "Hover me !"}
      </div>
    </>
  );
};

export default App;
