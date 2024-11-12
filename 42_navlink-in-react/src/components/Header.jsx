import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import SinghIn from "./SinghIn";
import { createPortal } from "react-dom";

export default function Header() {
  const [showModel, setShowModel] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-md md:px-8">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex items-center justify-between gap-4 font-semibold">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li
          onClick={() => setShowModel(true)}
          className="cursor-pointer rounded bg-blue-400 px-1 py-[2px]  font-semibold text-white"
        >
          Sign In
        </li>
        {showModel && createPortal(
          <SinghIn setShowModel={setShowModel} />, document.body
        )}
      </ul>
    </header>
  );
}
