import Card from "./components/Others/card/card";
import Disconnect from "./components/Others/disconnect/disconnet";
import Modal from "./components/Others/Modal/modal";
import RouteFirst from "./components/routes/route-first/pages/Main/main-route";
import RouteSecond from "./components/routes/route-second/pages/Sympsons/sympson-route";
import Car from "./components/useReducer/car/car";
import Counter from "./components/useReducer/counter/counter";
import Reset from "./components/useReducer/reset/reset";
import TodoList from "./components/useReducer/todo/todo";

function App() {
  return (
    <div className="body-wrapper">
      {/* <Counter />
      <TodoList />
      <Reset />
      <Modal />
      <Car/> */}
      <Card />
      <Disconnect />
      <RouteFirst />
      <RouteSecond />
    </div>
  );
}

export default App;
