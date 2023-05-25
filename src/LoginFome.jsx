import React, { useState } from "react";

const LoginFome = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(" ");
  const [lastNamenew, setLastNameNew] = useState("");

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <div className="main-div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName}
              {lastNamenew}
            </h1>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={inputEvent}
              value={name}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your Last name"
              onChange={inputEventTwo}
              value={lastName}
            />
            <br />
            <button type="submit">Submit Me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginFome;
