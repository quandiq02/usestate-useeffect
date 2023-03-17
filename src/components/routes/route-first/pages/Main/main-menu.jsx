import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="router-first__wrapper">
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>

            <ul>
              <li>
                <Link to="/users/peter">Peter</Link>
              </li>
              <li>
                <Link to="/users/vasya">Vasya</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Main;
