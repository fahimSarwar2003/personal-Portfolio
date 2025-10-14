import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("black"); // default theme

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Apply theme to body
  useEffect(() => {
    document.body.style.backgroundColor = theme;
    document.body.style.color = "white"; // text white
  }, [theme]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to={"/"}>
        <div className="logo">Faheem Sarwar</div>
      </Link>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink onClick={handleLinkClick} className={({ isActive }) => (isActive ? "red" : "")} to="/">
          Home
        </NavLink>
        <NavLink onClick={handleLinkClick} className={({ isActive }) => (isActive ? "red" : "")} to="/about">
          About
        </NavLink>
        <NavLink onClick={handleLinkClick} className={({ isActive }) => (isActive ? "red" : "")} to="/projects">
          Projects
        </NavLink>
        <NavLink onClick={handleLinkClick} className={({ isActive }) => (isActive ? "red" : "")} to="/services">
          Services
        </NavLink>
        <NavLink onClick={handleLinkClick} className={({ isActive }) => (isActive ? "red" : "")} to="/contact">
          Contact
        </NavLink>

        {/* Theme Selector */}
        <select className="theme-select" onChange={(e) => setTheme(e.target.value)}>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="white">White</option>
        </select>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
