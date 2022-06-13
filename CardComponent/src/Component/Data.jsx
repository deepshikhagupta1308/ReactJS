import React, { useEffect, useState } from "react";

const Data = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setName(data));
  }, []);
  console.log(name);
  return (
    <>
      {name.map((obj) => {
        return (
          <>
            <h3>{obj.name}</h3>
          </>
        );
      })}
    </>
  );
};

export default Data;
