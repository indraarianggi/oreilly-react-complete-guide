import { MongoClient, ObjectId } from "mongodb";

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

export const getStaticPaths: GetStaticPaths = async () => {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://indraarianggi:1234567890@cluster0.gopha.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params?.meetupId;

  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://indraarianggi:1234567890@cluster0.gopha.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId as string),
  });

  client.close();

  return {
    props: {
      meetupData: {
        title: selectedMeetup?.title,
        image: selectedMeetup?.image,
        address: selectedMeetup?.address,
        description: selectedMeetup?.description,
      },
    },
  };
};

const MeetupDetailsPage = ({
  meetupData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MeetupDetails
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export default MeetupDetailsPage;
