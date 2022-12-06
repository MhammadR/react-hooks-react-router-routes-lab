import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <h3>Length: {movie.time}min</h3>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
}

export default Movies;
