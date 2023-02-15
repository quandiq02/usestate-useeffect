import React, { useState } from "react";
import { useEffect } from "react";
import "./fifth.css";

function Fifth() {
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    }, 0);
  }, []);
  return (
    <div className="fifth">
      <div className="fifth__wrapper">
        Current time is:
        <div className="fifth__time">{hours}:{minutes}:{seconds}</div>
      </div>
    </div>
  );
}

export default Fifth;
