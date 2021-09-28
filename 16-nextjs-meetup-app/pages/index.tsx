import type { InferGetStaticPropsType } from "next";
import MeetupList from "../components/meetups/MeetupList";
import { IMeetup } from "../interfaces";

const DUMMY_MEETUPS: IMeetup[] = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // (in seconds) This will unlock incremental static regeneration feature
  };
};

const Home = ({ meetups }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <MeetupList meetups={meetups} />;
};

export default Home;
