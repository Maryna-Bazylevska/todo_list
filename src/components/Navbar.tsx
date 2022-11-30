import React from "react";
import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper pink lighten-1 px1">
        <a href="/" className="brand-logo">
          Todo List
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todo List</NavLink>
          </li>
          <li>
            <NavLink to="/about">Information Page</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
