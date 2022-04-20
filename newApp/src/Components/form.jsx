import React from "react";
import Ind from "./ind";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Deepshikha", city: "Indore", course: "React" };
  }
  render() {
    const { name, city, course } = this.state;
    return (
      <>
        <Ind name="deepshikha" />
        <h3>Form</h3>
        <input
          type={"text"}
          onChange={(e) => this.setState({ name: e.target.value })}
          value={name}
        />
        Name - {name} <br></br>
        <input
          type={"text"}
          onChange={(e) => this.setState({ city: e.target.value })}
          value={city}
        />
        City - {city} <br></br>
        <input
          type={"text"}
          onChange={(e) => this.setState({ course: e.target.value })}
          value={course}
        />
        Course - {course} <br></br>
      </>
    );
  }
}

export default Form;
