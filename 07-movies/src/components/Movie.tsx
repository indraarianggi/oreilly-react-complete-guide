import styled from "styled-components";

const ListItem = styled.li`
  margin: 1rem;
  padding: 1rem;
  background-color: #230052;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  text-align: center;
  color: white;

  & h2 {
    font-size: 2rem;
    color: #f7e702;
  }

  & h3 {
    color: #eccf77;
    margin: 0;
    font-size: 1rem;
  }
`;

type TMovieProps = {
  title: string;
  releaseDate: string;
  openingText: string;
};

const Movie = ({ title, releaseDate, openingText }: TMovieProps) => {
  return (
    <ListItem>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </ListItem>
  );
};

export default Movie;
