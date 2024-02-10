import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import { CardProvider, useCards } from "./context/cardsContext";
import Cards from "./pages/Cards";
import CardDetail from "./pages/CardDetail";
import Collection from "./pages/Collection";
import CollectionDetail from "./pages/CollectionDetail";

export default function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/cards/:id" element={<CardDetail />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<CollectionDetail />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}

// add click event to cards
// get id of clicked and store it in a state
