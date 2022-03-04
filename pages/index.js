import { MongoClient } from "mongodb";
import { signIn, signOut, useSession } from "next-auth/react";

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
  const [session, loading] = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
  // return <FlashCardsList flashcardlist={DUMMY_FLASHCARDS} />;
}

// export async function getStaticPath() {
//   const client = MongoClient.connect(
//     "mongodb+srv://someuser:v7eg6yARvwyTPZMc@cluster0.ksdtr.mongodb.net/flashcards?retryWrites=true&w=majority"
//   );
//   const db = (await client).db();

//   const flashcardsCollections = db.collection("flashcard");

//   const flashcards = await flashcardsCollections.find().toArray();
//   (await client).close();

//   return {
//     paths: flashcards.map((card) => ({
//       params: {cardId: card._id.toString() }
//     })),
//     fallback: 'clocking'
//   }
// }

export async function getStaticProps() {
  const client = MongoClient.connect(
    "mongodb+srv://someuser:v7eg6yARvwyTPZMc@cluster0.ksdtr.mongodb.net/flashcards?retryWrites=true&w=majority"
  );
  const db = (await client).db();

  const flashcardsCollections = db.collection("flashcard");

  const flashcards = await flashcardsCollections.find().toArray();
  (await client).close();

  return {
    props: {
      flashcards: flashcards.map((card) => ({
        title: card.title,
        details: card.details,
        id: card._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
