import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ========================= */
/* TYPES */
/* ========================= */

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type MovieContextType = {
  favorites: Movie[];

  addToFavorites: (
    movie: Movie
  ) => void;

  removeFromFavorites: (
    id: number
  ) => void;

  isFavorite: (
    id: number
  ) => boolean;
};

/* ========================= */
/* CONTEXT */
/* ========================= */

const MovieContext =
  createContext<MovieContextType | null>(
    null
  );

/* ========================= */
/* CUSTOM HOOK */
/* ========================= */

export const useMovieContext = () => {

  const context =
    useContext(MovieContext);

  if (!context) {

    throw new Error(
      "useMovieContext debe usarse dentro de MovieProvider"
    );
  }

  return context;
};

type Props = {
  children: ReactNode;
};

export const MovieProvider = ({ children,}: Props) => {

  const [favorites, setFavorites] =
    useState<Movie[]>(() => {

      const storedFavorites =
        localStorage.getItem(
          "favorites"
        );

      return storedFavorites
        ? JSON.parse(storedFavorites)
        : [];
    });

  /* ========================= */
  /* SAVE FAVORITES */
  /* ========================= */

  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);

  /* ========================= */
  /* ADD FAVORITE */
  /* ========================= */

  const addToFavorites = (
    movie: Movie
  ) => {

    const exists =
      favorites.some(
        (fav) =>
          fav.id === movie.id
      );

    if (!exists) {

      setFavorites((prev) => [
        ...prev,
        movie,
      ]);
    }
  };

  /* ========================= */
  /* REMOVE FAVORITE */
  /* ========================= */

  const removeFromFavorites = (
    id: number
  ) => {

    setFavorites((prev) =>
      prev.filter(
        (movie) =>
          movie.id !== id
      )
    );
  };

  /* ========================= */
  /* CHECK FAVORITE */
  /* ========================= */

  const isFavorite = (
    id: number
  ) => {

    return favorites.some(
      (movie) =>
        movie.id === id
    );
  };

  /* ========================= */
  /* PROVIDER RETURN */
  /* ========================= */

  return (

    <MovieContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >

      {children}

    </MovieContext.Provider>
  );
};