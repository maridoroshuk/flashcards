import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NewFlashCardForm from "../../components/flashcards/NewFlashCardForm";

function NewFlashcardPage() {
  const router = useRouter();

  async function onAddWordHandler(enteredData) {
    const response = await fetch("/api/new-flashcard", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
      },
    });
    const data = await response.json();

    router.push("/");
  }
  return (
    <>
      <Head>
        <title>FlashCard</title>
      </Head>
      <NewFlashCardForm onAddWord={onAddWordHandler} />
    </>
  );
}

export default NewFlashcardPage;
