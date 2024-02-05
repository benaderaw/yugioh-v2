import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import { CardProvider } from "./context/cardsContext";

export default function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}
