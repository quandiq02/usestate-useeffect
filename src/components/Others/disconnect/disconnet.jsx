import { useReducer } from "react";
import "./disconnect.css";

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "connect":
      return { ...state, status: !state.status, isLoading: false };
    default:
      throw new Error();
  }
}

function Disconnect() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    status: false,
  });

  const changeStatus = () => {
    dispatch({ type: "loading" });
    setTimeout(() => {
      dispatch({ type: "connect" });
    }, 2000);
  };

  return (
    <div className="disconnect">
      <div className="disconnect__wrapper">
        <h1 className="disconnect__status">
          {state.isLoading
            ? "Connecting"
            : state.status
            ? "Connected"
            : "Disconnected"}
        </h1>
        <button className="disconnect__btn" onClick={changeStatus}>
          {state.status ? "Disconnect" : "Connect"}
        </button>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
export default Disconnect;
