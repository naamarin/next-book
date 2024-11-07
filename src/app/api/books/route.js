import { connectDatabase, insertDocument, getAllDocuments } from '../../../services/mongo';
// import { ObjectId } from 'mongodb';

import { NextResponse } from 'next/server'

export async function GET(request) {
  const client = await connectDatabase();
  const books = await getAllDocuments(client, 'books');
  return NextResponse.json(books);
}
