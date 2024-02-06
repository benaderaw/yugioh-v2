/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Card.module.css";

export default function Card({ card }) {
  return (
    <div className={styles.cardContainer}>
      <img src={card.card_images.at(0).image_url_small} alt={card.name} />
      {/* <li>{card.name}</li> */}
    </div>
  );
}
