import { useState, useCallback } from "react";
import Input from "./Input";
const UseCallBack = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const _handleInputChange = useCallback((e) => {
    console.log(e.target.value, counter, counter2);
  }, []);
  return (
    <>
      <h4>Counter1:{counter}</h4>
      <h4>Counter2:{counter2}</h4>
      <Input onChange={_handleInputChange} />
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        IncreaseCounter2
      </button>
    </>
  );
};

export default UseCallBack;
