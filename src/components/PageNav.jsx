import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import styles from "./PageNav.module.css";
import Search from "./Search";

export default function PageNav() {
  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <Search />
      <NavLinks />
    </div>
  );
}
