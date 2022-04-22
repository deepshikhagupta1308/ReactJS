import { useState } from "react";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errMessageFname, setErrorMessgaeFname] = useState("");

  const submitData = () => {
    if (fname === "") {
      setErrorMessgaeFname("Please Enter Fname");
      // return;
    }
  };
  return (
    <>
      <div>
        {/* <h3>{errMessage}</h3> */}
        <h1>Create your Google Account</h1>
        <form action="">
          <div>
            <div>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="First Name"
              />
              {errMessageFname}
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div>
            <div>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <input
                type="text"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm"
              />
            </div>
          </div>
          <div>
            <button onClick={submitData}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
