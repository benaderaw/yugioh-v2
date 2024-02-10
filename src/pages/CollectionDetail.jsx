import React from "react";
import { useCards } from "../context/cardsContext";
import DetailsDisplay from "../components/DetailsDisplay";

export default function CollectionDetail() {
  const { collection } = useCards();

  console.log(999);

  return <DetailsDisplay array={collection} />;
}
