import { useState } from "react";

const Formfunc = () => {
  const [details, setDetails] = useState({
    fname: "Deepshikha",
    lname: "Gupta",
    city: "Indore",
    email: "deepshikha.gupta@gmail.com",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <>
      <input
        type="text"
        value={details.fname}
        onChange={handleChange}
        placeholder="Enter a FirstName"
        name="fname"
      />
      First Name - {details.fname}
      <br></br>
      <input
        type="text"
        value={details.lname}
        onChange={handleChange}
        placeholder="Enter a Last"
        name="lname"
      />
      Last Name - {details.lname}
      <br></br>
      <input
        type="text"
        value={details.city}
        onChange={handleChange}
        placeholder="Enter a LastName"
        name="city"
      />
      City - {details.city}
      <br></br>
      <input
        type="text"
        value={details.email}
        onChange={handleChange}
        placeholder="Enter a LastName"
        name="city"
      />
      Email - {details.email}
      <br></br>
    </>
  );
};

export default Formfunc;
