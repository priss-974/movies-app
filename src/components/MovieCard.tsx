import React from "react";

import "./MovieCard.css";
import { useMovieContext } from "./MovieContext";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  const {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  } = useMovieContext();

  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">

      {/* POSTER */}
      <div className="movie-poster">

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        {/* FAVORITE BUTTON */}
        <button
          className={`favorite-btn ${favorite ? "active" : ""
            }`}
          onClick={onFavoriteClick}
        >
          {favorite ? "❤" : "♡"}
        </button>

        {/* OVERLAY */}
        <div className="movie-overlay">
          <button className="watch-btn">
            Ver Ahora
          </button>
        </div>

      </div>

      {/* INFO */}
      <div className="movie-info">

        <h3>{movie.title}</h3>

        <p>
          📅 {movie.release_date}
        </p>

      </div>

    </div>
  );
}

export default MovieCard;