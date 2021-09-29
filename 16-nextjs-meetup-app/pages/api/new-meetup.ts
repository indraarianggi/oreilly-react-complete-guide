// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { IMeetupInput } from "../../interfaces";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data: IMeetupInput = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://indraarianggi:1234567890@cluster0.gopha.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log({ result });

    client.close();

    res.status(200).json({ message: "Meetup inserted!" });
  }
};

export default handler;
