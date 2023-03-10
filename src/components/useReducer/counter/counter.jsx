import { useReducer, useState } from "react";
import "./counter.css";
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggle, setToggle] = useState(true);
  return (
    <div className="counter">
      <div className="counter__wrapper">
        <button
          className="counter__btn-hide"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle hidden
        </button>
        {toggle && (
          <div className="counter__calc">
            <button
              className="counter__btn-plus"
              onClick={() => dispatch({ type: "increment" })}
            >
              Increment
            </button>
            <div className="counter__value">{state.count}</div>
            <button
              className="counter__btn-minus"
              onClick={() => dispatch({ type: "decrement" })}
            >
              Decrement
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Counter;
