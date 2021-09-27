import React from "react";
import { IMeetup } from "../../interfaces";
import styles from "./MeetupDetails.module.css";

type TMeetupDetailsProps = Omit<IMeetup, "id">;

const MeetupDetails = ({
  image,
  title,
  address,
  description,
}: TMeetupDetailsProps) => {
  return (
    <section className={styles.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetails;
