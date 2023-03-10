import "./todo.css";
import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
      };
    case "delete-todo":
      return {
        todos: state.todos.filter((t, idx) => idx != action.idx),
      };
    default:
      throw new Error();
  }
}
const ToDoApp = () => {
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [],
  });
  const [text, setText] = useState();
  return (
    <div className="todo">
      <div className="todo__wrapper">
        <form
          className="todo__form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "add-todo", text });
            setText("");
          }}
        >
          <input
            type="text"
            className="todo__input"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter your task..."
          />
          <button
            className="todo__add-btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "add-todo", text });
              setText("");
            }}
          >
            ADD
          </button>
        </form>
        <div className="todo__block">
        {todos.map((t, idx) => (
          <div className="todo__items">
            <div
              key={idx}
              onClick={() => dispatch({ type: "toggle-todo", idx })}
              style={{ textDecoration: t.completed ? "line-through" : "none" }}
            >
              {t.text}
            </div>
            <button
              className="todo__delete-btn"
              key={idx}
              onClick={() => dispatch({ type: "delete-todo", idx })}
            >
              Remove
            </button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
export default ToDoApp;
