import Card from "./components/Others/card/card";
import Modal from "./components/Others/Modal/modal";
import Car from "./components/useReducer/car/car";
import Counter from "./components/useReducer/counter/counter";
import Reset from "./components/useReducer/reset/reset";
import TodoList from "./components/useReducer/todo/todo";

function App() {
  return (
    <div className="body-wrapper">
      <Counter />
      <TodoList />
      <Reset />
      <Modal />
      <Car/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
