import React, { useState } from "react";
import "./14.css";

function Fourteen() {
  let [item, setItem] = useState([
    { id: 0, isDelivered: false },
    { id: 1, isDelivered: false },
    { id: 2, isDelivered: false },
  ]);
  const [count, setCount] = useState(0);
  function handlerDeliver() {
    if (count < item.length) {
      if (item[count].id == count) {
        setCount((item[count].isDelivered = true));
        setCount(count + 1);
      }
    }
  }
  return (
    <div className="fourteen">
      <div className="fourteen__wrapper">
        {item.map((elem, index) => (
          <div className="fourteen__elem" key={index}>
            {elem.isDelivered ? "Delivered" : "Inprogress"}
          </div>
        ))}
        <button onClick={handlerDeliver}>Submit</button>
      </div>
    </div>
  );
}
export default Fourteen;
