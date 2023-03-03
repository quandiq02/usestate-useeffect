import React, { useState } from "react";
import "./ninth.css";
function Ninth() {
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(1);
  const addTodo = (event) => {
    event.preventDefault();
    let todoInput = event.target.todoInput.value;
    setTodoList([...todoList, todoInput]);
    event.target.todoInput.value = "";
    setCounter(counter + 1);
  };
  function deleteItem(e) {
    const target = e.target;
    const index = target.getAttribute("data-itemid");
    todoList.splice(index, 1);
    setTodoList([...todoList, todoList]);
    target.parentElement.remove();
    setCounter(counter - 1);
  }
  return (
    <div className="ninth">
      <div className="ninth__wrapper">
        <div className="ninth__title">MY TO DO LIST</div>
        <form onSubmit={addTodo}>
          <input type="text" name="todoInput" className="ninth__input" />
          <button className="ninth__btn">Add #{counter}</button>
        </form>
        {todoList.map((todo, index) => (
          <div key={index} className="todo" data-itemid={index}>
            {todo}
            <button
              className="delete-task__btn"
              data-itemid={index}
              onClick={deleteItem}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ninth;
