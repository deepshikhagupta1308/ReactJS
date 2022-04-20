import React from "react";

class Ind extends React.Component {
  constructor() {
    super();
    console.log(this.props);
    this.state = { name: "Deepshikha", city: "Indore", course: "React" };
  }
  render() {
    console.log(this.props);
    return <h3>Form</h3>;
  }
}

export default Ind;
