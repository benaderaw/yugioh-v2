import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

// GET ALL CARDS
// https://db.ygoprodeck.com/api/v7/cardinfo.php

// GET CARDS THAT INCLUDE A WORD
// https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician

export default function Search() {
  // state
  const [query, setQuery] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [cards, setCards] = useState([]);

  // on load get all cards and store them locally
  useEffect(() => {
    async function fetchCards() {
      try {
        // check if search word has been submitted
        if (searchWord === "") return;

        // fetch api
        const res = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchWord}`
        );

        // check res
        if (!res.ok) throw new Error("Failed to fetch api");

        // get data
        const { data } = await res.json();

        // store data to local storage
        localStorage.setItem("cards", JSON.stringify(data));

        // set cards state
        setCards(JSON.parse(localStorage.getItem("cards")));
      } catch (error) {
        console.error(error);
      }
    }

    fetchCards();
  }, [setCards, searchWord]);

  console.log(cards);

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
