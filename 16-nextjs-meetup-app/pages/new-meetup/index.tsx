import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { IMeetupInput } from "../../interfaces";

const NewMeetupPage: NextPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (newMeetup: IMeetupInput) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
