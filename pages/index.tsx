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
      <div className="flex flex-col content-center items-center p-16">
        <h1 className="w-fit text-5xl font-bold tracking-tight text-[#ebac95]">
          MoviePal
        </h1>
        <h2 className="text-xl font-medium text-white">
          Find your favourite movies and shows
        </h2>

        <div className="search mx-0 mt-16 mb-8 flex w-5/12 content-center items-center rounded-3xl bg-[#1f2123] py-5 px-7 shadow-[5px_5px_7px_#1c1d1f,_-5px_-5px_7px_#222527]">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border-none bg-[#1f2123] pr-4 text-xl font-medium text-[#a1a1a1] outline-none"
          />
          <Image
            src="/search.svg"
            alt="Search Icon"
            onClick={() => searchMovies(searchTerm)}
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>

        <div className="mt-12 flex w-full flex-wrap content-center items-center">
          {allMovies &&
            allMovies.map((movie: MovieType) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
      </div>
    </>
  )
}
