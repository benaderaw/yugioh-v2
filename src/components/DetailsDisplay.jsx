/* eslint-disable react/prop-types */
import React from "react";
import PageNav from "./PageNav";
import { useCards } from "../context/cardsContext";
import styles from "./DetailsDisplay.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import Details from "./Details";

export default function DetailsDisplay({ array }) {
  const { collection, dispatch } = useCards();
  const { id } = useParams();
  // const navigate = useNavigate();

  const selected = array.filter((card) => {
    return card.id === Number(id);
  })[0];

  // onClick - add to collection
  function handleAddToCollection() {
    dispatch({
      type: "addCardToCollection",
      payload: [...collection, selected],
    });
    // setCollection([...collection, selected]);
  }

  // onClick - remove from collection
  function handleRemoveFromCollection() {
    const newCollection = collection.filter((card) => {
      return card.id !== selected.id;
    });

    dispatch({ type: "removeCardFromCollection", payload: newCollection });
    // setCollection(newCollection);
  }

  console.log(666666);

  // store collection to localStorage
  localStorage.setItem("collection", JSON.stringify(collection));

  // helper function - check if selected card is in collections already
  function isInCollection() {
    return collection.some((card) => card.id === selected.id);
  }

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

            {isInCollection() ? (
              <Link to={"/collection"}>
                <Button
                  onClick={handleRemoveFromCollection}
                  style={styles.removeBtn}
                >
                  Remove From Collection
                </Button>
              </Link>
            ) : (
              <Button onClick={handleAddToCollection} style={styles.addBtn}>
                Add to Collection
              </Button>
            )}
          </div>

          <div className={styles.ccc}>
            <h1>{selected?.name}</h1>

            <div className={styles.detailInfo}>
              {selected?.type && (
                <Details
                  detailType={"Type"}
                  detail={selected?.type}
                  style={styles.detail}
                />
              )}

              {selected?.attribute && (
                <Details
                  detailType={"Attribute"}
                  detail={selected?.attribute}
                  style={styles.detail}
                />
              )}

              {selected?.race && (
                <Details
                  detailType={"Race"}
                  detail={selected?.race}
                  style={styles.detail}
                />
              )}

              {selected?.level && (
                <Details
                  detailType={"Level"}
                  detail={selected?.level}
                  style={styles.detail}
                />
              )}

              {selected?.atk && (
                <Details
                  detailType={"Attack"}
                  detail={selected?.atk}
                  style={styles.detail}
                />
              )}

              {selected?.def && (
                <Details
                  detailType={"Defense"}
                  detail={selected?.def}
                  style={styles.detail}
                />
              )}

              {selected?.attribute && (
                <Details
                  detailType={"Attribute"}
                  detail={selected?.attribute}
                  style={styles.detail}
                />
              )}

              {selected?.archetype && (
                <Details
                  detailType={"Archetype"}
                  detail={selected?.archetype}
                  style={styles.detail}
                />
              )}
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
