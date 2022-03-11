import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsAction } from "../../features/cards/cards-slice";
import FlashCardItem from "./FlashCardItem";
import styles from "./FlashCardsList.module.css";
import { useDrop } from "react-dnd";

function FlashCardsList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.filteredFlashcards);
  const filter = useSelector((state) => state.cards.filter);

  const allFilterHandler = () => {
    dispatch(cardsAction.setFiler(null));
    dispatch(cardsAction.setFilteredCards());
  };
  const filterHandler = (e) => {
    dispatch(cardsAction.setFiler(e.target.innerText));
    dispatch(cardsAction.setFilteredCards());
  };

  //Dnd
  const [cardTag, setCardTag] = useState();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (card) => changeCardTag(card.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const changeCardTag = () => {
    cards.map((card) => {
      console.log(card.id)
    })
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterButtons}>
        <span
          onClick={allFilterHandler}
          className={
            filter === null
              ? `${styles.filter} ${styles.active}`
              : styles.filter
          }
        >
          all
        </span>
        <span
          ref={drop}
          onClick={filterHandler}
          className={
            filter === "learn"
              ? `${styles.filter} ${styles.active}`
              : styles.filter
          }
        >
          learn
        </span>
        <span
          ref={drop}
          sonClick={filterHandler}
          className={
            filter === "repeat"
              ? `${styles.filter} ${styles.active}`
              : styles.filter
          }
        >
          repeat
        </span>
      </div>
      <ul className={styles.list}>
        {cards.map((card) => (
          <FlashCardItem
            key={card.id}
            id={card.id}
            word={card.word}
            details={card.details}
            tag={card.tag}
          />
        ))}
      </ul>
    </div>
  );
}

export default FlashCardsList;
