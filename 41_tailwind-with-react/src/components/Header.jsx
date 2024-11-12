import React from "react";
import viteLogo from "/vite.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-md md:px-8">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex items-center gap-4">
        <li className="listyle">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Home
          </NavLink>
        </li>
        <li className="listyle">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            About
          </NavLink>
        </li>
        <li className="listyle">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
