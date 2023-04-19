/* /api/new-meetup */

import { MongoClient } from "mongodb";
import { auth } from "../auth/auth-mongoDB";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://marovichn:" +
        auth.password +
        "@nikola.wojtt5i.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup added" });
  }
}

export default handler;
