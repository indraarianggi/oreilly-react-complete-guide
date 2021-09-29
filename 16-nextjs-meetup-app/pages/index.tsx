import { MongoClient } from "mongodb";

import type { InferGetStaticPropsType } from "next";
import MeetupList from "../components/meetups/MeetupList";

export const getStaticProps = async () => {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://indraarianggi:1234567890@cluster0.gopha.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 10, // (in seconds) This will unlock incremental static regeneration feature
  };
};

const Home = ({ meetups }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <MeetupList meetups={meetups} />;
};

export default Home;
