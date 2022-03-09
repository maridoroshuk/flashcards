import React from "react";
import { useState } from "react";
import FlashCardItem from "./FlashCardItem";
import styles from "./FlashCardsList.module.css";

function FlashCardsList({ flashcards }) {
  const [filteredCards, setFilteredCards] = useState(flashcards);
  let filter = '';
  const allFilterHandler = (e) => {
    setFilteredCards(flashcards)
  }
  const filterHandler = (e) => {
    filter = e.target.innerText;
    const cards = flashcards.filter((card) => card.tag === filter);
    setFilteredCards(cards);
  };
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <span onClick={allFilterHandler} className={filter === 'all' ? styles.active : ""}>all</span>
        <span onClick={filterHandler} className={filter === 'learn' ? styles.active : ""}>learn</span>
        <span onClick={filterHandler} className={filter === 'repeat' ? styles.active : ""}>repeat</span>
      </div>
      <ul className={styles.list}>
        {filteredCards.map((card) => (
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
