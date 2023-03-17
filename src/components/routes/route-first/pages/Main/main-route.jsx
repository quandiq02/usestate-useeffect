import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Peter from "../User/Peter/peter";
import User from "../User/user";
import Vasya from "../User/Vasya/vasya";
import Main from "./main-menu";
import "./main-route.css"
function RouteFirst() {
  return (
    <div className="router-first__wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/users" element={<User />} />
          <Route exact path="/users/peter" element={<Peter />} />
          <Route exact path="/users/vasya" element={<Vasya />} />
        </Routes>
      </Router>
    </div>
  );
}
export default RouteFirst;
