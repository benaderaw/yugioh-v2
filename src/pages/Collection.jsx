import React from "react";
import PageNav from "../components/PageNav";
import styles from "./collection.module.css";
import { useCards } from "../context/cardsContext";
import Card from "../components/Card";

export default function Collection() {
  const { collection } = useCards();

  return (
    <div>
      <PageNav />

      <section className={styles.collectionContainer}>
        <h1>Collections</h1>

        <div className={styles.collectionGrid}>
          {collection.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}
