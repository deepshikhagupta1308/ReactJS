import React, { memo } from "react";
import ChildComp from "./ChildComp";

const Input = (props) => {
  //const [input , setInput] = useState();
  console.log("Render Input");
  return (
    <>
      <ChildComp />
      <ChildComp />
      <ChildComp />
      <ChildComp />
      <ChildComp />

      <input type="text" onChange={props.onChange} />
    </>
  );
};
export default memo(Input);
