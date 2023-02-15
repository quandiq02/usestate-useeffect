import React, { useState } from "react";
import "./forth.css";
function Forth() {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    count < 1 ? setCount(0) : setCount(count - 1);
  };
  const resetCount = ()=>{
    setCount(0)
  }
  return (
    <div className="forth">
      <div className="forth__wrapper">
        <div className="forth__value">{count}</div>
        <div className="forth__buttons">
          <button className="forth__buttons-minus" onClick={minusCount}>-1</button>
          <button className="forth__buttons-plus" onClick={plusCount}>+1</button>
          <button type="reset" className="forth__buttons-reset" onClick={resetCount} >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default Forth;