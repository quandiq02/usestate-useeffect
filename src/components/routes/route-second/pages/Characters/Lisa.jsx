import { Link } from "react-router-dom";

function Lisa() {
  return (
    <div className="character">
      <div className="character__wrapper">
        <Link className="simpsonChar__link" to="/characters">
          &larr;Back
        </Link>
        <div className="character__title">Character</div>
        <ul className="character__list">
          <li className="character__name">Lisa Simpson</li>
          <li className="character__bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            iste ipsa quod est, ratione enim debitis consectetur eveniet itaque
            numquam.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Lisa;
