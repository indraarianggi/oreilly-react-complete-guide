import { NextPage } from "next";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { IMeetupInput } from "../../interfaces";

const NewMeetupPage: NextPage = () => {
  const addMeetupHandler = (newMeetup: IMeetupInput) => {
    console.log({ newMeetup });
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
