import { Link } from "react-router-dom";

function SimpsonCharacter() {
  return (
    <div className="simpsonChar simpsonMain">
      <div className="simpsonChar__wrapper simpsonMain__wrapper">
            <Link className="simpsonChar__link" to="/">&larr;Back</Link>
        <div className="simpsonCharacter__title simpsonMain__title">
          Characters
        </div>
        <ul className="simpsonsCharacter__list simpsonMain__list">
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/0">Homer Simpson</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/1">Marge Simpson</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/2">Bart Simpson</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/3">Lisa Simpson</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/4">Maggie Simpson</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/5">Ned Flanders</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/6">Maude Falnders</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/7">Charles Montgomery Burns</Link>
            <span>&gt;</span>
          </li>
          <li>
            <Link className="simpsonMain__link simpsonChar__link" to="/characters/8">Waylon Smithers</Link>
            <span>&gt;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SimpsonCharacter;
