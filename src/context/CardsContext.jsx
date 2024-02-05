/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../config";

const CardsContext = createContext();

function CardProvider({ children }) {
  // state
  const [searchWord, setSearchWord] = useState("");
  const [cards, setCards] = useState([]);

  // on load get all cards and store them locally
  useEffect(() => {
    async function fetchCards() {
      try {
        // check if search word has been submitted
        if (searchWord === "") return;

        // fetch api
        const res = await fetch(`${API_URL}?fname=${searchWord}`);

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

  const values = {
    searchWord,
    setSearchWord,
    cards,
    setCards,
  };

  return (
    <CardsContext.Provider value={values}>{children}</CardsContext.Provider>
  );
}

// hook
function useCards() {
  const context = useContext(CardsContext);

  if (context === undefined)
    throw new Error("Cards context used outside 'CardProvider");

  return context;
}

export { CardProvider, CardsContext, useCards };
