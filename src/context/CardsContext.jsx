/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { API_URL } from "../config";

const CardsContext = createContext();
const initialData = JSON.parse(localStorage.getItem("cards"));
const initialCollectionData = JSON.parse(localStorage.getItem("collection"));

// INITIAL STATE DATA
const initialState = {
  isLoading: false,
  searchWord: "",
  cards: initialData ? initialData : [],
  selectedCard: [],
  collection: initialCollectionData ? initialCollectionData : [],
};

const reducer = function (state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "finished":
      return { ...state, isLoading: false };
    case "searchWord":
      return { ...state, searchWord: action.payload };
    case "fetchCards":
      return { ...state, cards: action.payload };
    case "setSelectedCard":
      return { ...state, selectedCard: action.payload };
    case "addCardToCollection":
      return { ...state, collection: action.payload };
    case "removeCardFromCollection": {
      return { ...state, collection: action.payload };
    }
    // default:
    //   throw new Error("Action type not found");
  }
};

function CardProvider({ children }) {
  // useReducer
  const [{ isLoading, searchWord, cards, selectedCard, collection }, dispatch] =
    useReducer(reducer, initialState);

  console.log(collection);
  localStorage.setItem("collection", JSON.stringify(collection));

  // state
  // const [searchWord, setSearchWord] = useState("");
  // const [cards, setCards] = useState();
  // const [selectedCard, setSelectedCard] = useState([]);
  // const [collection, setCollection] = useState(
  //   initialCollectionData ? initialCollectionData : []
  // );
  // const [loading, setLoading] = useState(false);

  // on load get all cards and store them locally
  useEffect(() => {
    async function fetchCards() {
      try {
        dispatch({ type: "loading" });
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
        dispatch({
          type: "fetchCards",
          payload: JSON.parse(localStorage.getItem("cards")),
        });

        dispatch({ type: "finished" });
      } catch (error) {
        console.error(error);
      }
    }

    fetchCards();
  }, [searchWord]);

  const values = {
    isLoading,
    searchWord,
    cards,
    selectedCard,
    collection,
    dispatch,
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
