import React from "react";
import FlashCardItem from "./FlashCardItem";
import styles from "./FlashCardsList.module.css";

function FlashCardsList() {
  return (
    <ul className={styles.list}>
      {FlashCardsList.map((card) => {
        <FlashCardItem
          key={card.id}
          id={card.id}
          title={card.title}
          details={card.details}
        />;
      })}
    </ul>
  );
}

export default FlashCardsList;
