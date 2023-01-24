import React, { useEffect } from "react";

import "./App.css";
import SearchIcon from "./assets/search.svg";

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

const AvengersMovieObject = {
  Title: "The Avengers",
  Year: "2012",
  imdbID: "tt0848228",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>BudgetPlex</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Hereditary"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search Icon" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{AvengersMovieObject.Year}</p>
          </div>

          <div>
            <img
              src={
                AvengersMovieObject.Poster !== "N/A"
                  ? AvengersMovieObject.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={AvengersMovieObject.Title}
            />
          </div>

          <div>
            <span>{AvengersMovieObject.Type}</span>
            <h3>{AvengersMovieObject.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
