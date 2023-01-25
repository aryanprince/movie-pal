import Image from 'next/image'
import React from 'react'

export type MovieType = {
  Year: string
  Poster: string
  Title: string
  Type: string
  imdbID?: string
}

type Props = {
  movie: MovieType
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="relative m-6 h-[460px] w-[310px] overflow-hidden rounded-xl border-none shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
      <div className="absolute top-0 w-full p-4 text-[#f9d3b4]">
        <p>{movie.Year}</p>
      </div>

      <div className="h-full w-full hover:h-full hover:opacity-30">
        <Image
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/400'
          }
          alt={movie.Title}
          width={400}
          height={400}
          className="h-full w-full"
        />
      </div>

      <div className="absolute bottom-0 right-0 left-0 z-10 bg-[#343739] px-6 pt-4 pb-6 hover:bg-transparent">
        <span className="text-sm font-semibold uppercase tracking-wide text-white">
          {movie.Type}
        </span>
        <h3 className="text-md mt-5px font-medium tracking-wide text-[#f9d3b4]">
          {movie.Title}
        </h3>
      </div>
    </div>
  )
}

export default MovieCard
