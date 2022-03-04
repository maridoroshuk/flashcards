import React from 'react'
import styles from './NavigationBar.module.css'
import Link from 'next/link'


function NavigationBar() {
  return (
    <header>
        <div className={styles.header}>
            <div className={styles.logo}>Flashcards</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All FlashCards</Link>
                    </li>
                    <li>
                        <Link href='/new-flashcard'>Add Card</Link>
                    </li>
                    <li>
                        <Link href='/api/auth'>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default NavigationBar