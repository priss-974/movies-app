import MovieCard from "../components/MovieCard";

import { useMovieContext }
  from "../components/MovieContext";

function Favorites() {

  const { favorites } =
    useMovieContext();

  return (

    <div className="favorites-page">

      {/* HEADER */}

      <div className="favorites-header">

        <h1 className="favorites-title">
          ❤️ Mis Favoritas
        </h1>

      </div>

      {/* EMPTY */}

      {favorites.length === 0 ? (

        <div className="favorites-empty">

          <div className="empty-box">

            <h2>
              No tienes películas guardadas
            </h2>

            <p>
              Agrega películas tocando
              el corazón ❤️
            </p>

          </div>

        </div>

      ) : (

        /* GRID */

        <div className="movies-grid">

          {favorites.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default Favorites;