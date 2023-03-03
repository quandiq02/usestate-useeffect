import React, { useState } from "react";
import "./eight.css";
function Eigth() {
  const [item, setItem] = useState([1, 2, 3]);
  function addItem() {
    setItem([...item, item.length + 1]);
  }
  return (
    <div className="eight">
      <div className="eight__wrapper">
        <ul className="eight__list">
          {item.map((num, index) => (
            <li key={index} className="eight__item">
              item {num}
            </li>
          ))}
        </ul>
        <button className="eight__btn" onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Eigth;
