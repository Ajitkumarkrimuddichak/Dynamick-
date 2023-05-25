import React, { useState } from "react";

const SoutcoutMultipleLoginFome = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;
    setFullName((PreValue) => {
      return {
        ...PreValue,
        [name]: value,
      };
      //console.log(PreValue);
      //   if (name === "fname") {
      //     return {
      //       fname: value,
      //       lname: PreValue.lname,
      //       email: PreValue.email,
      //       phone: PreValue.phone,
      //     };
      //   } else if (name === "lname") {
      //     return {
      //       fname: PreValue.fname,
      //       lname: value,
      //       email: PreValue.email,
      //       phone: PreValue.phone,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fname: PreValue.fname,
      //       lname: PreValue.lname,
      //       email: value,
      //       phone: PreValue.phone,
      //     };
      //   } else if (name === "phone") {
      //     return {
      //       fname: PreValue.fname,
      //       lname: PreValue.lname,
      //       email: PreValue.email,
      //       phone: value,
      //     };
      //   }
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
              Hello Ajit {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
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
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <br />
            <input
              type="Number"
              placeholder="Enter Your Phone"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <br />
            <button type="submit">Submit Me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SoutcoutMultipleLoginFome;
