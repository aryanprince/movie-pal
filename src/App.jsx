import React, { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

// a36e34b6 OMDB Api
const API_URL = "http://www.omdbapi.com?apikey=a36e34b6";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    // searchMovies("Avengers");
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

      <div className="container"></div>
    </div>
  );
};

export default App;