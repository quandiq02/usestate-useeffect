import { Link } from "react-router-dom";

function SimpsonEpisode() {
  return (
    <div className="simpsonChar simpsonMain">
      <div className="simpsonChar__wrapper simpsonMain__wrapper">
            <Link className="simpsonChar__link" to="/">&larr;Back</Link>
        <div className="simpsonCharacter__title simpsonMain__title">
          Episodes
        </div>
        <ul className="simpsonsCharacter__list simpsonMain__list">
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/0">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/1">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/2">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/3">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/4">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/5">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/6">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/7">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/8">Lorem ipsum dolor sit.</Link>
            <span>&gt;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SimpsonEpisode;
