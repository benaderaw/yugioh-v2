/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Card.module.css";
import { useCards } from "../context/cardsContext";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ card }) {
  const { selectedCard, setSelectedCard } = useCards();
  // const navigate = useNavigate();

  function handleCardSelect(e, card) {
    setSelectedCard(card.id);
    // navigate("/card/:id");
  }

  return (
    <div className={styles.cardContainer}>
      <Link to={card.id.toString()}>
        <img
          src={card.card_images.at(0).image_url_small}
          alt={card.name}
          onClick={(e) => handleCardSelect(e, card)}
        />
      </Link>

      {/* <li>{card.name}</li> */}
    </div>
  );
}
