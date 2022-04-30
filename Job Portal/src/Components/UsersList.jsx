import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userlist = JSON.parse(localStorage.getItem("userlist"));
    if (userlist !== null) {
      setUsers(userlist);
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        localStorage.setItem("userlist", JSON.stringify(data));
      });
  }, []);

  return (
    <>
      <h1>Users List</h1>
      <Link to="/accepted">
        <button>Accepted</button>
      </Link>
      <Link to="/rejected">
        <button>Rejected</button>
      </Link>
      {users.map((newObj) => {
        // localStorage.setItem("userlist", JSON.stringify(users));
        return (
          <div key={newObj.id}>
            <Link to={`/details/${newObj.id}`}>{newObj.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Users;
