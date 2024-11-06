import { connectDatabase, insertDocument, getAllDocuments } from '../../services/mongo';
// import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server'


export async function GET() {
  const client = await connectDatabase();
  const books = getAllDocuments(client, 'books');
  return NextResponse.json(books);
}

