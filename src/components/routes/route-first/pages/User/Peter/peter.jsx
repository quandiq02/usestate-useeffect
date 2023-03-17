import { Link } from "react-router-dom";

function Peter() {
  return (
    <div>
      <Link to="/">Home &gt;</Link>
      <Link to="/users">Users &gt;</Link>
      <Link to="/users/peter">Peter </Link>
    </div>
  );
}
export default Peter;
