import type { Data } from "../interfaces/Movie";

const API_KEY = "22d8c17988d5590d8b2dc391f908e9ea";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async (): Promise<Data> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const data: Data = await response.json();

  console.log(data.results);

  return data;
};
