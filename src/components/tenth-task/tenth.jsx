import React, { useState } from "react";
import "./tenth.css";

function Tenth() {
  const [counter, setCounter] = useState(0);
  const intervalRef = React.useRef(null);
  function incrementCounter() {
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 200);
  }
  function decrementCounter() {
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 200);
  }
  function stopCounter() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div className="tenth">
      <div className="tenth__wrapper">
        <button
          onMouseDown={incrementCounter}
          onMouseLeave={stopCounter}
          onMouseUp={stopCounter}
        >
          +
        </button>
        <div>{counter}</div>
        <button
          onMouseDown={decrementCounter}
          onMouseLeave={stopCounter}
          onMouseUp={stopCounter}
        >
          -
        </button>
      </div>
    </div>
  );
}
export default Tenth;
