import { useReducer } from "react";
import "./reset.css";

function reducer(state, action) {
  switch (action.type) {
    case "kill-color":
      return state.map((elem) =>
        elem.id === action.index ? { ...elem, isKilled: !elem.isKilled } : elem
      );
    case "reset-all":
      return state.map((elem) => ({ ...elem, isKilled: false }));
    default:
      throw new Error();
  }
}
const Reset = () => {
  const [state, dispatch] = useReducer(reducer, [
    { value: "Red", isKilled: false, id: 0 },
    { value: "Blue", isKilled: false, id: 1 },
    { value: "Purple", isKilled: false, id: 2 },
    { value: "Green", isKilled: false, id: 3 },
    { value: "White", isKilled: false, id: 4 },
    { value: "Pink", isKilled: false, id: 5 },
    { value: "Orange", isKilled: false, id: 6 },
  ]);
  return (
    <div className="reset">
      <div className="reset__wrapper">
        <div className="reset__block">
          {state.map((e, index) => (
            <div className="reset__items">
              <div
                className="reset__items-elem"
                style={{ textDecoration: e.isKilled ? "line-through" : "none" }}
              >
                {e.value}
              </div>
              <button
                className="reset__kill-btn"
                key={index}
                onClick={() => dispatch({ type: "kill-color", index })}
              >
                {e.isKilled ? "Revive" : "Kill"}
              </button>
            </div>
          ))}
        </div>
        <button className="reset__all-btn"
        onClick={()=>dispatch({type:"reset-all"})}>Reset</button>
      </div>
    </div>
  );
};

export default Reset;
