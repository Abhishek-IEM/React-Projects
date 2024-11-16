import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">Web Dev Mastery</div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <button className="close-drawer" onClick={closeDrawer}>
            {" "}
            <FaTimes /> Close
          </button>
          <li>
            <Link to={"/"} onClick={closeDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={closeDrawer}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/services"} onClick={closeDrawer}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={closeDrawer}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaBars /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
