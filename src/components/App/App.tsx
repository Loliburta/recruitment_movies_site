import { useState, useEffect } from "react";
import { Movie } from "../Movie/Movie";
import { apiCall } from "../../utils/apiCall";
const apiKey = process.env.REACT_APP_API_KEY;
interface Props {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  poster_path: string;
}
export const App = () => {
  let [movies, setMovies] = useState([]);
  let query = "";
  const base = "https://api.themoviedb.org/3/";
  const search = `${base}search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

  useEffect(() => {
    apiCall(setMovies);
    console.log(movies);
  }, []);

  return (
    <div className="movies">
      {movies.length > 0 &&
        movies.map((movie: Props) => {
          return (
            <Movie
              key={movie.id}
              original_title={movie.original_title}
              overview={movie.overview}
              release_date={movie.release_date}
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
            />
          );
        })}
    </div>
  );
};
