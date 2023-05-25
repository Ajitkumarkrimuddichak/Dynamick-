import React from "react";
import { NavLink } from "react-router-dom";

const Menue = () => {
  return (
    <>
      <NavLink exact activeClassName="active-class" to="/">
        About
      </NavLink>
      <NavLink exact activeClassName="active-class" to="/Contact">
        Contact Us
      </NavLink>
      <br />
      <a href="/">About Us</a>
      <a href="Contact">Contact</a>
    </>
  );
};

export default Menue;
