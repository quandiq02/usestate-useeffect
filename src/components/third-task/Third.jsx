import React, { useState } from "react";
import "./third.css";
function Third() {
  const [bg, setBg] = useState('#C2DFFF');
  const changeBG = (e)=>{
    setBg(e.target.value)
  }
  return (
    <div className="third" style={{background:bg}}>
      <div className="third__wrapper">
        <select className="third__select" onChange={changeBG} value={bg}>
          <option value="#C2DFFF ">Sea</option>
          <option value="#C2B280">Sand</option>
          <option value="#FFE5B4">Peach</option>
        </select>

        <div className="showhexcode">{bg}</div>
      </div>
    </div>
  );
}
export default Third;
