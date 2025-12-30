import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../LOGO/NavLogob.png";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const user = localStorage.getItem("");
  const toggleMenu = () => {
    setShow(!show);
  };
  const setUser = () => {
    localStorage.removeItem("user");
  };
  return (
    <nav className="navWrapper">
      <div className="logoname">
        <Link to="/">
          <img className="navLogo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className={show ? "linkWrapper show" : "linkWrapper"}>
        <NavLink to="/">Home</NavLink>
        <NavLink onClick={setUser} to="/login">
          {user ? "Logout" : "Login"}
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="burgerMenu" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
