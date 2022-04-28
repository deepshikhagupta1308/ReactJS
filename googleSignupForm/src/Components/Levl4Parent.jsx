import { useState } from "react";
import Level4Child from "./Level4Child";

const Level4Parent = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Level4Child />
    </>
  );
};

export default Level4Parent;
