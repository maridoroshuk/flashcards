import React from "react";
import FlashCardItem from "./FlashCardItem";
import styles from "./FlashCardsList.module.css";

function FlashCardsList({flashcards}) {

  const onCardsFilter = (filter) => {
    console.log(filter)
  }
  return (
    <ul className={styles.list}>
      {flashcards.map((card) => (
        <FlashCardItem
          key={card.id}
          id={card.id}
          word={card.word}
          details={card.details}
          tag={card.tag}
          onCardsFilter={onCardsFilter}
        />
      ))}
    </ul>
  );
}

export default FlashCardsList;
