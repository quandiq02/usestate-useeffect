import { Link } from "react-router-dom";

function Vasya() {
  return (
    <div>
      <Link to="/">Home &gt;</Link>
      <Link to="/users">Users &gt;</Link>
      <Link to="/users/vasya">Vasya</Link>
    </div>
  );
}
export default Vasya;
