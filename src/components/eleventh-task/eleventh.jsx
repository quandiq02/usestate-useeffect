import React, { useRef } from "react";
import "./eleventh.css";

function Eleventh() {
  const selectRef = useRef(null);

  const showInfo = () => {
    const elem = selectRef.current;
    console.log(elem.value);
  };
  return (
    <div className="eleventh">
      <div className="eleventh__wrapper">
        <span>Selected:{selectRef.current}</span>
        <select ref={selectRef} onChange={showInfo}>
          <option value="Bacon"> Bacon</option>
          <option value="Tuna">
            Tuna
          </option>
          <option value="Tuna plants">Tuna Plants</option>
        </select>
   
      </div>
    </div>
  );
}

export default Eleventh;
