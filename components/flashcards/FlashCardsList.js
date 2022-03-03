import React from "react";
import FlashCardItem from "./FlashCardItem";
import styles from "./FlashCardsList.module.css";

function FlashCardsList({flashcardlist}) {

  return (
    <ul className={styles.list}>
      {flashcardlist.map((card) => (
        <FlashCardItem
          key={card.id}
          id={card.id}
          word={card.word}
          details={card.details}
        />
      ))}
    </ul>
  );
}

export default FlashCardsList;
