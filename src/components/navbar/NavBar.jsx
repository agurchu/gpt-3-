import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/kj_dev_logo.png";

const NavBar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="got3__navbar-links">
        <div className="gpt3__navbar__-lonks_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
