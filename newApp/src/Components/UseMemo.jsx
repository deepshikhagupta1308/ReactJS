import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    console.log("UseEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((response) => setApiResponse(response));
  }, []);

  const _value = useMemo(() => {
    console.log("useMemo");
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

  //   const userCounter = useMemo(async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const parsedResponse = (await response).json();
  //     return parsedResponse;
  //   }, []);

  //   console.log("Render", userCounter);
  console.log(_value);
  return (
    <>
      {_value.map((obj) => {
        return (
          <>
            <h1>{obj.name}</h1>
          </>
        );
      })}
    </>
  );
};

export default UseMemo;
