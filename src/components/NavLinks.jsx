import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

export default function NavLinks() {
  return (
    <div className="navLinks">
      <ul>
        <li>
          <NavLink to="collection">Collection</NavLink>
        </li>
      </ul>
    </div>
  );
}
