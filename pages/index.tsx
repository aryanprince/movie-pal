import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import type { MovieType } from '../components/MovieCard'
import MovieCard from '../components/MovieCard'

export default function Home() {
  const [allMovies, setAllMovies] = useState<MovieType[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const API_URL = `https://www.omdbapi.com?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setAllMovies(data.Search)
  }

  return (
    <>
      <Head>
        <title>MoviePal</title>
        <meta
          name="description"
          content="Find your favourite movies and shows with MoviePal. Created by @aryanprince."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <h1 className="font-extrabold tracking-tight">MoviePal</h1>
        <h2 className="text-white text-xl font-medium">
          Find your favourite movies and shows
        </h2>

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
            allMovies.map((movie: MovieType) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
      </div>
    </>
  )
}
