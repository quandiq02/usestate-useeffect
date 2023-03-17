import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./simpson-route.css";
import SimpsonMain from "./simpson-main";
import SimpsonCharacter from "./simpson-character";
import Marge from "../Characters/Marge";
import Homer from "../Characters/Homer";
import Bart from "../Characters/Bart";
import Lisa from "../Characters/Lisa";
import SimpsonEpisode from "./simpson-episodes";
function RouteSecond() {
  return (
    <div className="simpson__wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<SimpsonMain />} />
          <Route exact path="/characters" element={<SimpsonCharacter />} />
          <Route exact path="/episodes" element={<SimpsonEpisode />} />
          <Route exact path="/characters/0" element={<Homer />} />
          <Route exact path="/characters/1" element={<Marge />} />
          <Route exact path="/characters/2" element={<Bart />} />
          <Route exact path="/characters/3" element={<Lisa />} />
          <Route exact path="/characters/4" element={<Homer />} />
          <Route exact path="/characters/5" element={<Homer />} />
          <Route exact path="/characters/6" element={<Homer />} />
          <Route exact path="/characters/7" element={<Homer />} />
          <Route exact path="/characters/8" element={<Homer />} />
        </Routes>
      </Router>
    </div>
  );
}
export default RouteSecond;
