import { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import type { Movie } from "../interfaces/Movie";
import MovieCard from "../components/MovieCard";

interface HomeProps {
  search: string;
}

function Home({ search }: HomeProps) {

  const [movies, setMovies] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadMovies = async () => {

      try {

        const peliculas = await getMovies();

        setMovies(peliculas.results);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    loadMovies();

  }, []);

  // FILTRAR PELÍCULAS

  const filteredMovies = movies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="home-page">

      {/* HERO */}

      <div className="hero-banner">

        <div className="hero-overlay">

          <h1>
            Películas ilimitadas,
            series y mucho más.
          </h1>

          <p>
            Disfruta las mejores películas
            en una experiencia estilo Netflix.
          </p>

        </div>

      </div>

      {/* LOADING */}

      {loading ? (

        <div className="loading-container">
          <div className="loader"></div>
        </div>

      ) : (

        <>
          {/* TITLE */}

          <div className="section-header">

            <h2>
              🔥 Tendencias
            </h2>

          </div>

          {/* MOVIES */}

          {filteredMovies.length > 0 ? (

            <div className="movies-grid">

              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}

            </div>

          ) : (

            <div className="not-found">

              <h2>
                No se encontraron películas
              </h2>

              <p>
                Intenta buscar otra película
              </p>

            </div>

          )}
        </>

      )}

    </div>
  );
}

export default Home;