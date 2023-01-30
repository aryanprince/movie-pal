import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import type { MovieType } from '../components/MovieCard'
import MovieCard from '../components/MovieCard'

import { Search } from 'lucide-react'
import { BsSearch } from 'react-icons/bs'

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>

      <div className="flex h-screen flex-col content-center items-center p-4 lg:p-16 lg:pb-0">
        {/* HEADING */}
        <h1 className="mt-14 text-5xl font-extrabold tracking-tight text-[#ebac95] lg:mt-12">
          MoviePal
        </h1>
        <h2 className="mt-6 text-center text-xl font-medium text-white">
          Find your favourite movies and shows
        </h2>

        {/* SEARCH (TEXT BOX + LOGO) */}
        <div className="my-8 flex w-full max-w-lg content-center items-center rounded-3xl bg-[#1f2123] py-5 px-7 shadow-[5px_5px_7px_#1c1d1f,_-5px_-5px_7px_#222527] md:max-w-lg lg:mt-16 lg:max-w-xl">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchMovies(searchTerm)
              }
            }}
            className="w-full border-none bg-[#1f2123] text-xl font-medium text-[#a1a1a1] outline-none"
          />
          <Search
            className="cursor-pointer text-[#ebac95]"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {/* MOVIES */}
        <div className="mt-2 mb-auto grid w-full grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-3 md:gap-4 lg:mt-12 lg:max-w-5xl lg:grid-cols-5">
          {allMovies &&
            allMovies.map((movie: MovieType) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>

        <footer className="mt-8 mb-4 text-white lg:mb-8">
          Made by{' '}
          <a
            href="https://github.com/aryanprince"
            target="_blank"
            rel="noreferrer"
          >
            <span className="underline">Aryan</span>
          </a>
          .
        </footer>
      </div>
    </>
  )
}
