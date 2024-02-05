import React, { useContext, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { CardsContext, useCards } from "../context/cardsContext";

// GET ALL CARDS
// https://db.ygoprodeck.com/api/v7/cardinfo.php

// GET CARDS THAT INCLUDE A WORD
// https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician

export default function Search() {
  // const con = useCards();
  // console.log(con);

  const { setSearchWord, cards } = useContext(CardsContext);

  // state
  const [query, setQuery] = useState("");

  // onChange - handle search input
  function handleInput(e) {
    setQuery(e.target.value);
  }

  // onSubmit - handel search submit
  function handleSearchSubmit(e) {
    e.preventDefault();

    setSearchWord(query.trim());
    setQuery("");
  }

  console.log(cards);

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className={styles.input}
          value={query}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
