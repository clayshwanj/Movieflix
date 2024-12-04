import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <div className="Moviecard">
        <img src={movie.posterURL} alt={movie.title} />
        <h3>
          <Link to={`/movie/${title}`}>{movie.title}</Link>
        </h3>
        <p>{movie.description}</p>
        <p>
          <strong>Rating:</strong> {movie.rating}/5
        </p>
      </div>
    </>
  );
};

export default MovieCard;
