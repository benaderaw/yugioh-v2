import React from "react";
import styles from "./logo.module.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1>myYugioh-v2</h1>
    </Link>
  );
}
