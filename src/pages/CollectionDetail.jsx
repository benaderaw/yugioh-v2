import React from "react";
import { useCards } from "../context/cardsContext";
import DetailsDisplay from "../components/DetailsDisplay";

export default function CollectionDetail() {
  const { collection } = useCards();

  return <DetailsDisplay array={collection} />;
}
