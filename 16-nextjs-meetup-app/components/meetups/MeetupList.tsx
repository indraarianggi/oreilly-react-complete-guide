import React from "react";
import styles from "./MeetupList.module.css";
import { IMeetup } from "../../interfaces";
import MeetupItem from "./MeetupItem";

type TMeetupListProps = {
  meetups: IMeetup[];
};

const MeetupList = ({ meetups }: TMeetupListProps) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
