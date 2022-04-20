import { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { input1: "", input2: "", result: "" };
  }

  _handleInputChange = (e) => {
    //console.log(e.target.name);
    const { name, value } = e.target;
    //console.log(name, value);
    this.setState({ [name]: Number(value) });
  };

  _handleAirthmeticOperation = (e) => {
    let result1 = 0;
    const { input1, input2 } = this.state;
    if (e.target.name == "add") {
      result1 = input1 + input2;
    } else if (e.target.name == "sub") {
      result1 = input1 - input2;
    } else if (e.target.name == "mul") {
      result1 = input1 * input2;
    } else if (e.target.name == "divd") {
      result1 = input1 / input2;
    } else if (e.target.name == "mod") {
      result1 = input1 % input2;
    }
    this.setState({ result: result1 });
  };

  render() {
    const { input1, input2, result } = this.state;
    return (
      <>
        <h3>Calculator</h3>
        <input
          onChange={this._handleInputChange}
          type={"number"}
          name="input1"
          value={input1}
        />
        <input
          onChange={this._handleInputChange}
          type={"number"}
          value={input2}
          name="input2"
        />
        <button name="add" onClick={this._handleAirthmeticOperation}>
          +
        </button>
        <button name="sub" onClick={this._handleAirthmeticOperation}>
          -
        </button>
        <button name="mul" onClick={this._handleAirthmeticOperation}>
          *
        </button>
        <button name="divd" onClick={this._handleAirthmeticOperation}>
          /
        </button>
        <button name="mod" onClick={this._handleAirthmeticOperation}>
          %
        </button>
        <button name="clear" onClick={this._handleAirthmeticOperation}>
          CLR
        </button>
        Result - {result}
      </>
    );
  }
}

export default Calculator;
