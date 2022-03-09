import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from "../ui/Card";
import styles from "./FlashCardItem.module.css";

function FlashCardItem({ id, word, details, tag, onCardsFilter }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardClickHandler = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <li className={styles.item}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Card>
          <div onClick={cardClickHandler} className={styles.content}>
            <h3>{word}</h3>
            <p className={(tag === 'learn') ? `${styles.tag} ${styles.learn}` : `${styles.tag} ${styles.repeat}`}>{tag}</p>
          </div>
        </Card>
        <Card>
          <div onClick={cardClickHandler} className={styles.content}>
            <p>{details}</p>
          </div>
        </Card>
      </ReactCardFlip>
    </li>
  );
}

export default FlashCardItem;
