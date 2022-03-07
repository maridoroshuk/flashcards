import React from "react";
import styles from "./NavigationBar.module.css";
import Link from "next/link";

function NavigationBar() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">Flashcards</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/new-flashcard">Create</Link>
            </li>
            <li>
              <Link href="/api/auth">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavigationBar;
