import Fifth from "./components/fifth-task/fifth";
import First from "./components/first-task/First";
import Forth from "./components/forth-task/forth";
import Second from "./components/second-task/Second";
import Third from "./components/third-task/Third";

function App() {
  return (
    <div className="body-wrapper">
      <First />
      <Second/>
      <Third/>
      <Forth/>
      <Fifth/>
    </div>
  );
}

export default App;
