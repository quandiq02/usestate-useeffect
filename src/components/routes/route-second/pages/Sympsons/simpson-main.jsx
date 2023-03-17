import { Link } from "react-router-dom";

function SimpsonMain() {
  return (
    <div className="simpsonMain">
      <div className="simpsonMain__wrapper">
        <div className="simpsonMain__title">The Simpsons</div>
        <ul className="simpsonMain__list">
          <li>
            <Link className="simpsonMain__link" to="/characters">Characters</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link" to="/episodes">Episodes</Link>
            <span>&gt;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SimpsonMain;
