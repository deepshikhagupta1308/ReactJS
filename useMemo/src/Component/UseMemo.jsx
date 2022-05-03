import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    //console.log("UseEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((response) => setApiResponse(response));
  }, []);

  const _value = useMemo(() => {
    //console.log("useMemo");
    const users = apiResponse.reduce((acc, item) => {
      const user = {
        name: item.name,
        userName: item.username,
        city: item.address.city,
      };

      acc.push(user);
      return acc;
    }, []);
    return users;
  }, [apiResponse]);

  //console.log(_value);
  return (
    <>
      {_value.map((obj) => {
        return (
          <>
            <h3>Name: {obj.name}</h3>
            <h3>User Name: {obj.username}</h3>
            <h3>Email: {obj.email}</h3>
            <h3>City: {obj.address.city}</h3>
          </>
        );
      })}
    </>
  );
};

export default UseMemo;
