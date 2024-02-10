import React from "react";
import { useCards } from "../context/cardsContext";
import DetailsDisplay from "../components/DetailsDisplay";

export default function CardDetail() {
  // const { cards, collection, setCollection } = useCards();
  // const { id } = useParams();

  // const selected = cards.filter((card) => {
  //   return card.id === Number(id);
  // })[0];

  // // onClick - add to collection
  // function handleAddToCollection() {
  //   setCollection([...collection, selected]);
  // }

  // // onClick - remove from collection
  // function handleRemoveFromCollection() {
  //   const newCollection = collection.filter((card) => {
  //     return card.id !== selected.id;
  //   });

  //   setCollection(newCollection);
  // }

  // // store collection to localStorage
  // localStorage.setItem("collection", JSON.stringify(collection));

  // // helper function - check if selected card is in collections already
  // function isInCollection() {
  //   return collection.some((card) => card.id === selected.id);
  // }

  // console.log(selected);

  // return (
  //   <div>
  //     <PageNav />

  //     <section className={styles.detailContainer}>
  //       <div className={styles.path}>
  //         <span>Home / </span>
  //         <span> Cards / </span>
  //         <span> {selected?.name}</span>
  //       </div>

  //       <div className={styles.detailsBox}>
  //         <div>
  //           <img
  //             src={selected?.card_images.at(0).image_url}
  //             alt={selected?.name}
  //           />

  //           {isInCollection() ? (
  //             <Button
  //               onClick={handleRemoveFromCollection}
  //               style={styles.removeBtn}
  //             >
  //               Remove From Collection
  //             </Button>
  //           ) : (
  //             <Button onClick={handleAddToCollection} style={styles.addBtn}>
  //               Add to Collection
  //             </Button>
  //           )}
  //         </div>

  //         <div className={styles.ccc}>
  //           <h1>{selected?.name}</h1>

  //           <div className={styles.detailInfo}>
  //             {selected?.type && (
  //               <Details
  //                 detailType={"Type"}
  //                 detail={selected?.type}
  //                 style={styles.detail}
  //               />
  //             )}

  //             {selected?.attribute && (
  //               <Details
  //                 detailType={"Attribute"}
  //                 detail={selected?.attribute}
  //                 style={styles.detail}
  //               />
  //             )}

  //             {selected?.race && (
  //               <Details
  //                 detailType={"Race"}
  //                 detail={selected?.race}
  //                 style={styles.detail}
  //               />
  //             )}

  //             {selected?.level && (
  //               <Details
  //                 detailType={"Level"}
  //                 detail={selected?.level}
  //                 style={styles.detail}
  //               />
  //             )}

  //             {selected?.atk && (
  //               <Details
  //                 detailType={"Attack"}
  //                 detail={selected?.atk}
  //                 style={styles.detail}
  //               />
  //             )}

  //             {selected?.def && (
  //               <Details
  //                 detailType={"Defense"}
  //                 detail={selected?.def}
  //                 style={styles.detail}
  //               />
  //             )}

  //             {selected?.attribute && (
  //               <Details
  //                 detailType={"Attribute"}
  //                 detail={selected?.attribute}
  //                 style={styles.detail}
  //               />
  //             )}

  //             {selected?.archetype && (
  //               <Details
  //                 detailType={"Archetype"}
  //                 detail={selected?.archetype}
  //                 style={styles.detail}
  //               />
  //             )}
  //           </div>

  //           <div className={styles.cardText}>
  //             <h2>Card Text</h2>
  //             <p>{selected?.desc}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
  const { cards } = useCards();

  return <DetailsDisplay array={cards} />;
}
