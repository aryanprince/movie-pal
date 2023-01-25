import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

const inter = Inter({ subsets: ["latin"] });
const API_URL = `http://www.omdbapi.com?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;

interface Movie {
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
  imdbID: string;
}

export default function Home() {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setAllMovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies(searchTerm);
  // }, [searchTerm]);

  return (
    <>
      <Head>
        <title>MoviePal</title>
        <meta name="description" content="Find your favourite movies and shows with MoviePal. Created by @aryanprince." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <h1>MoviePal</h1>
        <h2 className={inter.className}>Find your favourite movies and shows</h2>

        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Image
            src="/search.svg"
            alt="Search Icon"
            onClick={() => searchMovies(searchTerm)}
            width={100}
            height={100}
          />
        </div>

        <div className="container">
          {allMovies &&
            allMovies.map((movie: Movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
      </div>
    </>
  );
}
