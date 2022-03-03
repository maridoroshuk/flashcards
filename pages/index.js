import FlashCardsList from '../components/flashcards/FlashCardsList'
import styles from '../styles/Home.module.css'

const DUMMY_FLASHCARDS = [
 {id: 'f1', title: 'pupil', details: 'a person, especially a child at school, who is being taught'},
 {id: 'f2', title: 'impact', details: 'an effect or result'},
 {id: 'f3', title: 'unconscious', details: 'information processing of which we are unaware'},
 {id: 'f4', title: 'unconscious', details: 'information processing of which we are unaware'},
 {id: 'f5', title: 'unconscious', details: 'information processing of which we are unaware'},
 {id: 'f6', title: 'accuracy', details: 'the fact of being exact or correct'},
 {id: 'f7', title: 'accuracy', details: 'the fact of being exact or correct'},
 {id: 'f8', title: 'accuracy', details: 'the fact of being exact or correct'},
]


export default function Home() {
  return (
    <FlashCardsList flashcardlist={DUMMY_FLASHCARDS}/>
  )
}