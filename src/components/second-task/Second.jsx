import React, { useState } from "react";
import "./second.css";

function Second() {
  const [count, setCount] = useState(0);
  const [xPos, setXpos] = useState(0);
  const [yPos, setYpos] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  const getPositions = (e) => {
    setXpos(e.clientX);
    setYpos(e.clientY);
  };
  return (
    <div className="second">
      <div className="second__wrapper" onMouseMove={getPositions}>
        <div className="second__click">You've clicked {count} times</div>
        <button className="second__btn-click" onClick={counter}>
          Click me
        </button>
        <div className="second-xpos">X position: {xPos}</div>
        <div className="second-ypos">Y position: {yPos}</div>
      </div>
    </div>
  );
}
export default Second;
