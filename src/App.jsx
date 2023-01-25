import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

function App() {
  const [allMovies, setAllMovies] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setAllMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>BudgetPlex</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">
        {allMovies &&
          allMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default App;
