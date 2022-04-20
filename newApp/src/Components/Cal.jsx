import { useState } from "react";

const Cal = (props) => {
  const [num, setNum] = useState({
    input1: "",
    input2: "",
    result: "",
  });

  const _handleInputChange = (e) => {
    const { name, value } = e.target;
    setNum({ [name]: Number(value) });
  };

  const _handleAirthmeticOperation = (ev) => {
    console.log(num.input1);
    console.log(num.input2);
  };

  return (
    <>
      <h3>Calculator Using Functional Component</h3>
      <input
        type="text"
        onChange={_handleInputChange}
        name="input1"
        valaue={num.input1}
      />
      <input
        type="text"
        onChange={_handleInputChange}
        name="input2"
        value={num.input2}
      />
      <br></br>
      <button onClick={_handleAirthmeticOperation} name="add">
        +
      </button>
      <br></br>
      <input readOnly type="text" value={num.result} />
    </>
  );
};
export default Cal;
