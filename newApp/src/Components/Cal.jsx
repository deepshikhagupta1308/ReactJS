import { useState } from "react";

const Cal = () => {
  const [num, setNum] = useState({
    input1: "",
    input2: "",
    result: "",
  });

  const _handleInputChange = (e) => {
    const { name, value } = e.target;
    setNum({ ...num, [name]: Number(value) });
  };

  const _handleAirthmeticOperation = (ev) => {
    let result1 = 0;
    if (ev.target.name == "add") {
      result1 = num.input1 + num.input2;
    } else if (ev.target.name == "sub") {
      result1 = num.input1 - num.input2;
    } else if (ev.target.name == "mul") {
      result1 = num.input1 * num.input2;
    } else if (ev.target.name == "div") {
      result1 = num.input1 / num.input2;
    } else if (ev.target.name == "mod") {
      result1 = num.input1 % num.input2;
    }
    setNum({ result: result1 });
  };

  return (
    <>
      <h3>Calculator Using Functional Component</h3>
      <input
        type="number"
        onChange={_handleInputChange}
        name="input1"
        value={num.input1}
      />
      <input
        type="number"
        onChange={_handleInputChange}
        name="input2"
        value={num.input2}
      />
      <br></br>
      <button onClick={_handleAirthmeticOperation} name="add">
        +
      </button>
      <br></br>
      <button onClick={_handleAirthmeticOperation} name="sub">
        -
      </button>
      <br></br>
      <button onClick={_handleAirthmeticOperation} name="mul">
        *
      </button>
      <br></br>
      <button onClick={_handleAirthmeticOperation} name="div">
        /
      </button>
      <br></br>
      <button onClick={_handleAirthmeticOperation} name="mod">
        %
      </button>
      <br></br>
      <input readOnly type="text" value={num.result} />
    </>
  );
};
export default Cal;
