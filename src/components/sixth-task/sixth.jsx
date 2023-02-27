import { useState, useEffect } from "react";
import "./sixth.css";

function Sixth() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((json) => setUser(json.results[0]))
      .catch((error) => setError(error.message))
      .finally(() => setPending(false));
  }, []);

  if (error) {
    return console.error(error);
  } else {
    return (
      <div className="sixth">
        <div className="sixth_wrapper">
          {pending ? (
            <div>pending</div>
          ) : (
            <div className="sixth_img">
              <img src={user.picture.large} alt="img" />
              <p>Customer data</p>
              <p>Name: {user.name.first}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Sixth;
