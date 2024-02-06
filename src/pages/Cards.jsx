import React from "react";
import PageNav from "../components/PageNav";
import { useCards } from "../context/cardsContext";
import Card from "../components/Card";
import styles from "./Cards.module.css";

export default function Cards() {
  const { cards, searchWord } = useCards();
  console.log(cards);

  return (
    <>
      <PageNav />

      <section className={styles.cardsContainer}>
        <p>
          Check out all the amazing {cards.length} cards available containing
          the word {searchWord}. Use the filter buttons to filter through over
          cards.
        </p>

        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            //
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>
    </>
  );
}
