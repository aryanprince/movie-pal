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
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <Image
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/400'
          }
          alt={movie.Title}
          width={400}
          height={400}
        />
      </div>

      <div>
        <span className="text-sm font-semibold tracking-wide">
          {movie.Type}
        </span>
        <h3 className="text-md font-medium tracking-wide">{movie.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard
