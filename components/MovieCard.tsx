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
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard
