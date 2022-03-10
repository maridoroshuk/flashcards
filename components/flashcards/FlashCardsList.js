import React from "react";
import { useState,  useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsAction } from "../../features/cards/cards-slice";
import FlashCardItem from "./FlashCardItem";
import styles from "./FlashCardsList.module.css";

function FlashCardsList({ flashcards }) {
  const dispatch = useDispatch()
  const  cards = useSelector((state) => state.cards.flashcards)
  const  filter = useSelector((state) => state.cards.filter)
  console.log(filter)

  const allFilterHandler = () => {
    dispatch(cardsAction.setFiler(''))
    dispatch(cardsAction.setFilteredCards())

  }
  const filterHandler = (e) => {
    dispatch(cardsAction.setFiler(e.target.innerText))
    dispatch(cardsAction.setFilteredCards())
  };
  return (
    <div className={styles.container}>
      <div className={styles.filterButtons}>
        <span onClick={allFilterHandler} className={filter === 'all' ? `${styles.filter} ${styles.active}` : styles.filter}>all</span>
        <span onClick={filterHandler} className={filter === 'learn' ? `${styles.filter} ${styles.active}` : styles.filter}>learn</span>
        <span onClick={filterHandler} className={filter === 'repeat' ? `${styles.filter} ${styles.active}` : styles.filter}>repeat</span>
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
