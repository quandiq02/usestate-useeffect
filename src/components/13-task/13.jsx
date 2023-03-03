import React,{useState} from "react";
import "./13.css";

function Thirteen() {
  const [show, setShow] = useState(true);
  return (
    <div className="thirteen">
      <div className="thirteen__wrapper">
        <button className="thirteen__btn" onClick={() => setShow(true)}>
          Show Input
        </button>
        <button className="thirteen__btn" onClick={() => setShow(false)}>
          Hide Input
        </button>
        <div className="thirteen__main">
          {show ? (
           <input type="text" placeholder="Enter your name" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Thirteen