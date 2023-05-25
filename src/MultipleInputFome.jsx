import React, { useState } from "react";

const MultipleInputFome = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((PreValue) => {
      //console.log(PreValue);
      if (name === "fname") {
        return {
          fname: value,
          lname: PreValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: PreValue.fname,
          lname: value,
        };
      }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("Fome Submited");
  };

  return (
    <>
      <div className="main-div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <br />
            <button type="submit">Submit Me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MultipleInputFome;
