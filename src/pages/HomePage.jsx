import React from "react";
import PageNav from "../components/PageNav";
import yugioh from "../assets/yugioh.png";
import styles from "./Homepage.module.css";

export default function HomePage() {
  return (
    <div>
      <PageNav />

      <div className={styles.landingContainer}>
        <img src={yugioh} alt="" />
        <div>
          <span>Search</span>
          <span>Collect</span>
          <span>Win</span>
        </div>
      </div>
    </div>
  );
}
