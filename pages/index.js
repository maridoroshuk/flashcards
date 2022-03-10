import { MongoClient } from "mongodb";
import React, { useEffect } from "react";
import FlashCardsList from "../components/flashcards/FlashCardsList";
import { signIn, useSession } from "next-auth/react";
import styles from './Home.module.css'
import { useDispatch } from "react-redux";
import { cardsAction } from "../features/cards/cards-slice";

function Home({ flashcards }) {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  useEffect(() => {
    dispatch(cardsAction.setFlashcards(flashcards))
  },[])
  if (status === "authenticated") {
    return (
      <>
          <FlashCardsList/>
      </>
    );
  }
  return <div className={styles.signin}>
    <h1>Please sign in to see the content</h1>
  <button  onClick={signIn}>Sign In</button>
  </div>
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://someuser:RO4VY0IbXfKDd6OW@cluster0.ksdtr.mongodb.net/flashcards?retryWrites=true&w=majority"
  );
  const db = client.db();

  const flashcardsCollections = db.collection("flashcards");

  const flashcards = await flashcardsCollections.find().toArray();

  client.close();

  return {
    props: {
      flashcards: flashcards.map((card) => ({
        word: card.word,
        details: card.details,
        tag: card.tag,
        id: card._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
