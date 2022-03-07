import { MongoClient } from "mongodb";
import React from "react";
import FlashCardsList from "../components/flashcards/FlashCardsList";

function Home({ flashcards }) {
  return <FlashCardsList flashcards={flashcards} />;
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
        id: card._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
