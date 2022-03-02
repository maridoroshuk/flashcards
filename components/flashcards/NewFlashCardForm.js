import React, { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewFlashCardForm.module.css";

function NewFlashCardForm({onAddWord}) {
    const wordInputRef = useRef();
    const detailsInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredWord = wordInputRef.current.value;
        const enteredDetails = detailsInputRef.current.value;

        const flashcardData = {
            word: enteredWord,
            details: enteredDetails
        }

        onAddWord(flashcardData)
    }
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Word?</label>
          <input type="text" required id="title" ref={wordInputRef}/>
        </div>
        <div className={styles.control}>
          <label htmlFor="details">Explanation</label>
          <textarea type="text" required id="details" rows="5" ref={detailsInputRef}></textarea>
        </div>
        <div className={styles.actions}>
            <button>Add Card</button>
        </div>
      </form>
    </Card>
  );
}

export default NewFlashCardForm;
