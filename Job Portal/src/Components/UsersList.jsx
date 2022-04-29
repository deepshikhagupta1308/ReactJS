import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users List</h1>
      <button>Accepted</button>
      <button>Rejected</button>
      {users.map((obj) => {
        console.log("userid", obj.id);
        localStorage.setItem("userlist", JSON.stringify(users));
        return (
          <>
            <div>
              <Link to="/details/${obj.id}">{obj.name}</Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Users;
