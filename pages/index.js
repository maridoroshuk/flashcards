import { MongoClient } from "mongodb";
import React from "react";
import FlashCardsList from "../components/flashcards/FlashCardsList";

const DUMMY_FLASHCARDS = [
  {
    id: "f1",
    word: "pupil",
    details: "a person, especially a child at school, who is being taught",
  },
  { id: "f2", word: "impact", details: "an effect or result" },
  {
    id: "f3",
    word: "unconscious",
    details: "information processing of which we are unaware",
  },
  {
    id: "f4",
    word: "unconscious",
    details: "information processing of which we are unaware",
  },
  {
    id: "f5",
    word: "unconscious",
    details: "information processing of which we are unaware",
  },
  { id: "f6", word: "accuracy", details: "the fact of being exact or correct" },
  { id: "f7", word: "accuracy", details: "the fact of being exact or correct" },
  { id: "f8", word: "accuracy", details: "the fact of being exact or correct" },
];

function Home({ flashcards }) {
  console.log(flashcards);
  return <FlashCardsList flashcards={flashcards} />;
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://someuser:RO4VY0IbXfKDd6OW@cluster0.ksdtr.mongodb.net/flashcards?retryWrites=true&w=majority"
  );
  const db = client.db();

  const flashcardsCollections = db.collection("meetups");

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
