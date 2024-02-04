import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="navLinks">
      <ul>
        <NavLink to="collection">collection</NavLink>
      </ul>
    </div>
  );
}
