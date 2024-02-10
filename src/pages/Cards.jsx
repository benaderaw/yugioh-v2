import React from "react";
import PageNav from "../components/PageNav";
import { useCards } from "../context/cardsContext";
import Card from "../components/Card";
import styles from "./Cards.module.css";
import Loading from "../components/Loading";

export default function Cards() {
  const { cards, searchWord, loading } = useCards();
  console.log(cards);

  if (loading) return <Loading />;

  return (
    <div>
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
    </div>
  );
}
