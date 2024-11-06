// pages/api/books/[id].jsh
import { connectDatabase, insertDocument, getAllDocuments } from '../../services/mongo';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return res.status(500).json({ message: 'Failed to connect to the database.' });
  }

  const db = client.db('db01');
  const collection = db.collection('books');

  if (req.method === 'GET') {
    try {
      const book = await collection.findOne({ _id: new ObjectId(id) });
      if (!book) return res.status(404).json({ message: 'Book not found.' });
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: 'Fetching book failed.' });
    }
  } else if (req.method === 'PUT') {
    const updatedBook = req.body;
    try {
      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedBook }
      );
      if (result.matchedCount === 0) return res.status(404).json({ message: 'Book not found.' });
      res.status(200).json({ message: 'Book updated.' });
    } catch (error) {
      res.status(500).json({ message: 'Updating book failed.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 0) return res.status(404).json({ message: 'Book not found.' });
      res.status(200).json({ message: 'Book deleted.' });
    } catch (error) {
      res.status(500).json({ message: 'Deleting book failed.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }

  client.close();
}
