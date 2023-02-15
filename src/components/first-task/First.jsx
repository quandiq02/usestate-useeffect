import React, { useState } from "react";
import './first.css'
function First() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(13);
  const [name, setName] = useState("Guy");
  const counter = () => {
    setCount(count + 1);
  };
  const generateRandNum = () => {
    setRandom(Math.floor(Math.random() * 100));
  };
  const changeName = () => {
    setName(name + "y");
    counter();
  };
  return (
    <div className="first">
      <div className="first__wrapper">
        <div className="first__text">Welcome cool {name}</div>
        <div className="first__number">Your lucky number is {random}</div>
        <div className="first__click">Name has changed {count} times</div>
        <button className="first__btn-change" onClick={changeName}>
          Change Name
        </button>
        <button className="first__btn-get" onClick={generateRandNum}>
          get the lucky number!
        </button>
      </div>

      {/* <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button> */}
    </div>
  );
}
export default First;
