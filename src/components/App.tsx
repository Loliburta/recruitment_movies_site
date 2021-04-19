import { useState, useEffect } from "react";
import { Movie } from "./Movie/Movie";
import { apiCall } from "../utils/apiCall";
const apiKey = process.env.REACT_APP_API_KEY;
interface Props {
  id: number;
}
export const App = () => {
  let [movies, setMovies] = useState([]);
  let query = "";
  const base = "https://api.themoviedb.org/3/";
  const mostPopularMovies = `${base}popular?api_key=${apiKey}&language=en-US&page=1`;
  const search = `${base}search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

  useEffect(() => {
    apiCall(setMovies);
    console.log(movies);
  }, []);

  return (
    <div>
      {movies.length > 0 &&
        movies.map((movie: Props) => {
          return <Movie key={movie.id} id={movie.id} />;
        })}
    </div>
  );
};
