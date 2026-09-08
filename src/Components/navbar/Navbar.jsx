import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../LOGO/burger.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navWrapper">
      <div className="logoname">
        <Link to="/">
          <img className="navLogo" src={logo} alt="logo" />
        </Link>
      </div>
      <div id="primary-navigation" className={show ? "linkWrapper show" : "linkWrapper"}>
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        {user ? (
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="logout-btn"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" onClick={toggleMenu}>
            Login
          </NavLink>
        )}
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
      </div>
      <button
        className="burgerMenu"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={show}
        aria-controls="primary-navigation"
        onClick={toggleMenu}
      >
        {show ? "×" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
