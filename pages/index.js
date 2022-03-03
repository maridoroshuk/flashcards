import { MongoClient } from 'mongodb';
import FlashCardsList from '../components/flashcards/FlashCardsList'
import styles from '../styles/Home.module.css'

const DUMMY_FLASHCARDS = [
 {id: 'f1', word: 'pupil', details: 'a person, especially a child at school, who is being taught'},
 {id: 'f2', word: 'impact', details: 'an effect or result'},
 {id: 'f3', word: 'unconscious', details: 'information processing of which we are unaware'},
 {id: 'f4', word: 'unconscious', details: 'information processing of which we are unaware'},
 {id: 'f5', word: 'unconscious', details: 'information processing of which we are unaware'},
 {id: 'f6', word: 'accuracy', details: 'the fact of being exact or correct'},
 {id: 'f7', word: 'accuracy', details: 'the fact of being exact or correct'},
 {id: 'f8', word: 'accuracy', details: 'the fact of being exact or correct'},
]


function Home({flashcards}) {
  console.log(flashcards)
  return (
    <FlashCardsList flashcardlist={DUMMY_FLASHCARDS}/>
  )
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