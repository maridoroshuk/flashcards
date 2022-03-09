import React from "react";
import styles from "./NavigationBar.module.css";
import Link from "next/link";
import {signOut, useSession } from "next-auth/react";

function NavigationBar() {
  const { data: session, status } = useSession();
  const isAuth = status === "authenticated" ? true : null;

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">Flashcards</Link>
        </div>
        {isAuth && (
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/new-flashcard">Create</Link>
              </li>
              <li>
                <button onClick={signOut}>Sign Out</button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default NavigationBar;
