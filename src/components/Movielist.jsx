import React from "react";
import MovieCard from "./Moviecard";

const MovieList = ({ movieList }) => {
  return (
    <div>
      {movieList.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
