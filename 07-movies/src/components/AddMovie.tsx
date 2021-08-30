import React, { useRef } from "react";
import styled from "styled-components";
import { IMovie } from "../App";

const FormControl = styled.div`
  margin: 1rem 0;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  & input,
  & textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.2rem;
    border-radius: 12px;
    border: 1px solid #ccc;
  }

  & input:focus,
  & textarea:focus {
    outline: none;
    border-color: #230052;
  }
`;

type TAddMovieProps = {
  onAddMovie: (data: Omit<IMovie, "id">) => void;
};

const AddMovie = ({ onAddMovie }: TAddMovieProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // could add validation here...
    if (!titleRef.current || !openingTextRef.current || !releaseDateRef.current)
      return;

    const movie: Omit<IMovie, "id"> = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" ref={titleRef} />
      </FormControl>
      <FormControl>
        <label htmlFor="opening-text">Opening text</label>
        <textarea
          name="openingText"
          id="opening-text"
          cols={30}
          rows={10}
          ref={openingTextRef}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="release-date">Release Date</label>
        <input
          type="text"
          name="releaseDate"
          id="release-date"
          ref={releaseDateRef}
        />
      </FormControl>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
