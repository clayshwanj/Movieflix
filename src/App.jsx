import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./components/Movielist";
import MovieDetails from "./components/MovieDetails";
import Filter from "./components/Filter";
import Movies from "../movies.js";

const App = () => {
  const [movies, setMovies] = useState([
    // Movies array (same as above)
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (title, rating) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === "" || movie.rating >= Number(rating))
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px" }}>Movie App</h1>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Filter onFilter={handleFilter} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          {/* Movie Details Page */}
          <Route
            path="/movie/:title"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
