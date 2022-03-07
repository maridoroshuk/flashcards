import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://someuser:RO4VY0IbXfKDd6OW@cluster0.ksdtr.mongodb.net/flashcards?retryWrites=true&w=majority'
    );
    const db = client.db();

    const flashcardsCollection = db.collection('flashcards');

    const result = await flashcardsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Flashcard inserted!' });
  }
}

export default handler;
