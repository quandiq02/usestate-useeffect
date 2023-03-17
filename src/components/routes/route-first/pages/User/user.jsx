import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      <Link to="/">Home &gt;</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}
export default User;
