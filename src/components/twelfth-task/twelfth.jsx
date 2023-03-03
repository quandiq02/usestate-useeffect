import React, { useState } from "react";
import "./twelfth.css";

function Twelfth() {
  const [count, setCount] = useState(0);
  return (
    <div className="twelfth">
      <div className="twelfth__wrapper">
        <div className="twelfth__main">Counter : {count}</div>
        <button onClick={() => setCount(count * 2)}>x2</button>
        <button
          onClick={() => {
            setCount(count / 2);
          }}
        >
          /2
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Twelfth;
