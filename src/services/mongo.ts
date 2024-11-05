import { MongoClient, ObjectId } from "mongodb"

export async function connectDatabase() {
    const dbConnection: any = process.env.DATABASE_URL;
    return await MongoClient.connect(dbConnection);
}

export async function insertDocument(client: any, collection: string, document: object) {
    const db = client.db('stockflow');
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client: any, collection: string) {
    const db = client.db('stockflow');
    const documents = await db.collection(collection).find().toArray();
    return documents;
}
