import React, { useCallback } from "react";
import PageNav from "../components/PageNav";
import { useCards } from "../context/cardsContext";
import styles from "./CardDetail.module.css";
import { useParams } from "react-router-dom";

export default function CardDetail() {
  const { cards, selectedCard } = useCards();
  const { id } = useParams();

  //   if (selectedCard.length === 0) {
  //     return (
  //       <div>
  //         <PageNav />
  //       </div>
  //     );
  //   }

  console.log(cards);

  const cardSelected = cards.filter((card) => {
    return card.id === Number(id);
  });

  const selected = cardSelected.at(0);

  console.log(selected);

  return (
    <div>
      <PageNav />

      <section className={styles.detailContainer}>
        <div className={styles.path}>
          <span>Home / </span>
          <span> Cards / </span>
          <span> {selected?.name}</span>
        </div>

        <div className={styles.detailsBox}>
          <div>
            <img
              src={selected?.card_images.at(0).image_url}
              alt={selected?.name}
            />
          </div>

          <div className={styles.ccc}>
            <h1>{selected?.name}</h1>

            <div className={styles.detailInfo}>
              <div className={styles.detail}>
                <div>Type</div>
                <div>{selected?.type} </div>
              </div>

              <div className={styles.detail}>
                <div>Attribute</div>
                <div>{selected?.attribute} </div>
              </div>

              <div className={styles.detail}>
                <div>Race</div>
                <div>{selected?.race} </div>
              </div>

              <div className={styles.detail}>
                <div>Level</div>
                <div>{selected?.level} </div>
              </div>

              <div className={styles.detail}>
                <div>Attack</div>
                <div>{selected?.atk} </div>
              </div>

              <div className={styles.detail}>
                <div>Defense</div>
                <div>{selected?.def} </div>
              </div>
            </div>

            <div className={styles.cardText}>
              <h2>Card Text</h2>
              <p>{selected?.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
