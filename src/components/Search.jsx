import React, { useContext, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { CardsContext, useCards } from "../context/cardsContext";
import { useNavigate } from "react-router-dom";

// GET ALL CARDS
// https://db.ygoprodeck.com/api/v7/cardinfo.php

// GET CARDS THAT INCLUDE A WORD
// https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician

export default function Search() {
  const navigate = useNavigate();

  const { dispatch } = useCards();

  // state
  const [query, setQuery] = useState("");

  // onChange - handle search input
  function handleInput(e) {
    setQuery(e.target.value);
  }

  // onSubmit - handel search submit
  function handleSearchSubmit(e) {
    e.preventDefault();

    if (query === "") return;

    dispatch({ type: "searchWord", payload: query.trim() });
    // setSearchWord(query.trim());
    setQuery("");

    navigate("/cards");
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search a word"
          className={styles.input}
          value={query}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
