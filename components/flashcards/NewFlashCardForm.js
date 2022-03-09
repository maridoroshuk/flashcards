import React, { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewFlashCardForm.module.css";

function NewFlashCardForm({onAddWord}) {
    const wordInputRef = useRef();
    const detailsInputRef = useRef();
    const tagInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredWord = wordInputRef.current.value;
        const enteredDetails = detailsInputRef.current.value;
        const tag = tagInputRef.current.value;

        const flashcardData = {
            word: enteredWord,
            details: enteredDetails,
            tag: tag
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
        <div className={styles.control}>
          <label htmlFor="details">Tags</label>
          <select ref={tagInputRef}>
          <option>learn</option>
          <option >repeat</option>
          </select>
        </div>
        <div className={styles.actions}>
            <button>Add Card</button>
        </div>
      </form>
    </Card>
  );
}

export default NewFlashCardForm;
