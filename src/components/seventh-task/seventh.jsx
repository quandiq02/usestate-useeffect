import { useState, useEffect } from "react";
import "./seventh.css";
function Seventh() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="seventh">
      <div className="seventh__wrapper">
        <button
          className="seventh__btn"
          onClick={() => setToggle((!toggle))}
        >
          Toggle Fetch Component
        </button>
        <div className="seventh__main">
          {toggle ? (
            <div className="seventh__main-show">Fetch Toggle Component</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Seventh;
