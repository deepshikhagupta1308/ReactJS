import { useState } from "react";

const Register = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // Validation variables
  const [errFname, setErrFname] = useState("");
  const [errLname, setErrLname] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errConfirm, setErrConfirm] = useState("");

  const submitData = () => {
    if (!isNaN(fname)) {
      setErrFname("Enter first name");
    } else {
      setErrFname("");
    }
    if (!isNaN(lname)) {
      setErrLname("Enter last name");
    } else {
      setErrLname("");
    }
    if (!isNaN(email)) {
      setErrEmail("Choose a Gmail address");
    } else {
      setErrEmail("");
    }
    if (confirm == "") {
      setErrConfirm("Confirm Your Password");
    } else {
      setErrConfirm("");
    }
    if (password.length < 8) {
      setErrPassword("Use 8 character or more for your password");
    } else {
      setErrPassword("");
    }
  };
  return (
    <>
      <div>
        <h1>Create your Google Account</h1>
        <div>
          <div>
            <input
              type="text"
              value={fname}
              name="fname"
              onChange={(e) => setFname(e.target.value)}
              placeholder="First Name"
            />
            <br></br>
            <span style={{ color: props.color }}>{errFname}</span>
            <input
              type="text"
              onChange={(e) => setLname(e.target.value)}
              placeholder="Last Name"
            />
            <br></br>
            <span style={{ color: props.color }}>{errLname}</span>
          </div>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
          />
          <br></br>
          <span style={{ color: props.color }}>{errEmail}</span>
        </div>
        <div>
          <div>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br></br>
            <span style={{ color: props.color }}>{errPassword}</span>
            <input
              type="text"
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirm"
            />
            <br></br>
            <span style={{ color: props.color }}>{errConfirm}</span>
          </div>
        </div>
        <div>
          <button onClick={submitData}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Register;
