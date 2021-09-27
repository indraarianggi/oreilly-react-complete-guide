import React, { useRef } from "react";
import { IMeetup, IMeetupInput } from "../../interfaces";
import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

type TNewMeetupFormProps = {
  onAddMeetup: (newMeetup: IMeetupInput) => void;
};

const NewMeetupForm = ({ onAddMeetup }: TNewMeetupFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (
      !titleInputRef.current ||
      !imageInputRef.current ||
      !addressInputRef.current ||
      !descriptionInputRef.current
    )
      return;

    const meetupData: IMeetupInput = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            ref={titleInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            name="image"
            id="image"
            required
            ref={imageInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            ref={addressInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            required
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
