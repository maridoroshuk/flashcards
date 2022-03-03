import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = MongoClient.connect(
      "mongodb+srv://someuser:v7eg6yARvwyTPZMc@cluster0.ksdtr.mongodb.net/flashcards?retryWrites=true&w=majority"
    );

    const db = (await client).db();

    const flashcardsConnection = db.collection("flashcards");

    const result = flashcardsConnection.insertOne(data);

    (await client).close;

    res.status(201).json({ message: "Flashcard inserted" });
  }
}

export default handler;
