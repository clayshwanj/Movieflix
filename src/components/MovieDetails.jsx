import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/" style={{ marginTop: "20px", display: "inline-block" }}>
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDetails;
