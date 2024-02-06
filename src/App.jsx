import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import { CardProvider } from "./context/cardsContext";
import Cards from "./pages/Cards";

export default function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}
