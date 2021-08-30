import styled from "styled-components";
import { IMovie } from "../App";
import Movie from "./Movie";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

type TMoviesListProps = {
  movies: IMovie[];
};

const MoviesList = ({ movies }: TMoviesListProps) => {
  return (
    <List>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </List>
  );
};

export default MoviesList;
